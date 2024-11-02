import { loginResponse } from "@/types";
import React, { useState,useEffect,createContext,useContext } from "react";

interface AuthContextType{
authToken : loginResponse | null;
setAuthToken : (authToken: loginResponse) => void;
removeAuthToken : () => void;
}

const AuthContext = createContext<AuthContextType | undefined> (undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}

interface Props {
    children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [authToken, setAuthToken] = useState<loginResponse | null | any>(() => {
      const storedToken = localStorage.getItem("authToken");
      return storedToken ? JSON.parse(storedToken) : null;
    })

    useEffect(() => {
        if (authToken) {
          localStorage.setItem("authToken", JSON.stringify(authToken));
        } else {
          localStorage.removeItem("authToken");
        }
      }, [authToken]);

      const removeAuthToken = () => {
        setAuthToken(null);
      };

      return (
        <AuthContext.Provider value={{ authToken, setAuthToken, removeAuthToken }}>
          {children}
        </AuthContext.Provider>
      );
}

