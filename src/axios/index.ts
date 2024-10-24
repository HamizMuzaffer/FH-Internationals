import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://f-h-backend.vercel.app/api/",
});

export default axiosInstance;