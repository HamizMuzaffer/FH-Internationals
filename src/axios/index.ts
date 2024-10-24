import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://f-h-backend.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;