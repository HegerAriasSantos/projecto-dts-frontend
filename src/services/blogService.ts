import { blogRequest, blogResponse } from "@/types";
import { BaseService } from "./baseService";

export class blogService extends BaseService {
  static url = `v1/Post`;
  static async getBlogs() {
    const response = await this.getAll<blogResponse>(this.url);
    return response.data;
  }
  static async getBlog(id: string) {
    const response = await this.getById<blogResponse>(this.url, id);
    return response.data;
  }

  static async createBlog(blog: FormData) {
    const response = await this.create<FormData, blogResponse>(this.url, blog, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
  static async updateBlog(blog: Partial<blogRequest>, id: string) {
    const response = await this.update<blogRequest, blogResponse>(
      this.url,
      blog,
      id
    );
    return response.data;
  }
}
