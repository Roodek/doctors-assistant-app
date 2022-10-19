// eslint-disable-next-line import/prefer-default-export
export const getDateString = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
