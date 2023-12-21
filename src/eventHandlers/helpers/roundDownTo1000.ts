import { Big } from 'big.js';


/** 1000未満を切り捨てる */
export const roundDownTo1000 = (amount: number) => {
  const bigAmount = new Big(amount);
  const roundedAmount = bigAmount
    .round(-3, Big.roundDown);

  return roundedAmount.toNumber();
};
