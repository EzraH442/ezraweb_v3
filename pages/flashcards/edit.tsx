import React from "react";
import { GetStaticProps, NextPage } from "next";
import { v4 } from "uuid";
import { FlashcardData, Wordpair } from "../../types/flashcards";
import getFlashcardData from "../../lib/flashcardData";
import Tabs from "../../components/Flashcards/Tabs/Tabs";
import Button from "../../components/Flashcards/Button/Button";
import EditGrid from "../../components/Flashcards/Edit/EditGrid";

interface IEditPageProps {
  flashcardData: {
    fileName: string;
    data: FlashcardData;
  }[];
}

const dataToGridData = (data: Record<string, string>) => {
  return [...Object.entries(data)].map(([first, second]) => {
    return { first, second, uuid: v4() };
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const flashcardData = getFlashcardData();
  return { props: { flashcardData } };
};

const EditPage: NextPage<IEditPageProps> = ({ flashcardData }) => {
  const onSave = (data: Wordpair[]) => {
    const retObj: Record<string, string> = {};
    const errObj: Record<string, boolean> = {};

    data.forEach((wp) => {
      if (!wp.first || !wp.second) {
        errObj[wp.uuid] = true;
      } else {
        retObj[wp.first] = wp.second;
      }
    });

    if (Object.keys(errObj).length === 0) {
      // keep track of saved stuff
    }

    return errObj;
  };

  const tabData = flashcardData[0].data.map((group) => {
    return {
      id: group.groupName,
      component: (
        <EditGrid data={dataToGridData(group.words)} onSave={onSave} />
      ),
    };
  });

  const triggerExport = () => {};

  return (
    <div>
      <Tabs tabData={tabData} />
      <Button label="Export" onClick={triggerExport} />
    </div>
  );
};

export default EditPage;
