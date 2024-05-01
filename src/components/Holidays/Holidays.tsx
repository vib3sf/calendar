import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getHolidaysByDate } from "../../services/holidays/holidays.api";
import "./Holidays.css"

export function Holidays() {
  const [holidays, setHolidays] = useState<Array<string>>([]);
  const [load, setLoad] = useState(false);

  const date = useSelector<RootState, string>(
    (state: RootState) => state.dater.value
  );

  useEffect(() => {
    const fetchHolidays = async () => {
      const fetchedHolidays = await getHolidaysByDate(new Date(date));
      setHolidays(fetchedHolidays);
      setLoad(true);
    };

    setLoad(false);
    fetchHolidays();
    console.log('render')
  }, [date]);

  return (
    <div>
      {load ? (
        <ul className="holiday-list">
          {holidays.map((holiday: string) => (
            <li key={holiday}>{holiday}</li>
          ))}
        </ul>
      ) : <p className="loading">Loading...</p>}
    </div>
  );
}
