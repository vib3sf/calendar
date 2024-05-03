import { HolidayDTO } from "../models/holiday.dto";

export const fetchHolidays = async (): Promise<Array<HolidayDTO>> => {
  let holidays = getHolidaysFromStorage();

  if (!holidays) {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/holidays?country=US&year=2021",
      {
        method: "GET",
        headers: {
          "X-Api-Key": "YMGy1PnGwpGSCBpncFvIyQ==LsDti8TP7Oczp5Gu",
        },
      }
    );
    holidays = await response.json();
    setHolidaysToStorage(holidays);
  }
  return holidays;
};

export const getHolidaysFromStorage = (): Array<HolidayDTO> =>
  JSON.parse(localStorage.getItem("holidays") as string);

export const setHolidaysToStorage = (holidays: Array<HolidayDTO>): void =>
  localStorage.setItem("holidays", JSON.stringify(holidays));
