import { ResourcesResponse } from "./resources";
import { Tip } from "./tip";

export type Category = {
  id: number;
  name: string;
  detail: string;
  resources: ResourcesResponse[];
  tips: Tip[];
};
