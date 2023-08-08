import { User } from "@/types";

export type CommentResponse = {
  id: number;
  detail: string;
  postId: number;
  userId: string;
  date: Date;
  user: User;
  post: string;
};
