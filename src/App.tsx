import "./App.css";
import Calendar, { SelectEvent } from "@atlaskit/calendar";
import { useAppDispatch } from "./app/hooks";
import { RelativeDay } from "./components/RelativeDay/RelativeDay";
import { Holidays } from "./components/Holidays/Holidays";
import { reselect } from "./features/holidayer/holidayerSlice";
import { select } from "./features/dater/daterSlice";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const dispatch = useAppDispatch();

  const date = useSelector((state: RootState) => state.dater.value)

  return (
    <>
      <div className="container">
        <Calendar
          onSelect={(e: SelectEvent) => {
            const selectedDate = new Date(e.iso).toDateString();
            if(date !== selectedDate) {
              dispatch(select(selectedDate))
              dispatch(reselect());
            }
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
