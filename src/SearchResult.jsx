import { CardDefault } from "./Carddefault";
import { useLocation } from "react-router-dom";
import { mockSearchResults } from "./mockSearchResult";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const filteredResults = mockSearchResults.filter((result) =>
    result.singerName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Search Results for: {query}</h2>
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResults.map((result) => (
              <CardDefault
                key={result.id}
                singerName={result.singerName}
                imageUrl={result.imageUrl}
                description={result.description}
              />
            ))}
          </div>
        ) : (
          <p>No results found for your search query.</p>
        )}
      </div>
    </>
  );
}

export default SearchResult;
