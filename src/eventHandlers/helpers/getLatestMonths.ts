import subMonths from 'date-fns/subMonths';
import { getFiscalMonths } from './getFiscalMonths';
import format from 'date-fns/format';
import { getFiscalYear } from './getFiscalYear';

export const getLatestMonths = (year: number, maxMonths: number) => {


  const fiscalMonths = getFiscalMonths(year);
  const today = new Date();
  const fiscalYear = getFiscalYear(today);



  const months: string[] = [];

  if (year === fiscalYear) {
    for (let i = 0; i <= maxMonths; i++) {
      const date = subMonths(new Date(), i);
      const formattedDate = format(date, 'yyyy-MM');
    
      if (fiscalMonths.includes(formattedDate)) {
        months.push(formattedDate);
      }
    }
  } else {
    // Just return the last 3 months of the fiscal year
    for (let i = 0; i <= maxMonths; i++) {
      const date = subMonths(new Date(year, 11, 1 ), i);
      const formattedDate = format(date, 'yyyy-MM');
    
      if (fiscalMonths.includes(formattedDate)) {
        months.push(formattedDate);
      }
    }
  }

  return months.reverse();

};