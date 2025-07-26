import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getTrendingRepos, getRepoById } from "@services/repoService";

export const useTrendingRepos = (params) => {
  return useInfiniteQuery({
    queryKey: ['trendingRepos', params],
    queryFn: ({ pageParam = 1 }) =>
    getTrendingRepos({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.items?.length === 0) return undefined;
      return allPages.length + 1;
    },
    staleTime: 1000 * 60 * 5,
  });
};


export const useGetRepoById = (repoId) => {
  return useQuery({
    queryKey: ["repo", repoId],
    queryFn: () => getRepoById(repoId),
    enabled: !!repoId, // only run if repoId is provided
    staleTime: 1000 * 60 * 10, // Expired Cache in 10 minutes
  });
}