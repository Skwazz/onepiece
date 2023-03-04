import { useState, useEffect } from "react";
import Card from "./Card";

const filterCards = () => {
  const [cards, setCards] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/cards`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) =>
        card.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, cards]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Cards"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex">
        <div className="w-screen mb-5 px-4 md:px-5">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {filteredCards.map((card, ids) => (
              <Card key={ids} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default filterCards;
