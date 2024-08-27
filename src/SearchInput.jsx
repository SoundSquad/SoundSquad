function SearchInput() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <input
        type="text"
        className="bg-white w-64 p-2 border-2 h-10 rounded-full px-6 py-1 "
        placeholder="SEARCH BY ARTIST"
      />
      <button className="h-10 border-2 border-red-600 rounded-full px-6 py-1 font-semibold text-red-600 hover:bg-red-600 hover:text-white">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
