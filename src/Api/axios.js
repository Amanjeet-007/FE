//* eslint-disable no-undef */
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_Backend_ENDPOINT/api}` ,
  withCredentials: true, // important if using cookies/JWT || "http://localhost:5000/api"
  headers: {
    "Content-Type": "application/json",
  },
});

// global error handling (optional but pro)
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err)
    return Promise.reject(err.response?.data || err.message);
  }
);

export default api;
