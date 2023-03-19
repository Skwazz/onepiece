import React from "react";
import Image from "next/image";

const Modal = ({ showModal, setShowModal, modalData }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-500 opacity-25  "
              onClick={() => setShowModal(false)}
            ></div>
          </div>
          <div
            className="relative z-50 bg-card-bg bg-auto bg-center
           overflow-hidden rounded-l-2xl"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 m-4 text-black text-xl z-50"
            >
              X
            </button>

            <div className="flex">
              <div className="relative w-1/2 mr-2 h-full">
                <Image
                  src={`/cards/${modalData.cardId}.png`}
                  alt="picture of a card"
                  width={400}
                  height={300}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex w-96 h-96">
                <div className="flex-1 m-0 flex-col text-black font-mono">
                  <h2 className="text-m font-semibold mt-1">Card Details : </h2>
                  <p>
                    Card ID : {modalData.cardId} <br />
                    Rarity : {modalData.rarity} <br />
                    Category: {modalData.category} <br />
                    Name: {modalData.name} <br />
                    Cost: {modalData.cost} <br />
                    Life: {modalData.life} <br />
                    Attribute: {modalData.attribute} <br />
                    Power: {modalData.power} <br />
                    Counter: {modalData.counter} <br />
                    Color: {modalData.color} <br />
                    Type: {modalData.type} <br />
                    Effect: {modalData.effect} <br />
                    Trigger: {modalData.trigger} <br />
                    Card Sets:{modalData.cardSet} <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
