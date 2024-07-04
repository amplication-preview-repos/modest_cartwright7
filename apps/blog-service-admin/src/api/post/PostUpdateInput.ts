import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  blogAuthor?: string | null;
  blogContent?: string | null;
  blogCreationDate?: Date | null;
  blogTitle?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  creationDate?: Date | null;
  title?: string | null;
};
