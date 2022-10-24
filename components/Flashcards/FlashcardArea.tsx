/* eslint-disable no-param-reassign */
import {
  faArrowLeft,
  faRedo,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Flashcard from "./Practice/Flashcard";

interface IFlashcardAreaProps {
  words: [string, string][];
}

const mod = (n: number, k: number) => {
  return ((n % k) + k) % k;
};

const mutateShuffle = (arr: any[]) => {
  let i = arr.length;
  while (--i > 0) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[rand], arr[i]] = [arr[i], arr[rand]];
  }
};

const FlashcardArea: React.FC<IFlashcardAreaProps> = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);

  const [w, setW] = useState<[string, string][]>([...words]);

  const changeIndex = (inc: number) => {
    setWordIndex(mod(wordIndex + inc, w.length));
  };

  const handleShuffle = () => {
    const wCopy = [...w];
    mutateShuffle(wCopy);
    setW(wCopy);
    setWordIndex(0);
  };

  return (
    <div>
      <p className="text-center">{`${wordIndex + 1} / ${w.length}`}</p>
      <div className="pb-2">
        <Flashcard first={w[wordIndex][0]} second={w[wordIndex][1]} />
      </div>
      <div className="flex justify-between">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => changeIndex(-1)}
          size="2x"
          cursor="pointer"
        />
        <FontAwesomeIcon
          icon={faRedo}
          onClick={handleShuffle}
          size="2x"
          cursor="pointer"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => changeIndex(1)}
          size="2x"
          cursor="pointer"
        />
      </div>
    </div>
  );
};

export default FlashcardArea;
