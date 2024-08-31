import React from 'react';
import { CardDefault } from "./CardDefault";
import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "./mockSearchResult";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['search', query],
    queryFn: ({ pageParam = 1 }) => fetchSearchResults({ pageParam, query }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for: {query}</h2>
      {data && data.pages && data.pages[0].results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((result) => (
                <CardDefault
                  key={result.id}
                  singerName={result.singerName}
                  imageUrl={result.imageUrl}
                  description={result.description}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p>No results found for your search query.</p>
      )}
      {isFetchingNextPage ? <div>Loading more...</div> : null}
      <div ref={ref} style={{ height: '20px' }}></div>
    </div>
  );
}

export default SearchResult;