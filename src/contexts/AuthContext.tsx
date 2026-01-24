import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  isAuthenticated: boolean;
  login: (mobileNumber: string, password: string) => boolean;
  register: (userData: Omit<UserProfile, "id" | "avatar" | "createdAt">, password: string) => boolean;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "eduportal_auth";
const USERS_STORAGE_KEY = "eduportal_users";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Check for existing session
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth) {
      try {
        const parsedUser = JSON.parse(storedAuth);
        setUser(parsedUser);
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);

  const getStoredUsers = (): Record<string, { profile: UserProfile; password: string }> => {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  };

  const saveStoredUsers = (users: Record<string, { profile: UserProfile; password: string }>) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const register = (userData: Omit<UserProfile, "id" | "avatar" | "createdAt">, password: string): boolean => {
    const users = getStoredUsers();
    
    // Check if mobile number already exists
    if (users[userData.mobileNumber]) {
      return false;
    }

    const newUser: UserProfile = {
      ...userData,
      id: `USR${Date.now()}`,
      avatar: "",
      createdAt: new Date().toISOString(),
    };

    users[userData.mobileNumber] = { profile: newUser, password };
    saveStoredUsers(users);
    
    // Auto login after registration
    setUser(newUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
    
    return true;
  };

  const login = (mobileNumber: string, password: string): boolean => {
    const users = getStoredUsers();
    const userRecord = users[mobileNumber];
    
    if (userRecord && userRecord.password === password) {
      setUser(userRecord.profile);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userRecord.profile));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedUser));
    
    // Update in users storage too
    const users = getStoredUsers();
    if (users[user.mobileNumber]) {
      users[user.mobileNumber].profile = updatedUser;
      saveStoredUsers(users);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
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
