// eslint-disable-next-line import/prefer-default-export
export const getDateString = () => {
  const date = new Date();
  return `${date.getDate()}-${hourFormat(
    date.getMonth() + 1
  )}-${date.getFullYear()} ${hourFormat(date.getHours())}:${hourFormat(
    date.getMinutes()
  )}`;
};

const hourFormat = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};
