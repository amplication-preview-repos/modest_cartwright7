import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "blogTitle";

export const PostTitle = (record: TPost): string => {
  return record.blogTitle?.toString() || String(record.id);
};
