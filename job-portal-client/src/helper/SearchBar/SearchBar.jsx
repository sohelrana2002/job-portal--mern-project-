import { useState } from "react";
import { useJobDataContext } from "../../context/JobDataContext";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import "./SearchBar.css";

const SearchBar = () => {
  const { jobs, query, handleQuery, handleLoactionQuery, locationQuery } = useJobDataContext();
 

  return (
    <div className="search__bar">
      <form onSubmit={handleQuery}>
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
          <input type="text" 
          placeholder="Location"
          onChange={handleLoactionQuery}
          value={locationQuery} />
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
