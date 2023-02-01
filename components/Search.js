import React, { useState, useEffect } from "react";
import Card from "./Card";

const Search = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <div>
      <div className="flex justify-center">
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
  );
};

export default Search;
