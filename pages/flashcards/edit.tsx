import React from "react";
import { GetStaticProps, NextPage } from "next";
import { FlashcardData } from "../../types/flashcards";
import getFlashcardData from "../../lib/flashcardData";
import EditGrid from "../../components/Flashcards/Edit/EditGrid";
import Tabs from "../../components/Flashcards/Tabs/Tabs";

interface IEditPageProps {
  flashcardData: {
    fileName: string;
    data: FlashcardData;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const flashcardData = getFlashcardData();
  return { props: { flashcardData } };
};

const EditPage: NextPage<IEditPageProps> = ({ flashcardData }) => {
  const tabData = flashcardData[0].data.map((group) => {
    return {
      id: group.groupName,
      component: <EditGrid data={Object.entries(group.words)} />,
    };
  });

  return (
    <div>
      <Tabs tabData={tabData} />
    </div>
  );
};

export default EditPage;
