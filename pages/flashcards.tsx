import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Divider from "../components/Divider/Divider";
import FlashcardArea from "../components/Flashcards/FlashcardArea";
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

  const w = flashcardData
    .filter(({ groupName }) => selectedGroupNames.has(groupName))
    .flatMap(({ words }) => {
      return Object.entries(words);
    });

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
          <FlashcardArea words={w} key={JSON.stringify(w)} />
        ) : (
          <p>Please select some words</p>
        )}
      </div>
    </div>
  );
};

export default FlashcardsPage;
