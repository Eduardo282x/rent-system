import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://2wzvg2fs-3002.use2.devtunnels.ms/',
    // baseURL: 'http://localhost:3002/',
})

export default axiosInstance;