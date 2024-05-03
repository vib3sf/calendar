export const getRelativeDay = (date: Date): string => {
  const dayDifference = Math.floor(
    (new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) + 1
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
