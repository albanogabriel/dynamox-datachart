import axios from "axios";

export const api = axios.create({
  baseURL: 'https://json-server-dynamox.vercel.app/',
})
