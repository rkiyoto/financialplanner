const MONTH_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDateFromNow = (offset: number) => {
  const today = new Date();
  const month = MONTH_LIST[(today.getMonth() + offset) % 12];
  const year =
    today.getFullYear() + Math.floor((today.getMonth() + offset) / 12);
  return { month, year };
};
