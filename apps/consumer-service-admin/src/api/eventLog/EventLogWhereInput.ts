import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventLogWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  offset?: IntNullableFilter;
  partition?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  topic?: StringNullableFilter;
  value?: JsonFilter;
};
