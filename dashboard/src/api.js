import axios from "axios";

const api = axios.create({
  baseURL:"https://zerodha-clone-hbth.onrender.com",
  withCredentials: true,
});

export default api;
