import React, { useState, useEffect } from "react";
import Card from "./Card";

const Search = ({ setSearch }) => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type To Search Cards!"
        />
      </div>
    </div>
  );
};

export default Search;
