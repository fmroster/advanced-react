import React, { createContext, useContext, useState, useEffect } from "react";
import axios, {AxiosError} from "axios";

interface User {
    username: string;
    email: string;
    role: string;
    bio: string;
}


interface AuthContextType {
    user: User;
    accessToken: string | null;
    refreshToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [user, setUser] = useState<User>(null);

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post("/api/token/", { username, password });
            const { access, refresh } = response.data;

            setAccessToken(access);
            setRefreshToken(refresh);

            const userRes = await axios.get("/api/user/me/", {
                headers: { Authorization: `Bearer ${access}` },
            });
            setUser(userRes.data);
        } catch (error: any) {
            throw new Error(error.response?.data?.detail || "Login failed");
        }
    };

    const logout = () => {
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
    };

    const refreshAccessToken = async () => {
        if (!refreshToken) return;
        try {
            const response = await axios.post("/api/token/refresh/", { refresh: refreshToken });
            setAccessToken(response.data.access);
        } catch (error) {
            console.error(error);
            logout(); // refresh failed; force logout
        }
    };

    // Optional: Automatically refresh token every few minutes
    useEffect(() => {
        if (!refreshToken) return;
        const interval = setInterval(() => {
            refreshAccessToken();
        }, 1000 * 60 * 4); // every 4 minutes
        return () => clearInterval(interval);
    }, [refreshToken]);

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                refreshToken,
                login,
                logout,
                isAuthenticated: !!accessToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

 