import { Paginated } from "@/types";

export class PaginatedUtils {
  private static itemsPerPage = 6;
  static transformToPaginated<T>(items: T[]) {
    const pages =
      items.length <= this.itemsPerPage
        ? 1
        : items.length % this.itemsPerPage == 0
        ? Math.floor(items.length / this.itemsPerPage)
        : Math.floor(items.length / this.itemsPerPage) + 1;

    const paginated: Paginated<T> = {
      hasBeforePage: false,
      hasNextPage: pages >= 2,
      pages,
      items: {},
    };

    let page = 0;
    let item = 0;
    items.forEach((e) => {
      item++;
      if (!paginated.items[page]?.length) paginated.items[page] = [];
      paginated.items[page].push(e);
      if (item >= this.itemsPerPage) {
        item = 0;
        page++;
      }
    });
    return paginated;
  }
}
