import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Divider from "../components/Divider/Divider";
import Flashcard from "../components/Flashcards/Flashcard";
import GroupSelector from "../components/Flashcards/GroupSelector";
import getFlashcardData from "../lib/flashcardData";
import { FlashcardData } from "../types/flashcards";

interface IFlashcardPageProps {
  flashcardData: FlashcardData;
}

export const getStaticProps: GetStaticProps = async () => {
  const flashcardData = getFlashcardData();
  return { props: { flashcardData } };
};

const FlashcardsPage: NextPage<IFlashcardPageProps> = ({ flashcardData }) => {
  const [selectedGroupNames, setSelectedGroupNames] = useState<Set<string>>(
    new Set(),
  );

  const [wordIndex, setWordIndex] = useState(0);

  const w = flashcardData
    .filter(({ groupName }) => selectedGroupNames.has(groupName))
    .flatMap(({ words }) => {
      return Object.entries(words);
    });

  const changeIndex = (inc: number) => {
    setWordIndex((wordIndex + inc) % w.length);
  };

  const onSelectionChanged = (groupNames: Set<string>) => {
    setSelectedGroupNames(groupNames);
  };

  return (
    <div className="p-12">
      <h1>Flashcards</h1>
      <GroupSelector
        flashcardData={flashcardData}
        onChange={onSelectionChanged}
      />
      <Divider />
      <div style={{ width: 340 }}>
        {selectedGroupNames.size > 0 ? (
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
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => changeIndex(1)}
                size="2x"
              />
            </div>
          </div>
        ) : (
          <p>Please select some words</p>
        )}
      </div>
    </div>
  );
};

export default FlashcardsPage;
