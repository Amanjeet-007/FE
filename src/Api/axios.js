//* eslint-disable no-undef */
import axios from "axios";
const isProduction = true;

// : import.meta.env.VITE_Backend_ENDPOINT ||

const api = axios.create({
  baseURL: isProduction ? '/api' : "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// global error handling
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err.message)
    return Promise.reject(err.response?.data || err.message);
  }
);

export default api;
