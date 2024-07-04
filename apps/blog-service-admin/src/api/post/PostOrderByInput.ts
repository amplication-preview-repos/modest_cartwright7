import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  blogAuthor?: SortOrder;
  blogContent?: SortOrder;
  blogCreationDate?: SortOrder;
  blogTitle?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
