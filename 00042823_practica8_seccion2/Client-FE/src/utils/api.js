import axios from "axios"

// Nuevamente, trabajo con variables de entorno porque es la forma
// responsable en la que esto tiene que hacerse. Pero son los mismos
// valores que en el blog... excepto por el JWT_SECRET.

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API = axios.create({
    baseURL: BASE_URL
})

API.interceptors.request.use((req => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
}))

export default API;