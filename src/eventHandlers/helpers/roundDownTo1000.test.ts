import { describe, it, expect } from '@jest/globals';
import { roundDownTo1000 } from './roundDownTo1000';


describe('roundDownTo1000', () => {
  it('1000円未満を切り捨てることパターン1', () => {

    const result = roundDownTo1000(1999);

    expect(result).toBe(1000);
  }, 10000);
  
  it('1000円未満を切り捨てることパターン2', () => {

    const result = roundDownTo1000(2001);

    expect(result).toBe(2000);
  }, 10000);
});
