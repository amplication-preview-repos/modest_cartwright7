import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author" source="author" />
        <TextField label="BlogAuthor" source="blogAuthor" />
        <TextField label="BlogContent" source="blogContent" />
        <TextField label="BlogCreationDate" source="blogCreationDate" />
        <TextField label="BlogTitle" source="blogTitle" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreationDate" source="creationDate" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="Author" source="author" />
            <TextField label="CommentAuthor" source="commentAuthor" />
            <TextField label="CommentContent" source="commentContent" />
            <TextField
              label="CommentCreationDate"
              source="commentCreationDate"
            />
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="RelatedPost" source="relatedPost" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
