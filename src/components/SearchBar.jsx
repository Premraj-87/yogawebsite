const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="w-full md:max-w-sm">
      <input
        type="text"
        placeholder="Search yoga poses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full
          px-5
          py-3
          rounded-full
          bg-white
          border
          border-gray-200
          text-sm
          text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-green-500/40
          focus:border-green-500
          transition
        "
      />
    </div>
  );
};

export default SearchBar;
