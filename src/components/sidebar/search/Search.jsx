import { SearchStyle } from "./search-style";
import { useState } from "react";
import FetchQuery from "./fetchQuery/FetchQuery";

const Search = ({ setNewState }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.length >= 3) {
      setSearch(query);
      setQuery("");
    }
  }
  return (
    <SearchStyle>
      <div className="close">
        <button onClick={() => setNewState(true)}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <span className="material-symbols-outlined">search</span>
          <input
            id="search"
            type="text"
            onChange={handleChange}
            value={query}
            placeholder="search location"
          />
        </label>
        <button>Search</button>
      </form>

      <div>
        {/* if search has anything, so fetch correspond cities  */}
        {search && <FetchQuery query={search} setNewState={setNewState} />}
      </div>
    </SearchStyle>
  );
};

export default Search;
