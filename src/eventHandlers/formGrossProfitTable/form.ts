import {getFiscalYear} from '../helpers/getFiscalYear';
import {getLatestMonths} from '../helpers/getLatestMonths';
import {areaLabelList} from './config';
import {type TForm} from './schema';

const today = new Date();
const fiscalYear = getFiscalYear(today);

export const initialForm: TForm = {
	months: getLatestMonths(fiscalYear, 3),
	year: fiscalYear.toString(),
	storeIds: [areaLabelList[0]],
};
