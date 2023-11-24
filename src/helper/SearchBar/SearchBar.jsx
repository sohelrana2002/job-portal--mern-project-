import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    let value = e.target.value;
    setQuery(value);
    console.log(value);
  };
  return (
    <div className="search__bar">
      <form>
        <div className="bar__style">
          <input
            type="text"
            placeholder="What position are you looking for?"
            value={query}
            onChange={handleQuery}
          />
          <CiSearch className="bar__icon" />
        </div>
        <div className="bar__style">
          <input type="text" placeholder="Location" />
          <CiLocationOn className="bar__icon" />
        </div>

        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
