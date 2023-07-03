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
      return words ? Object.entries(words) : [];
    });

  return (
    <div className="p-12">
      <h1 className="text-3xl">Practice</h1>
      <Divider color="emerald-600" />
      <Tabs tabData={tabData} />
      <Divider color="emerald-600" />
      <div style={{ width: 340 }}>
        {w.length > 0 ? (
          <FlashcardArea words={w} key={JSON.stringify(w)} />
        ) : (
          <p> No groups selected - please select some words to continue </p>
        )}
      </div>
    </div>
  );
};

export default FlashcardsPage;
