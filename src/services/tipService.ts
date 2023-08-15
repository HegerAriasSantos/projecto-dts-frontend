import { Tip } from "@/types";
import { BaseService } from "./baseService";

export class TipService extends BaseService {
  static url = `v1/Tip`;
  static async getTips() {
    const response = await this.getAll<Tip>(this.url);
    return response.data;
  }
}
