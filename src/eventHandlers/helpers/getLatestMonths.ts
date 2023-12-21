import subMonths from 'date-fns/subMonths';
import { getFiscalMonths } from './getFiscalMonths';
import format from 'date-fns/format';

export const getLatestMonths = (year: number, maxMonths: number) => {


  const fiscalMonths = getFiscalMonths(year);

  const months: string[] = [];

  for (let i = 0; i < maxMonths; i++) {
    const date = subMonths(new Date(year, new Date().getMonth(), 1 ), i);
    const formattedDate = format(date, 'yyyy-MM');
    
    if (fiscalMonths.includes(formattedDate)) {
      months.push(formattedDate);
    }
  }
  return months.reverse();

};
