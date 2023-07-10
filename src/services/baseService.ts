import { config } from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${config.backendEndpoint}`,
  timeout: 2000,
})