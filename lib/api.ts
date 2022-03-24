import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

type requiredFields = 'date';
type optionalFields = 'title' | 'slug' | 'featuredImage' | 'nextSlug' | 'previousSlug' | 'content' | 'headline';
export type PostField = requiredFields | optionalFields;
// eslint-disable-next-line no-unused-vars
type requiredItemsType = { [K in requiredFields]: string }
// eslint-disable-next-line no-unused-vars
type optionalItemsType = { [K in optionalFields]?: string}
export type PostData = requiredItemsType & optionalItemsType;

export function getPostBySlug(slug: string, fields: PostField[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostData = {
    date: '',
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: PostField[] = []) {
  const slugs = getPostSlugs();
  fields.push('date');
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
