import { useRef } from "react";

function SearchBar({
  search,
  setSearch,
}) {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={e =>
          setSearch(e.target.value)
        }
      />

      <button onClick={focusInput}>
        Focus
      </button>
    </div>
  );
}

export default SearchBar;