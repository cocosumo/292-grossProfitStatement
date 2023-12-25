export const getFiscalYear = (date: Date) => {
  // fiscal start month is December, ends in November

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  
  if (month === 12) {
    return year + 1;
  }

  return year;

};