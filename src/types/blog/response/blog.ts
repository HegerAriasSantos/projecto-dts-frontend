import { Category, User } from "@/types";
import { CommentResponse } from "@/types/comment";

export type blogResponse = {
  id: number;
  detail: string;
  title: string;
  imageUrl: string;
  date: Date;
  userId: string;
  user: User;
  comments: CommentResponse[];
  categories: Category[];
};
