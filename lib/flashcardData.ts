import fs from "fs";
import { join } from "path";
import yaml from "js-yaml";
import { FlashcardData } from "../types/flashcards";
import { allFilenamesInDir } from "./helpers";

const FC_DIR = join(process.cwd(), "_flashcards");

const getFlashcardDataFromFile = (fileName: string) => {
  try {
    const doc = yaml.load(fs.readFileSync(`${FC_DIR}/${fileName}`, "utf-8"));

    const data: FlashcardData = [];
    Object.entries(doc as any).forEach(([k, v]) => {
      data.push({
        groupName: k,
        words: v as Record<string, string>,
      });
    });

    return data;
  } catch (e) {
    return [];
  }
};

const getFlashcardData = () => {
  const filesNames = allFilenamesInDir(FC_DIR);

  const data = filesNames.map((file) => {
    return {
      fileName: file,
      data: getFlashcardDataFromFile(file),
    };
  });

  return data;
};

export default getFlashcardData;
