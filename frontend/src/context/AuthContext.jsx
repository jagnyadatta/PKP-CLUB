import React, { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../utils/constant";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("pkp_admin_token") || null);
  const [loading, setLoading] = useState(true);

  // Validate existing token on load
  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();

        if (data.success && data.user) {
          setUser(data.user);
        } else {
          // Token invalid or expired
          logout();
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        // If server is unreachable, retain token or reset
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [token]);

  const login = async (identifier, password) => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ identifier, password })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }

      // Check if user is admin
      if (!data.user?.isAdmin) {
        throw new Error("Access Denied: Only administrators are authorized to access this dashboard. (କେବଳ ଆଡମିନଙ୍କ ପାଇଁ ଅନୁମତି ଅଛି)");
      }

      localStorage.setItem("pkp_admin_token", data.token);
      setToken(data.token);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("pkp_admin_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isAdmin: !!user?.isAdmin,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
