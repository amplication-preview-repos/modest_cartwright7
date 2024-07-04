import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="BlogAuthor" source="blogAuthor" />
        <TextInput label="BlogContent" multiline source="blogContent" />
        <DateTimeInput label="BlogCreationDate" source="blogCreationDate" />
        <TextInput label="BlogTitle" source="blogTitle" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="CreationDate" source="creationDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
