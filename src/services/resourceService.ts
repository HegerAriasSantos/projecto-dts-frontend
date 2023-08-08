import { ResourcesResponse } from "@/types";
import { BaseService } from "./baseService";

export class ResourceService extends BaseService {
  static url = `v1/Resource`;
  static async getResources() {
    const response = await this.getAll<ResourcesResponse>(this.url);
    return response.data;
  }
  static async getResource(id: string) {
    const response = await this.getById<ResourcesResponse>(this.url, id);
    return response.data;
  }

  static async createResource(resource: FormData) {
    const response = await this.create<FormData, ResourcesResponse>(
      this.url,
      resource,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
}
