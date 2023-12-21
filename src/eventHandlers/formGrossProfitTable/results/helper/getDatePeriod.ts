import startOfMonth from 'date-fns/startOfMonth';
import { PeriodLabelList, periodLabelList } from '../../config';
import subMonths from 'date-fns/subMonths';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';



/** 日付の範囲を取得する */
export const getDatePeriod = (dateList: string[], year: string) => {

  if (periodLabelList.some((date) => date === dateList[0])) {
    // 期間が選択されている場合
    const startDate = startOfMonth(subMonths(new Date(+year, 0, 1), 1));

    switch (dateList[0] as PeriodLabelList) {
      case '全期':
        return {
          startDate: startDate,
          finDate: endOfMonth(addMonths(startDate, 11)),
        };
      case '上半期':
        return {
          startDate: startDate,
          finDate: endOfMonth(addMonths(startDate, 5)),
        };
      case '下半期':
        return {
          startDate: startOfMonth(addMonths(startDate, 6)),
          finDate: endOfMonth(addMonths(startDate, 11)),
        };
      default:
        return {
          startDate: startDate,
          finDate: endOfMonth(addMonths(startDate, 11)),
        };
    }

  } else {
    // 月が選択されている場合
    return {
      startDate: startOfMonth(new Date(dateList[0])),
      finDate: endOfMonth(new Date(dateList[dateList.length - 1])),
    };
  }

};

export type GetDatePeriod = ReturnType<typeof getDatePeriod>; 
