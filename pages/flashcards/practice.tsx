import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Divider from "../../components/Divider/Divider";
import FlashcardArea from "../../components/Flashcards/FlashcardArea";
import GroupSelector from "../../components/Flashcards/Practice/GroupSelector";
import Tabs from "../../components/Flashcards/Tabs/Tabs";
import getFlashcardData from "../../lib/flashcardData";
import { FlashcardData } from "../../types/flashcards";

interface IFlashcardPageProps {
  flashcardData: {
    fileName: string;
    data: FlashcardData;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const flashcardData = getFlashcardData();
  return { props: { flashcardData } };
};

const FlashcardsPage: NextPage<IFlashcardPageProps> = ({ flashcardData }) => {
  const [selectedGroupNames, setSelectedGroupNames] = useState<Set<string>>(
    new Set(),
  );

  const onSelectionChanged = (groupNames: Set<string>) => {
    setSelectedGroupNames(groupNames);
  };

  const tabData = flashcardData.map((fcData) => {
    return {
      id: fcData.fileName,
      component: (
        <GroupSelector
          flashcardData={fcData.data}
          onChange={onSelectionChanged}
        />
      ),
    };
  });

  const w = flashcardData
    .flatMap((v) => v.data)
    .filter(({ groupName }) => selectedGroupNames.has(groupName))
    .flatMap(({ words }) => {
      return Object.entries(words);
    });

  return (
    <div className="p-12">
      <h1>Flashcards</h1>
      <Tabs tabData={tabData} />
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
