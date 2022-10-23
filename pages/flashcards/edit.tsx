import React from "react";
import { GetStaticProps, NextPage } from "next";
import { FlashcardData } from "../../types/flashcards";
import getFlashcardData from "../../lib/flashcardData";
import Edit from "../../components/Flashcards/EditGrid";

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
  return (
    <div>
      <Edit data={Object.entries(flashcardData[0].data[0].words)} />
    </div>
  );
};

const test = '<div class="text"></div>';

export default EditPage;
