import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getRelativeDay } from "../../utils/relativeDay";
import "./RelativeDay.css"

export function RelativeDay() {
  const date = useSelector<RootState, string>(
    (state: RootState) => state.dater.value
  );

  return (
    <div className="relative-day">
      <p>{getRelativeDay(new Date(date))}</p>
    </div>
  );
}
