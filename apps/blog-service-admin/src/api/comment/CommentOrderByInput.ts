import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  commentAuthor?: SortOrder;
  commentContent?: SortOrder;
  commentCreationDate?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  relatedPost?: SortOrder;
  updatedAt?: SortOrder;
};
