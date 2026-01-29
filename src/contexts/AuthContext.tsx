import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile as updateFirebaseProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc 
} from 'firebase/firestore';
import { app } from '../App'; // Import your Firebase app from App.tsx

const auth = getAuth(app);
const db = getFirestore(app);

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
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setFirebaseUser(firebaseUser);
      
      if (firebaseUser) {
        // Fetch user profile from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            setUser(userDoc.data() as UserProfile);
          } else {
            // Create profile if it doesn't exist
            const newUserProfile: UserProfile = {
              id: firebaseUser.uid,
              firstName: firebaseUser.displayName?.split(' ')[0] || '',
              middleName: '',
              surname: firebaseUser.displayName?.split(' ')[1] || '',
              fatherName: '',
              mobileNumber: '',
              email: firebaseUser.email || '',
              state: '',
              district: '',
              city: '',
              avatar: firebaseUser.photoURL || '',
              createdAt: new Date().toISOString(),
            };
            await setDoc(doc(db, 'users', firebaseUser.uid), newUserProfile);
            setUser(newUserProfile);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUser(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (
    userData: Omit<UserProfile, "id" | "avatar" | "createdAt">, 
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        userData.email, 
        password
      );
      
      // Update display name
      await updateFirebaseProfile(userCredential.user, {
        displayName: `${userData.firstName} ${userData.surname}`.trim()
      });

      // Create user profile in Firestore
      const newUserProfile: UserProfile = {
        ...userData,
        id: userCredential.user.uid,
        avatar: '',
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), newUserProfile);
      setUser(newUserProfile);
      
      return { success: true };
    } catch (error: any) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        error: error.message || 'Registration failed. Please try again.' 
      };
    }
  };

  const login = async (
    email: string, 
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error: any) {
      console.error('Login error:', error);
      
      // User-friendly error messages
      let errorMessage = 'Login failed. Please check your credentials.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      }
      
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !firebaseUser) return;
    
    try {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      
      // Update in Firestore
      await updateDoc(doc(db, 'users', firebaseUser.uid), updates);
      
      // Update Firebase auth profile if needed
      if (updates.firstName || updates.surname) {
        await updateFirebaseProfile(firebaseUser, {
          displayName: `${updatedUser.firstName} ${updatedUser.surname}`.trim()
        });
      }
      
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
