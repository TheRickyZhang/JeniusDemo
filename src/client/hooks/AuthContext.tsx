// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { fetchSession, loginApi, logoutApi } from "@/client/api/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  id: string;
  errorMessage: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading]             = useState(true);
  const [id, setId]                           = useState("");
  const [errorMessage, setErrorMessage]       = useState("");

  const checkSession = async () => {
    try {
      const user = await fetchSession();        // expects { id, email, firstName, lastName }
      setId(user.id);
      setIsAuthenticated(true);
      setErrorMessage("");
    } catch (err) {
      setIsAuthenticated(false);
      setErrorMessage(err + "");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await loginApi({ email, password });
      const user = await fetchSession();
      setId(user.id);
      setIsAuthenticated(true);
      setErrorMessage("");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message ?? "Login failed");
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutApi();
      setIsAuthenticated(false);
      setId("");
      setErrorMessage("");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message ?? "Logout failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <AuthContext.Provider
          value={{
            isAuthenticated,
            login,
            logout,
            isLoading,
            id,
            errorMessage,
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
