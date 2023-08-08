import { blogService } from "@/services";
import { Paginated, blogResponse } from "@/types";
import { PaginatedUtils } from "@/utils";
import { useEffect, useState } from "react";

export const usePaginatedBlog = () => {
  const [page, setPage] = useState<number>(0);
  const [blogs, setBlogs] = useState<blogResponse[]>();
  const [allBlogs, setAllBlogs] = useState<Paginated<blogResponse>>();

  const getBlogs = async () => {
    const apiResponse = await blogService.getBlogs();
    console.log(
      "🚀 ~ file: usePaginatedBlog.tsx:13 ~ getBlogs ~ apiResponse:",
      apiResponse
    );
    const allBlogs = PaginatedUtils.transformToPaginated(apiResponse);
    allBlogs.hasNextPage = allBlogs.pages > page;
    allBlogs.hasBeforePage = page === 0;
    setAllBlogs(allBlogs);
    setBlogs(allBlogs.items[page]);
  };

  const nextPage = () => {
    if (!allBlogs.hasNextPage) return;
    const newAllBlogs = { ...allBlogs };
    const newPage = page + 1;
    allBlogs.hasNextPage = allBlogs.pages > newPage;
    allBlogs.hasBeforePage = page === 0;
    setPage(newPage);
    setBlogs(allBlogs.items[newPage]);
    setAllBlogs(newAllBlogs);
  };

  const beforePage = () => {
    if (!allBlogs.hasBeforePage) return;
    const newAllBlogs = { ...allBlogs };
    const newPage = page - 1;
    allBlogs.hasNextPage = allBlogs.pages > newPage;
    allBlogs.hasBeforePage = page === 0;
    setPage(newPage);
    setBlogs(allBlogs.items[newPage]);
    setAllBlogs(newAllBlogs);
  };
  const goToPage = (number: number) => {
    if (number > allBlogs.pages) return;
    const newAllBlogs = { ...allBlogs };
    allBlogs.hasNextPage = allBlogs.pages > number;
    allBlogs.hasBeforePage = page === 0;
    setPage(number);
    setBlogs(allBlogs.items[number]);
    setAllBlogs(newAllBlogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return {
    currentPage: page,
    blogs,
    allBlogs,
    nextPage,
    beforePage,
    goToPage,
  };
};
