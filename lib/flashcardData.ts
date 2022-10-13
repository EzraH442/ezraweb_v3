import fs from "fs";
import yaml from "js-yaml";
import { join } from "path";
import { FlashcardData } from "../types/flashcards";

const postsDirectory = join(process.cwd(), "_flashcards");

const getFlashcardData = () => {
  try {
    const doc = yaml.load(
      fs.readFileSync(`${postsDirectory}/vocab.yml`, "utf-8"),
    );

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

export default getFlashcardData;
