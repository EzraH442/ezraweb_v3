export type FlashcardData = {
  groupName: string;
  words: Record<string, string>;
}[];

export interface Wordpair {
  uuid: string;
  first: string;
  second: string;
}
