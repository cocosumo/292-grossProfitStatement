import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { periodLabelList } from '../formGrossProfitTable/config';

export const formatYearMonth = (yearMonth: string) => {

  if (periodLabelList.some((periodLabel) => periodLabel === yearMonth)) return yearMonth;

  return `${format(parse(yearMonth, 'yyyy-MM', new Date()), 'M')}月`;
};
