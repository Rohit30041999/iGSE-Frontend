import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        return Error('useContext must be inside the Context Provider');
    }

    return context;
}