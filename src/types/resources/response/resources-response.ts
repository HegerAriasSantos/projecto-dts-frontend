import { Category } from "@/types/category";

export type ResourcesResponse = {
  id: number;
  name: string;
  detail: string;
  imageUrl: string;
  webSite: string;
  locationUrl: string;
  categories: Category[];
};
