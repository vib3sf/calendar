import "./App.css";
import Calendar, { SelectEvent } from "@atlaskit/calendar";
import { useAppDispatch } from "./app/hooks";
import { select } from "./features/dater/daterSlice";
import { RelativeDay } from "./components/RelativeDay/RelativeDay";

function App() {
  const dispatch = useAppDispatch();

  const selectDate = (date: string): void => {
    dispatch(select(date));
  };

  return (
    <>
      <Calendar
        onSelect={(e: SelectEvent) =>
          selectDate(new Date(e.iso).toDateString())
        }
      />
      <RelativeDay/>
    </>
  );
}

export default App;
