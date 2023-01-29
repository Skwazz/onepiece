import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function Home({ cards }) {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 mx-auto ">
        {cards?.map((card) => {
          if (card.name !== "-") {
            return <Card key={card._id} id={card.cardId} alt={card.altArt} />;
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
  }
}