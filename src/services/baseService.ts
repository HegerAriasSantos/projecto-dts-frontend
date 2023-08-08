import { config } from "@/config";
import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: `${config.backendEndpoint}`,
  timeout: 2000,
});

export class BaseService {
  protected static async create<T, R>(
    url: string,
    body: T,
    options?: AxiosRequestConfig<any>
  ) {
    return await axiosInstance.post<R>(url, body, options);
  }
  protected static async getAll<T>(url: string) {
    return await axiosInstance.get<T[]>(url);
  }
  protected static async getById<T>(url: string, id: string) {
    return await axiosInstance.get<T>(`${url}/${id}`);
  }
  protected static async remove<T>(url: string, id: string) {
    return await axiosInstance.delete<T>(`${url}/${id}`);
  }
  protected static async update<T, R>(
    url: string,
    body: Partial<T>,
    id: string
  ) {
    return await axiosInstance.put<R>(`${url}/${id}`, body);
  }
}
