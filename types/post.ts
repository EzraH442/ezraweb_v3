type requiredFields = "date";
type optionalFields =
  | "title"
  | "slug"
  | "featuredImage"
  | "nextSlug"
  | "previousSlug"
  | "headline"
  | "archive";

type requiredItemsType = { [K in requiredFields]: string };
type optionalItemsType = { [K in optionalFields]?: string };

export type PostField = requiredFields | optionalFields;
export interface PostContext {
  previousSlug: string;
  slug: string;
  nextSlug: string;
}

export interface PostData {
  metadata: requiredItemsType & optionalItemsType;
  context: PostContext;
  content: string | null;
}
