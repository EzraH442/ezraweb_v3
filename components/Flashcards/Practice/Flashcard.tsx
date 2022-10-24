/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

interface IFlashcardProps {
  first: string;
  second: string;
}

const Flashcard: React.FC<IFlashcardProps> = ({ first, second }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="w-96 h-48 cursor-pointer shadow-md flex items-center justify-center"
      onClick={() => setFlipped(!flipped)}
    >
      <p className="text-center text-sm">{flipped ? second : first}</p>
    </div>
  );
};

export default Flashcard;
