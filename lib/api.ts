import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { PostContext, PostData, PostField } from "../types/post";

const postsDirectory = join(process.cwd(), "_posts");

function removeMarkdownExtension(s: string): string {
  return s.replace(/\.md$/, "");
}

export function getAllPostFilenames() {
  return fs.readdirSync(postsDirectory).sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}
export function getAllPostSlugs() {
  return getAllPostFilenames().map((s) => removeMarkdownExtension(s));
}

export function makePostContext(i: number, fileNames: string[]): PostContext {
  const slug = fileNames[i];
  const nextSlug = fileNames[i - 1 < 0 ? 0 : i - 1];
  const previousSlug =
    fileNames[i === fileNames.length - 1 ? fileNames.length - 1 : i + 1];

  const ret = {
    previousSlug,
    slug,
    nextSlug,
  };

  return ret;
}

export function getPostByContext(
  context: PostContext,
  fields: PostField[] = [],
) {
  const realSlug = removeMarkdownExtension(context.slug);
  const realNextSlug = removeMarkdownExtension(context.nextSlug);
  const realPreviousSlug = removeMarkdownExtension(context.previousSlug);
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: PostData = {
    metadata: {
      date: "",
    },
    context: {
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

export function getPostBySlug(slug: string, fields: PostField[]) {
  const slugs = getAllPostFilenames();
  const index = slugs.indexOf(`${slug}.md`);

  return getPostByContext(makePostContext(index, slugs), fields);
}

export function getAllPosts(fields: PostField[] = []) {
  const slugs = getAllPostFilenames();
  fields.push("date");

  const posts: PostData[] = [];
  for (let i = 0; i < slugs.length; i++) {
    posts.push(getPostByContext(makePostContext(i, slugs), fields));
  }

  return posts;
}
