import Image from "next/image";
const card = ({ id, alt }) => {
  return (
    <Image
      src={
        alt === "-"
          ? `/cards/${id}.png`
          : `/cards/${id}_${alt.toLowerCase()}.png`
      }
      alt="picture of a card"
      width={250}
      height={100}
      className="hover:scale-105 mt-2 ml-2"
    />
  );
};

export default card;
