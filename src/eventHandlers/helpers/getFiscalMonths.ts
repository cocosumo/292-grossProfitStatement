import addMonths from 'date-fns/addMonths';
import format from 'date-fns/format';
import startOfMonth from 'date-fns/startOfMonth';
import subMonths from 'date-fns/subMonths';

export const getFiscalMonths = (year: string | number) => {
  const maxMonths = 12;

  const startMonth = startOfMonth(subMonths(new Date(+year, 0, 1), 1));
  
  const fiscalMonths = [];

  for (let i = 0; i < maxMonths; i++) {
    fiscalMonths.push(format(addMonths(startMonth, i), 'yyyy-MM'));
  }

  return fiscalMonths;
  
};
