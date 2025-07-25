import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import moment from "moment";
import { Spin, List } from "antd";
import { useNavigate } from "react-router-dom";

import SearchFilter from "@components/SearchFilter";
import RepoCard from "@components/RepoCard";
import Wrapper from "@layouts/Wrapper";
import { useTrendingRepos } from "@hooks/query/useRepoQuery";

const TrendingPage = () => {
  const defaultDate = moment().subtract(7, "days").format("YYYY-MM-DD");
  const [filters, setFilters] = useState({ keyword: "", date: defaultDate });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useTrendingRepos(filters);

  const { register, handleSubmit, setValue, control } = useForm({
    defaultValues: filters,
  });
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const onSubmit = (formData) => {
    setFilters({
      keyword: formData.keyword || "",
      date: formData.date || defaultDate,
    });
    refetch(); // refetch with new filters
  };

  const handleView = (repoId) => navigate(`/trending/view/${repoId}`);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if (
      scrollTop + clientHeight >= scrollHeight - 300 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [hasNextPage, isFetchingNextPage]);

  const allItems = data?.pages.flatMap((page) => page.items) || [];

  return (
    <Wrapper>
      <div className="p-4 mx-auto my-14 overflow-y-auto h-[85vh]" ref={scrollRef}>
        <SearchFilter
          onSubmit={onSubmit}
          register={register}
          control={control}
          handleSubmit={handleSubmit}
          setValue={setValue}
          isLoading={isLoading}
          defaultDate={filters.date}
        />

        <div className="mt-6">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Spin />
            </div>
          ) : (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 4,
              }}
              dataSource={allItems}
              renderItem={(repo) => (
                <List.Item key={repo.id}>
                  <RepoCard
                    date={repo.updated_at}
                    title={repo.name}
                    body={repo.description}
                    avatar={repo.owner.avatar_url}
                    username={repo.owner.login}
                    star={repo.stargazers_count}
                    onView={() => handleView(repo.id)}
                  />
                </List.Item>
              )}
            />
          )}

          {isFetchingNextPage && (
            <div className="flex justify-center items-center mt-6">
              <Spin />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default TrendingPage;
