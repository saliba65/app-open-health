import axios from "axios";
import { baseURL } from "../utils/constants/endpoints";

const requestAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

requestAPI.interceptors.request.use(async initialConfig => {
  const config = initialConfig;

  return config;
});

export default requestAPI;
