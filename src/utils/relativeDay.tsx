export const getRelativeDay = (date: Date): string => {
  const dayDifference = Math.round(
    (new Date(date).valueOf() - new Date().valueOf()) / (1000 * 60 * 60 * 24)
  );

  switch (dayDifference) {
    case 0:
      return "today";
    case 1:
      return "tomorrow";
    case 2:
      return "the day after tomorrow";
    case -1:
      return "yesterday";
    case -2:
      return "the day before yesterday";
    default:
      if (dayDifference > 2) {
        return `in ${dayDifference} days`;
      } else {
        return `${Math.abs(dayDifference)} days ago`;
      }
  }
};
