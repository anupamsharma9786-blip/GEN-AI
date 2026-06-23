import { use, useContext } from "react";
import { authContext } from "../auth.context";
import { login, register, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(authContext)

    const {user, setUser, loading, setLoading} = context;

    const handleLogin = async (username, email, password) => {
        setLoading(true)

        const response = await login(username, email, password)


        setUser(response.user)

        setLoading(false)
    }

    const handleRegister = async (username, email, password) => {
        setLoading(true)

        const response = await register(username, email, password)

        setUser(response.user)

        setLoading(false)
    }


    return {handleLogin, handleRegister, user, loading };
}