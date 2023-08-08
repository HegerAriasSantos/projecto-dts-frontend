export type Paginated<T> = {
  items: Record<number, T[]>;
  pages: number;
  hasNextPage: boolean;
  hasBeforePage: boolean;
};
