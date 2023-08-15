import { ResourceService } from "@/services";
import { Paginated, ResourcesResponse } from "@/types";
import { PaginatedUtils } from "@/utils";
import { useEffect, useState } from "react";

export const usePaginatedResources = () => {
  const [page, setPage] = useState<number>(0);
  const [resources, setResources] = useState<ResourcesResponse[]>();
  const [allResources, setAllResources] =
    useState<Paginated<ResourcesResponse>>();

  const getResources = async () => {
    const apiResponse = await ResourceService.getResources();
    const allResources = PaginatedUtils.transformToPaginated(apiResponse);
    allResources.hasNextPage = allResources.pages > page;
    allResources.hasBeforePage = page === 0;
    setAllResources(allResources);
    setResources(allResources.items[page]);
  };

  const nextPage = () => {
    if (!allResources.hasNextPage) return;
    const newAllResources = { ...allResources };
    const newPage = page + 1;
    allResources.hasNextPage = allResources.pages > newPage;
    allResources.hasBeforePage = page === 0;
    setPage(newPage);
    setResources(allResources.items[newPage]);
    setAllResources(newAllResources);
  };

  const beforePage = () => {
    if (!allResources.hasBeforePage) return;
    const newAllResources = { ...allResources };
    const newPage = page - 1;
    allResources.hasNextPage = allResources.pages > newPage;
    allResources.hasBeforePage = page === 0;
    setPage(newPage);
    setResources(allResources.items[newPage]);
    setAllResources(newAllResources);
  };
  const goToPage = (number: number) => {
    if (number > allResources.pages) return;
    const newAllResources = { ...allResources };
    allResources.hasNextPage = allResources.pages > number;
    allResources.hasBeforePage = page === 0;
    setPage(number);
    setResources(allResources.items[number]);
    setAllResources(newAllResources);
  };

  useEffect(() => {
    getResources();
  }, []);

  return {
    currentPage: page,
    resources,
    allResources,
    nextPage,
    beforePage,
    goToPage,
  };
};
