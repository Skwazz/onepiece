import Card from "../components/Card";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import { set } from "mongoose";
import card from "../components/Card";

export default function Home({ cards }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [search, setSearch] = useState("");

  const colors = ["Red", "Green", "Blue", "Purple"];
  const categories = ["Leader", "Event", "Stage", "Character"];

  useEffect(() => {
    const newFilteredData = cards
      .filter((card) => {
        if (selectedColors.length === 0) {
          return true;
        } else if (selectedColors.length === 1) {
          return card.color.includes(selectedColors[0]);
        } else {
          const colors = card.color.split("/");
          return colors.some((c) => selectedColors.includes(c));
        }
      })
      .filter((card) => {
        return card.name.toLowerCase().includes(search.toLowerCase());
      })
      .filter((card) => {
        if (selectedCategory.length === 0) {
          return true;
        } else {
          const categories = card.category.split("/");
          return categories.some((c) =>
            selectedCategory.includes(c.toLowerCase())
          );
        }
      });
    setFilteredData(newFilteredData);
  }, [cards, selectedColors, selectedCategory, search]);

  console.log(selectedCategory);
  function handleColorChange(color) {
    const newSelectedColors = [...selectedColors];
    if (newSelectedColors.includes(color)) {
      const index = newSelectedColors.indexOf(color);
      newSelectedColors.splice(index, 1);
    } else {
      newSelectedColors.push(color);
    }
    setSelectedColors(newSelectedColors);
  }

  function handleCategoryChange(category) {
    const newCategory =
      selectedCategory.length === 0 ? [] : [...selectedCategory];
    if (newCategory.includes(category)) {
      const index = newCategory.indexOf(category);
      newCategory.splice(index, 1);
    } else {
      newCategory.push(category);
    }
    setSelectedCategory(newCategory);
  }
  console.log(selectedCategory);
  return (
    <>
      <Search setSearch={setSearch} />
      {colors.map((color) => (
        <div key={color}>
          <label>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        </div>
      ))}
      {categories.map((category) => (
        <div key={category}>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory.includes(category.toLowerCase())}
              onChange={() => handleCategoryChange(category.toLowerCase())}
            />
            {category}
          </label>
        </div>
      ))}

      <div className="grid grid-cols-2 md:grid-cols-5 mx-auto ">
        {filteredData?.map((card) => {
          if (
            card.name !== "-" ||
            selectedColors.includes(card.color) ||
            selectedCategory.some((c) =>
              card.category.includes(c.toLowerCase())
            )
          ) {
            console.log(selectedCategory);
            return (
              <Card
                key={card._id}
                id={card.cardId}
                alt={card.altArt}
                color={card.color}
                category={card.category}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/cards");
  const cards = await res.json();
  return {
    props: {
      cards,
    },
  };
}
