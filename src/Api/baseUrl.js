import axios from "axios";

const baseUrl = axios.create({
    // baseURL: process.env.BASE_URL,
    // baseURL: 'https://ecommerceusingnodejs.onrender.com',
    baseURL: 'http://localhost:8000',
});

export default baseUrl;
