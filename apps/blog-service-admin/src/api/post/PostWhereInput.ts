import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  blogAuthor?: StringNullableFilter;
  blogContent?: StringNullableFilter;
  blogCreationDate?: DateTimeNullableFilter;
  blogTitle?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
