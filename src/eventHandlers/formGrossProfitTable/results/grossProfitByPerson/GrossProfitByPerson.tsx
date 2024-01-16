import {Stack} from '@mui/material';
import {type SummaryContracts} from '../../../helpers/getSummaryContracts';

/** 担当者ごとの粗利表を表示する */
export const GrossProfitByPerson = ({
	contractData,
}: {
	contractData: SummaryContracts[];
}) => (
	<Stack spacing={2}>
      担当者ごとの粗利表
	</Stack>
);
