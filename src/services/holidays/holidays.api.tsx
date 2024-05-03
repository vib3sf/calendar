import { HolidayDTO } from "../../models/holiday.dto";
import { fetchHolidays } from "../../utils/holidays";

export const getHolidaysByDate = async (
  date: Date
): Promise<Array<HolidayDTO>> => {
  return (await fetchHolidays()).filter(
    (holiday: HolidayDTO) =>
      new Date(holiday.date).getDate() === date.getDate() &&
      new Date(holiday.date).getMonth() === date.getMonth()
  );
};
