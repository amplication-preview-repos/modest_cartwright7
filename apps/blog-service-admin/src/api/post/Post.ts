import { Comment } from "../comment/Comment";

export type Post = {
  author: string | null;
  blogAuthor: string | null;
  blogContent: string | null;
  blogCreationDate: Date | null;
  blogTitle: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  creationDate: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
