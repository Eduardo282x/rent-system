import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://k6r6v6f5-3002.use2.devtunnels.ms/',
    baseURL: 'http://localhost:3002/',
})

export default axiosInstance;