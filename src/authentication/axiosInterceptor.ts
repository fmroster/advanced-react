import axios from "axios";
import { useAuth } from "./authProvider.tsx";

const useSecureAxios = () => {
    const { accessToken, refreshToken, logout, setAccessToken } = useAuth();

    const instance = axios.create();

    instance.interceptors.request.use((config) => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

    instance.interceptors.response.use(
        res => res,
        async error => {
            const originalRequest = error.config;
            if (error.response?.status === 401 && refreshToken && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const res = await axios.post("/api/token/refresh/", { refresh: refreshToken });
                    const newAccess = res.data.access;
                    setAccessToken(newAccess);
                    originalRequest.headers.Authorization = `Bearer ${newAccess}`;
                    return axios(originalRequest);
                } catch (e) {
                    logout();
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default useSecureAxios;
