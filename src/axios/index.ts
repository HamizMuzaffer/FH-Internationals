import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://example.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;