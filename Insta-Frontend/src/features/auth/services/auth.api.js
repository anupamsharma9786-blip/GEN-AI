import axios from'axios';
const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

export async function register(username, email, password) {
    try {
        const response = await api.post("/register", { 
            username: username,
            email: email,
            password: password
        },{
            withCredentials: true
        })

        return response.data;
    } catch (error) {
        throw error;
    }
} 

export async function login(username, email, password) {
    try {
        const response = await api.post("/login", {
            username: username,
            email: email,
            password: password
        },{
            withCredentials: true
        })

        return response.data;
    } catch (error) {
        throw error;
    }
} 

export async function getMe(params) {
    const response = await api.get("/get-me")

    return response.data;
    
}