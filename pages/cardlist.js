import Card from "../components/Card";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import CardModal from "../components/CardModal";
import ScrollToTopButton from "../components/ScrollToTopButton";
export default function Home({ cards }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);

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

  const handleModal = (card) => {
    setModalData(card);
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <CardModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalData={modalData}
        />
      ) : null}

      <div className="bg-cover bg-center h-screen">
        <div className="flex flex-col ">
          <div className="flex flex-row sticky top-0 h-fit rounded-lg bg-black bg-opacity-20 backdrop-blur-lg roundedfilter drop-shadow-md flex-1 ">
            <Search setSearch={setSearch} />

            <div className="flex mt-2 justify-center">
              <p className="flex justify-center font-bold">Color:</p>{" "}
              {colors.map((color) => (
                <div key={color} className="flex flex-row justify-center">
                  <label className="mx-2">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                    {color}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex mt-2 ml-2 justify-center">
              <p className="flex justify-center font-bold">Category:</p>{" "}
              {categories.map((category) => (
                <div key={category} className="flex justify-center">
                  <label className="mx-2 ">
                    <input
                      type="checkbox"
                      checked={selectedCategory.includes(
                        category.toLowerCase()
                      )}
                      onChange={() =>
                        handleCategoryChange(category.toLowerCase())
                      }
                    />
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 mx-auto ">
            {filteredData?.map((card) => {
              if (
                card.name !== "-" ||
                selectedColors.includes(card.color) ||
                selectedCategory.some((c) =>
                  card.category.includes(c.toLowerCase())
                )
              ) {
                return (
                  <div onClick={() => handleModal(card)}>
                    <Card
                      key={card._id}
                      id={card.cardId}
                      alt={card.altArt}
                      color={card.color}
                      category={card.category}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
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
