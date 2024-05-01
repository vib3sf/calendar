import "./App.css";
import Calendar, { SelectEvent } from "@atlaskit/calendar";
import { useAppDispatch } from "./app/hooks";
import { RelativeDay } from "./components/RelativeDay/RelativeDay";
import { Holidays } from "./components/Holidays/Holidays";
import { reselect } from "./features/holidayer/holidayerSlice";
import { select } from "./features/dater/daterSlice";

function App() {
  const dispatch = useAppDispatch();

  const selectDate = (date: string) => dispatch(select(date));

  return (
    <>
      <div className="container">
        <Calendar
          onSelect={(e: SelectEvent) => {
            selectDate(new Date(e.iso).toDateString());
            dispatch(reselect());
          }}
          className="calendar"
        />
        <RelativeDay />
        <Holidays />
      </div>
    </>
  );
}

export default App;
