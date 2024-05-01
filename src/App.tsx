import "./App.css";
import Calendar, { SelectEvent } from "@atlaskit/calendar";
import { useAppDispatch } from "./app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { select } from "./features/dater/daterSlice";

function App() {
  const dispatch = useAppDispatch();

  const selectDate = (date: string): void => {
    dispatch(select(date));
  };

  return (
    <>
      <Calendar onSelect={(e: SelectEvent) => selectDate(new Date(e.iso).toDateString())} />
      <p>
        {useSelector<RootState, string>(
          (state: RootState) => state.dater.value
        )}
      </p>
    </>
  );
}

export default App;
