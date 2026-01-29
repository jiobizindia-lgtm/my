// src/contexts/AuthContext.tsx (modified imports to use src/firebase/firebase.ts)
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile as updateFirebaseProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc 
} from 'firebase/firestore';
import { auth, db } from "@/firebase/firebase"; // <-- changed import

export interface UserProfile {
  id: string;
  firstName: string;
  middleName: string;
  surname: string;
  fatherName: string;
  mobileNumber: string;
  email: string;
  state: string;
  district: string;
  city: string;
  avatar: string;
  createdAt: string;
}

interface AuthContextType {
  user: UserProfile | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: Omit<UserProfile, "id" | "avatar" | "createdAt">, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes using auth exported from firebase module
    const unsubscribe = onAuthStateChanged(auth, async (fUser) => {
      setFirebaseUser(fUser);
      
      if (fUser) {
        try {
          const userDocRef = doc(db, "users", fUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUser(userDoc.data() as UserProfile);
          } else {
            const newUserProfile: UserProfile = {
              id: fUser.uid,
              firstName: fUser.displayName?.split(' ')[0] || '',
              middleName: '',
              surname: fUser.displayName?.split(' ')[1] || '',
              fatherName: '',
              mobileNumber: '',
              email: fUser.email || '',
              state: '',
              district: '',
              city: '',
              avatar: fUser.photoURL || '',
              createdAt: new Date().toISOString(),
            };
            await setDoc(userDocRef, newUserProfile);
            setUser(newUserProfile);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setUser(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // login, register, logout, updateProfile implementations remain same
  // (use signInWithEmailAndPassword(auth, ...) etc.)
  // ...
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || "Login failed" };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const register = async (
    userData: Omit<UserProfile, "id" | "avatar" | "createdAt">, 
    password: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, password);
      await updateFirebaseProfile(userCredential.user, {
        displayName: `${userData.firstName} ${userData.surname}`.trim(),
      });

      const newUserProfile: UserProfile = {
        ...userData,
        id: userCredential.user.uid,
        avatar: '',
        createdAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "users", userCredential.user.uid), newUserProfile);
      setUser(newUserProfile);
      return { success: true };
    } catch (err: any) {
      let errorMessage = "Registration failed.";
      if (err.code === "auth/email-already-in-use") errorMessage = "Email already in use.";
      return { success: false, error: errorMessage };
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !firebaseUser) return;
    try {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      await updateDoc(doc(db, 'users', firebaseUser.uid), updates);
      if (updates.firstName || updates.surname) {
        await updateFirebaseProfile(firebaseUser, {
          displayName: `${updatedUser.firstName} ${updatedUser.surname}`.trim()
        });
      }
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      firebaseUser,
      isAuthenticated: !!firebaseUser,
      login,
      register,
      logout,
      updateProfile,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
