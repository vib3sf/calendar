import { HolidayDTO } from "../../models/holiday.dto";

export const getHolidaysByDate = async (
  date: Date
): Promise<Array<HolidayDTO>> => {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/holidays?country=US&year=2021",
    {
      method: "GET",
      headers: {
        "X-Api-Key": "YMGy1PnGwpGSCBpncFvIyQ==LsDti8TP7Oczp5Gu",
      },
    }
  );
  const holidays = await response.json();
  return holidays.filter(
    (holiday: HolidayDTO) =>
      new Date(holiday.date).getDay() === date.getDay() &&
      new Date(holiday.date).getMonth() === date.getMonth()
  );
};
