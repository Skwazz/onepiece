import React, { useState, useEffect } from "react";
import Card from "./Card";

const Search = ({ setFilteredData, selectedColors, data }) => {

  const filterBySearch = (input) => {
    let updatedCards = [...data]; // need to use filtered array but it does not update when deleting, data does, find some solution.
    updatedCards = updatedCards.filter((item) => {
      return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    });
    setFilteredData(updatedCards);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => filterBySearch(e.target.value)}
          placeholder="Type To Search Cards!"
        />
      </div>
    </div>
  );
};

export default Search;
