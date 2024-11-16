// src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router';


type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
  login: (username: string, user_id: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate()
  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    
    // Perform additional logout actions here if needed, such as clearing tokens
    navigate('/home'); // Redirect to login page
  };
  const login = (username: string, user_id: string) => {
    setIsAuthenticated(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('userId', user_id);
    navigate('/account')
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login }}>
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
