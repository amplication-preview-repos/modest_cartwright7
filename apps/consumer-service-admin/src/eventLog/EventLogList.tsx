import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <TextField label="Offset" source="offset" />
        <TextField label="Partition" source="partition" />
        <TextField label="Timestamp" source="timestamp" />
        <TextField label="Topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
