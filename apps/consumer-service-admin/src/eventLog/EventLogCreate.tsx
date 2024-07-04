import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Key" source="key" />
        <NumberInput step={1} label="Offset" source="offset" />
        <NumberInput step={1} label="Partition" source="partition" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="Topic" source="topic" />
        <div />
      </SimpleForm>
    </Create>
  );
};
