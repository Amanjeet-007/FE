import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth.js";
import { clearUser } from "../redux/features/user.js";

const expiryDuration = 1 * 60 * 60 * 1000;

export default function useSession() {
    const dispatch = useDispatch(); // Hook ko yahan top par rakhein

    const saveSession = useCallback((data) => {
        if (!data) return null;

        const sessionData = {
            user: data,
            expiryTime: Date.now() + expiryDuration
        };

        localStorage.setItem('session', JSON.stringify(sessionData));
    }, []);

    const getSession = useCallback(() => {
        const sessionStr = localStorage.getItem('session');
        
        if (!sessionStr) { 
            dispatch(logout());
            dispatch(clearUser());
            return null;
        }

        const data = JSON.parse(sessionStr);
        const now = Date.now();

        if (now >= data.expiryTime) {
            localStorage.removeItem('session');
            dispatch(logout());
            dispatch(clearUser());
            return null;
        }
        
        return data.user;
    }, [dispatch]); // dispatch ko dependency mein dalein

    const removeSession = useCallback(() => {
        localStorage.removeItem('session');
        dispatch(logout());
        dispatch(clearUser());
    }, [dispatch]);

    return { saveSession, getSession, removeSession };
}