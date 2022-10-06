import axios from "axios";
import { baseURL } from "../constants/endpoints";
import {
  getAccessToken,
  isAuthenticated,
  ACCESS_TOKEN,
  CLIENT,
  UID
} from "../context/auth";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(async initialConfig => {
  const config = initialConfig;

  if (isAuthenticated()) {
    const headers = getAccessToken();

    config.headers[ACCESS_TOKEN] = headers.accessToken;
    config.headers[CLIENT] = headers.client;
    config.headers[UID] = headers.uid;
  }

  return config;
});

export default api;
