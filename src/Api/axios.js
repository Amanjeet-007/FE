//* eslint-disable no-undef */
import axios from "axios";
const isProduction = true;



const api = axios.create({
  // baseURL: import.meta.env.VITE_Backend_ENDPOINT ,  // production 
  // baseURL:  "http://localhost:5000/api" ,             // test 
  baseURL: isProduction ? '/api' : 'https://neoec-backend.onrender.com/api', 
  withCredentials: true
  // headers: {
  //   "Content-Type": "application/json",
  // },
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
