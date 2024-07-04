import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  commentCreationDate?: Date | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  relatedPost?: string | null;
};
