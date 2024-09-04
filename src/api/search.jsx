import axios from "axios";

export const fetchSearchResults = async ({ pageParam = 1, query }) => {
  try {
    const response = await axios.get(`http://localhost:8080/search/artist`, {
      params: {
        artist_name: query,
        page: pageParam,
        limit: 6,
      },
    });

    const { data } = response.data;

    return {
      results: data.artists,
      nextPage: data.currentPage < data.totalPages ? pageParam + 1 : undefined,
      hasMore: data.currentPage < data.totalPages, //check if there are more pages
    };
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
