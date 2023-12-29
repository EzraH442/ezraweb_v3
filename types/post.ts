export type MetadataField = "title" | "featuredImage" | "headline" | "archive";

export type Metadata = { [K in MetadataField]?: string };

export interface PostContext {
  previousSlug: string;
  slug: string;
  date: number;
  nextSlug: string;
}

export interface PostData {
  metadata: Metadata;
  context: PostContext;
  content: string | null;
}
