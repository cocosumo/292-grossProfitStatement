import { describe, it, expect } from '@jest/globals';
import { getLastDayOfMonth } from './getLastDayOfMonth';


describe('getLastDayOfMonth', () => {
  it('月初日を入れたときに月末が返ってくること', () => {

    const result = getLastDayOfMonth(new Date('2023-12-1'));

    expect(result).toBe('2023-12-31');
  }, 60000);

  it('月末日を入れたときにも月末が返ってくること', () => {

    const result = getLastDayOfMonth(new Date('2023-12-31'));

    expect(result).toBe('2023-12-31');
  }, 60000);
});
