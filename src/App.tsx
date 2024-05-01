import "./App.css";
import Calendar, { SelectEvent } from "@atlaskit/calendar";
import { useAppDispatch } from "./app/hooks";
import { select } from "./features/dater/daterSlice";
import { RelativeDay } from "./components/RelativeDay/RelativeDay";
import { Holidays } from "./components/Holidays/Holidays";

function App() {
  const dispatch = useAppDispatch();

  const selectDate = (date: string): void => {
    dispatch(select(date));
  };

  return (
    <>
      <div className="container">
        <Calendar
          onSelect={(e: SelectEvent) =>
            selectDate(new Date(e.iso).toDateString())
          }
          className="calendar"
        />
        <RelativeDay />
        <Holidays />
      </div>
    </>
  );
}

export default App;
