export type blogRequest = {
  Id?: number;
  Title: string;
  Detail: string;
  Date?: Date;
  UserId?: string;
  ImageUrl?: string;
  FileImagen?: FormData;
  categories?: [
    {
      categoryId: number;
      postId: number;
    }
  ];
};
