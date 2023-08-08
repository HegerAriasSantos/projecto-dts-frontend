import { CommentResponse, CommentRequest } from "@/types/comment";
import { BaseService } from "./baseService";

export class commentService extends BaseService {
  static url = `v1/Comments`;
  static async getCommentsByPostId(postId: string) {
    const response = await this.getById<CommentResponse[]>(
      `${this.url}/GetByPostId`,
      postId
    );
    return response;
  }

  static async createComment(comment: CommentRequest) {
    const response = await this.create<CommentRequest, CommentResponse>(
      this.url,
      comment
    );
    return response.data;
  }
  static async updateComment(comment: CommentRequest, id: string | number) {
    const finalId = typeof id === "number" ? id.toString() : id;
    const response = await this.update<CommentRequest, CommentResponse>(
      this.url,
      comment,
      finalId
    );
    return response.data;
  }
  static async deleteComment(id: number) {
    await this.remove(this.url, id.toString());
  }
}
