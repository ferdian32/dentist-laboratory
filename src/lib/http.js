import axios from "axios";


export const __httpClient__ = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: import.meta.env.VITE_BASE_URL
})