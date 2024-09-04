import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?artist_name=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <input
        type="text"
        className="bg-white w-64 p-2 border-2 h-10 rounded-full px-6 py-1"
        placeholder="SEARCH BY ARTIST"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="h-10 border-2 border-red-600 rounded-full px-6 py-1 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
