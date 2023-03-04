import Card from "../components/Card";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import { set } from "mongoose";

export default function Home({ cards }) {
  const [filteredData, setFilteredData] = useState(cards);

  const [selectedColors, setSelectedColors] = useState([]);
  const colors = ["Red", "Green", "Blue", "Purple"];

  function handleColorChange(color) {
    const newSelectedColors = [...selectedColors];

    if (newSelectedColors.includes(color)) {
      const index = newSelectedColors.indexOf(color);
      newSelectedColors.splice(index, 1);
    } else {
      newSelectedColors.push(color);
    }

    setSelectedColors(newSelectedColors);

    const newFilteredData = cards.filter((card) => {
      if (newSelectedColors.length === 0) {
        return true;
      } else if (newSelectedColors.length === 1) {
        return card.color.includes(newSelectedColors[0]);
      } else {
        const colors = card.color.split("/");
        return colors.some((c) => newSelectedColors.includes(c));
      }
    });

    setFilteredData(newFilteredData);
  }

  return (
    <>
      <Search
        setFilteredData={setFilteredData}
        setSelectedColors={setSelectedColors}
        data={cards}
      />
      {colors.map((color) => (
        <div key={color}>
          <label>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color.includes("/")
              ? color.split("/").map((c) => <span key={c}>{c} </span>)
              : color}
          </label>
        </div>
      ))}

      <div className="grid grid-cols-2 md:grid-cols-5 mx-auto ">
        {filteredData?.map((card) => {
          if (card.name !== "-" || selectedColors.includes(card.color)) {
            return (
              <Card
                key={card._id}
                id={card.cardId}
                alt={card.altArt}
                color={card.color}
              />
            );
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
