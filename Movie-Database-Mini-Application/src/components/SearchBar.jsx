function SearchBar({ search, setSearch, resetSearch }) {

  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={resetSearch}>
        Reset
      </button>

    </div>
  );
}

export default SearchBar;