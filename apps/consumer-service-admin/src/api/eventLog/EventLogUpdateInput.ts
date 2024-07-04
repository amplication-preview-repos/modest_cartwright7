import { InputJsonValue } from "../../types";

export type EventLogUpdateInput = {
  key?: string | null;
  offset?: number | null;
  partition?: number | null;
  timestamp?: Date | null;
  topic?: string | null;
  value?: InputJsonValue;
};
