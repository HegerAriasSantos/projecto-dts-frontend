export type ResourcesRequest = {
  id: number;
  title: string;
  detail: string;
  imageUrl: string;
  date: Date;
  userId: string;
  fileImagen: string;
  categories: [
    {
      categoryId: number;
      postId: number;
    }
  ];
};
