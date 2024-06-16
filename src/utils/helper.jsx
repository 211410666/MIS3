export const createIdByDate = () => {
  const today = new Date();
  const id =
    today.getFullYear() +
    (today.getMonth() + 1) +
    today.getDate() +
    today.getHours() +
    today.getMinutes() +
    today.getSeconds();
  return id;
};
