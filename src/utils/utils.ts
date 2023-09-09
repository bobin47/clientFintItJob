import moment from "moment";

export const changeDate = (date: string) => {
  const dateObj = moment(date);
  const formattedDate = dateObj.format("YYYY-MM-DD HH:mm:ss");
  return formattedDate;
};
