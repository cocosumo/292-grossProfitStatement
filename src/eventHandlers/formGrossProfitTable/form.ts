import { getFiscalYear } from '../../../../app-229-contracts/src/helpers/getFiscalYear';
import { getLatestMonths } from '../../../../app-229-contracts/src/helpers/getLatestMonths';
import { areaLabelList } from './config';
import { TForm } from './schema';


const today = new Date();
const fiscalYear = getFiscalYear(today);


export const initialForm: TForm = {
  months: getLatestMonths(fiscalYear, 3),
  year: fiscalYear.toString(),
  storeIds: [areaLabelList[0]],
};
