import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const EventLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Key" source="key" />
        <NumberInput step={1} label="Offset" source="offset" />
        <NumberInput step={1} label="Partition" source="partition" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="Topic" source="topic" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
