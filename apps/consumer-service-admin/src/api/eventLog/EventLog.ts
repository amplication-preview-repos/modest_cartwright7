import { JsonValue } from "type-fest";

export type EventLog = {
  createdAt: Date;
  id: string;
  key: string | null;
  offset: number | null;
  partition: number | null;
  timestamp: Date | null;
  topic: string | null;
  updatedAt: Date;
  value: JsonValue;
};
