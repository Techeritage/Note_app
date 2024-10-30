import React, { useState } from "react";
import Trash from "../assets/trash.svg";
import Edit from "../assets/create.svg";

const NoteCard = ({ data, index, editNote, deleteNote }) => {
  const [isCard, setIsCard] = useState(false);
  const [isIndex, setIsIndex] = useState(null);

  return (
    <div
      onClick={() => {
        setIsCard(!isCard);
        setIsIndex(index);
      }}
      className="min-h-[100px] cursor-pointer shadow-md grid gap-2 border border-neutral-300 rounded-lg p-4"
    >
      <h2 className="text-xl font-medium">{data.title}</h2>
      <p className="text-opacity-85 max-sm:text-sm pb-2">{data.content}</p>
      {isCard && isIndex === index && (
        <div
          className={`py-2 border-t border-neutral-300 flex items-center justify-evenly ${
            isCard ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          <button
            onClick={() => editNote(data)}
            className="flex justify-center items-center basis-[45%]"
          >
            <img src={Edit} className="w-6 h-6" alt="edit icon" />
          </button>
          <div className="h-full w-[1px] bg-neutral-300" />
          <button
            onClick={() => deleteNote(data)}
            className="flex justify-center items-center basis-[45%]"
          >
            <img src={Trash} className="w-6 h-6" alt="edit icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
