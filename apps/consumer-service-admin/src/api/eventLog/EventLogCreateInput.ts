import { InputJsonValue } from "../../types";

export type EventLogCreateInput = {
  key?: string | null;
  offset?: number | null;
  partition?: number | null;
  timestamp?: Date | null;
  topic?: string | null;
  value?: InputJsonValue;
};
