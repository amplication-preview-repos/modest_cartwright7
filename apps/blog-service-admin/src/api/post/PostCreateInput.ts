import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  blogAuthor?: string | null;
  blogContent?: string | null;
  blogCreationDate?: Date | null;
  blogTitle?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  creationDate?: Date | null;
  title?: string | null;
};
