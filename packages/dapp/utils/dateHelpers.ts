export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const nth = (d: number): string => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getDateString = (inputDate: Date): string => {
  const date = inputDate.getDate();
  const month = MONTHS[inputDate.getMonth()];
  const year = inputDate.getFullYear();
  return `${date}${nth(date)} ${month} ${year}`;
};

const padded = (d: number): string => {
  if (d < 10) return `0${d.toString()}`;
  return d.toString();
};

export const getDateInNumbers = (inputDate: Date): string => {
  const date = inputDate.getDate();
  const month = padded(inputDate.getMonth());
  const year = inputDate.getFullYear() % 100;
  return `${date}.${month}.${year}`;
};
