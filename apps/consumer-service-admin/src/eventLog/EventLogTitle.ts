import { EventLog as TEventLog } from "../api/eventLog/EventLog";

export const EVENTLOG_TITLE_FIELD = "key";

export const EventLogTitle = (record: TEventLog): string => {
  return record.key?.toString() || String(record.id);
};
