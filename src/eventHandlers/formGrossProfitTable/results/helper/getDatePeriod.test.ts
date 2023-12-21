import { describe, it, expect } from '@jest/globals';
import { getDatePeriod } from './getDatePeriod';
import { PeriodLabelList } from '../../config';
import endOfDay from 'date-fns/endOfDay';



describe('getDatePeriod', () => {
  it('全期を取得する', () => {

    const result = getDatePeriod(['全期' as PeriodLabelList], '2023');

    expect(result.startDate).toStrictEqual(new Date('2022-12-1'));
    expect(result.finDate).toStrictEqual(endOfDay(new Date('2023-11-30')));

  }, 10000);

  it('上半期を取得する', () => {

    const result = getDatePeriod(['上半期' as PeriodLabelList], '2024');

    expect(result.startDate).toStrictEqual(new Date('2023-12-1'));
    expect(result.finDate).toStrictEqual(endOfDay(new Date('2024-5-31')));

  }, 10000);

  it('下半期を取得する', () => {

    const result = getDatePeriod(['下半期' as PeriodLabelList], '2022');

    expect(result.startDate).toStrictEqual(new Date('2022-6-1'));
    expect(result.finDate).toStrictEqual(endOfDay(new Date('2022-11-30')));

  }, 10000);

  it('月の範囲を取得する', () => {

    const result = getDatePeriod(['2023-12', '2024-7'], '2024');

    expect(result.startDate).toStrictEqual(new Date('2023-12-1'));
    expect(result.finDate).toStrictEqual(endOfDay(new Date('2024-7-31')));

  }, 10000);
});
