import { DateTime } from "luxon";

export const convertDatetimeStringToLocalString = (
  dateTimeString: string,
  dateTimeType: Intl.DateTimeFormatOptions = DateTime.DATETIME_MED,
  local: string = "en"
) => {
  return dateTimeString
    ? DateTime.fromISO(dateTimeString)
        .setLocale(local)
        .toLocaleString(dateTimeType)
    : null;
};
