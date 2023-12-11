import fs from "fs";

export function allFilenamesInDir(dir: string) {
  return fs.readdirSync(dir);
}

export function allSortedFilenamesInDir(dir: string) {
  return allFilenamesInDir(dir).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

export function removeMarkdownExtension(s: string): string {
  return s.replace(/\.md$/, "");
}
