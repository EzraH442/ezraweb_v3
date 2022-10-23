import React from 'react'
import { GetStaticProps, NextPage } from "next";
import { FlashcardData } from "../../types/flashcards";
import getFlashcardData from "../../lib/flashcardData";

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
interface UploadPageProps {

}

const UploadPage: NextPage<UploadPageProps> = ({}) => {

  return (
    <div>

    </div>
  );
}

export default UploadPage
