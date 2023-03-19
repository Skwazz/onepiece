import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearch }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative block w-10 h-10 rounded-full bg-gray-500 text-white bg-opacity-50 hover:w-40 hover:h-10 transition-all"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSearch}
            className={isHovered ? "hidden" : "block"}
          />
        </div>
        {isHovered && (
          <div className="absolute left-0 inline-flex items-center">
            <FontAwesomeIcon icon={faSearch} className="pl-4" />
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search Cards"
              className="flex-grow py-2 bg-transparent text-white focus:outline-none text-sm pl-4"
              style={{ maxWidth: "calc(100vw - 108px)" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
