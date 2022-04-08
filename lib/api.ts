import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

function removeMarkdownExtension(s : string): string {
  return s.replace(/\.md$/, '');
}

export function getAllPostFilenames() { return fs.readdirSync(postsDirectory).sort(); }
export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory)
    .sort()
    .map((s) => removeMarkdownExtension(s));
}

type requiredFields = 'date';
type optionalFields = 'title' | 'slug' | 'featuredImage' | 'nextSlug' | 'previousSlug' | 'headline';
export type PostField = requiredFields | optionalFields;

// eslint-disable-next-line no-unused-vars
type requiredItemsType = { [K in requiredFields]: string }
// eslint-disable-next-line no-unused-vars
type optionalItemsType = { [K in optionalFields]?: string}

type postContext = {
    previousSlug: string,
    slug: string,
    nextSlug: string,
}

export type PostData = {
  metadata: requiredItemsType & optionalItemsType,
  context: postContext
  content: string | null
}

export function makePostContext(i: number, fileNames: string[]): postContext {
  const slug = fileNames[i];
  const previousSlug = fileNames[(i - 1 < 0 ? 0 : i - 1)];
  const nextSlug = fileNames[((i === fileNames.length - 1) ? fileNames.length - 1 : i + 1)];

  const ret = {
    previousSlug,
    slug,
    nextSlug,
  };

  return ret;
}

export function getPostByContext(context: postContext, fields: PostField[] = []) {
  const realSlug = removeMarkdownExtension(context.slug);
  const realNextSlug = removeMarkdownExtension(context.nextSlug);
  const realPreviousSlug = removeMarkdownExtension(context.previousSlug);
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  console.log(data);

  const post: PostData = {
    metadata: {
      date: '',
    },
    context: {
      previousSlug: realPreviousSlug,
      slug: realSlug,
      nextSlug: realNextSlug,
    },
    content,
  };

  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
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
  fields.push('date');

  const posts: PostData[] = [];
  for (let i = 0; i < slugs.length; i++) {
    posts.push(getPostByContext(makePostContext(i, slugs), fields));
  }

  return posts;
}
