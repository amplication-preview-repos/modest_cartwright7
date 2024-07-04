import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="CommentAuthor" source="commentAuthor" />
        <TextInput label="CommentContent" multiline source="commentContent" />
        <DateTimeInput
          label="CommentCreationDate"
          source="commentCreationDate"
        />
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="RelatedPost" source="relatedPost" />
      </SimpleForm>
    </Create>
  );
};
