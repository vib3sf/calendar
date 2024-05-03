import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getHolidaysByDate } from "../../services/holidays/holidays.api";
import "./Holidays.css";
import { useAppDispatch } from "../../app/hooks";
import { finish } from "../../features/holidayer/holidayerSlice";
import { HolidayDTO } from "../../models/holiday.dto";

export function Holidays() {
  const dispatch = useAppDispatch();
  const date = useSelector<RootState, string>(
    (state: RootState) => state.dater.value
  );

  const holidays = useSelector<RootState, Array<HolidayDTO>>(
    (state: RootState) => state.holidayer.holidays
  );

  const load = useSelector<RootState, boolean>(
    (state: RootState) => state.holidayer.load
  );

  useEffect(() => {
    const fetchHolidays = async () => {
      const fetchedHolidays = await getHolidaysByDate(new Date(date));
      dispatch(finish(fetchedHolidays));
    };

    fetchHolidays();
  }, [date, dispatch]);

  return (
    <div>
      {load ? (
        <ul className="holiday-list">
          {holidays.map((holiday: HolidayDTO) => (
            <li key={holiday.name}>{holiday.name}</li>
          ))}
        </ul>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
