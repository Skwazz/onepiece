import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("pressed");
  };

  return (
    <button
      className={`fixed right-4 bottom-4 bg-gray-800 p-2 rounded-full shadow-md text-red-500 transition-all `}
      onClick={scrollToTop}
      style={{ left: "auto" }}
    >
      <FaArrowUp />
    </button>
  );
}
