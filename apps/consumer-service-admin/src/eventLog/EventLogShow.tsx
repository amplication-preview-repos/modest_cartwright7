import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EventLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <TextField label="Offset" source="offset" />
        <TextField label="Partition" source="partition" />
        <TextField label="Timestamp" source="timestamp" />
        <TextField label="Topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
