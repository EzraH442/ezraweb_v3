import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { PostContext, PostData, MetadataField } from "../types/post";
import { allSortedFilenamesInDir, removeMarkdownExtension } from "./helpers";

export const POSTS_DIR = join(process.cwd(), "_posts");

export function getAllPostSlugs() {
  return allSortedFilenamesInDir(POSTS_DIR).map((s) =>
    removeMarkdownExtension(s),
  );
}

export function makePostContext(i: number, fileNames: string[]): PostContext {
  const slug = fileNames[i];
  const previousSlug = fileNames[i - 1 < 0 ? 0 : i - 1];
  const nextSlug =
    fileNames[i === fileNames.length - 1 ? fileNames.length - 1 : i + 1];

  const [yyyy, mm, dd] = removeMarkdownExtension(fileNames[i])
    .split("-")
    .map((s) => parseInt(s));
  const date = new Date(yyyy, mm - 1, dd).getTime();

  const ret = {
    previousSlug,
    slug,
    nextSlug,
    date,
  };

  return ret;
}

export function getPostByContext(
  context: PostContext,
  fields: MetadataField[] = [],
) {
  const realSlug = removeMarkdownExtension(context.slug);
  const realNextSlug = removeMarkdownExtension(context.nextSlug);
  const realPreviousSlug = removeMarkdownExtension(context.previousSlug);
  const fullPath = join(POSTS_DIR, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: PostData = {
    metadata: {},
    context: {
      date: context.date,
      previousSlug: realPreviousSlug,
      slug: realSlug,
      nextSlug: realNextSlug,
    },
    content,
  };

  fields.forEach((field) => {
    if (typeof data[field] !== "undefined") {
      post.metadata[field] = data[field];
    }
  });

  return post;
}

export function getPostBySlug(slug: string, fields: MetadataField[]) {
  const slugs = allSortedFilenamesInDir(POSTS_DIR);
  const index = slugs.indexOf(`${slug}.md`);

  return getPostByContext(makePostContext(index, slugs), fields);
}

export function getAllPosts(fields: MetadataField[] = []) {
  const slugs = allSortedFilenamesInDir(POSTS_DIR);
  const posts: PostData[] = [];
  for (let i = 0; i < slugs.length; i++) {
    posts.push(getPostByContext(makePostContext(i, slugs), fields));
  }

  return posts;
}
