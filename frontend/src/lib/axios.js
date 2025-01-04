import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.mode === "developement" ? "http://localhost:5001/api/" : "/api/",
  withCredentials: true,
  timeout: 5000
});