import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // important if using cookies/JWT
  headers: {
    "Content-Type": "application/json",
  },
});

// global error handling (optional but pro)
api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err.response?.data || err.message);
  }
);

export default api;
