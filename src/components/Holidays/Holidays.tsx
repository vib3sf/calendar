import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getHolidaysByDate } from "../../services/holidays/holidays.api";
import "./Holidays.css";
import { useAppDispatch } from "../../app/hooks";
import { finish, update } from "../../features/holidayer/holidayerSlice";

export function Holidays() {
  const [holidays, setHolidays] = useState<Array<string>>([]);

  const date = useSelector<RootState, string>(
    (state: RootState) => state.dater.value
  );

  const dispatch = useAppDispatch();
  const load = useSelector<RootState, boolean>(
    (state: RootState) => state.holidayer.load
  );

  useEffect(() => {
    const fetchHolidays = async () => {
      const fetchedHolidays = await getHolidaysByDate(new Date(date));
      setHolidays(fetchedHolidays);
      dispatch(finish());
    };

    dispatch(update());
    fetchHolidays();
  }, [date, dispatch]);

  return (
    <div>
      {load ? (
        <ul className="holiday-list">
          {holidays.map((holiday: string) => (
            <li key={holiday}>{holiday}</li>
          ))}
        </ul>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
