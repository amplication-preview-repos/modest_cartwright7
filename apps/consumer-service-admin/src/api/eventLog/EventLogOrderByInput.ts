import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  offset?: SortOrder;
  partition?: SortOrder;
  timestamp?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
