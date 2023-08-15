export type ResourcesRequest = {
  Id?: number;
  Name: string;
  Detail: string;
  WebSite?: string;
  LocationUrl?: string;
  ImageUrl?: string;
  FileImagen?: string;
  Categories?: [
    {
      categoryId: number;
      postId: number;
    }
  ];
};
