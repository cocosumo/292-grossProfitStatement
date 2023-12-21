import { Stack, Table, TableBody, TableHead, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TableRowLayout } from './TableRowLayout';
import { SummaryContracts } from '../../../helpers/getSummaryContracts';
import { useTypedWatch } from '../../../hooks/useTypedRHF';
import { useAreaNameById } from '../hooks/useAreaNameById';
import { useCumulativeTableTotal } from '../hooks/useCumulativeTableTotal';
import { getMonthsNum } from '../helper/getMonthsNum';
import { getViewData } from '../helper/getViewData';
import { getViewDataTotal } from '../helper/getViewDataTotal';
import { KTableLabelList, projTypeList, tableLabelList } from '../../config';


/** 対象期間の粗利集計表を表示する */
export const CumulativeTableTotal = ({
  contractData,
}: {
  contractData: SummaryContracts[]
}) => {
  const [
    year,
    periods,
    area,
  ] = useTypedWatch({
    name: [
      'year',
      'months',
      'storeIds',
    ],
  }) as [
    string,
    string[],
    string[],
  ];

  const storeNames = useAreaNameById(area);

  const monthsNum = getMonthsNum(periods);

  const cumulativeTableLabel = `${year}年度 ${storeNames ? storeNames : ''}	契約集計表`;

  const viewDate = useCumulativeTableTotal({
    contractData,
    area,
    monthsNum,
  });

  const StyledTableHead = styled(TableHead)({
    backgroundColor: 'aliceblue',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderCollapse: 'collapse',
    borderSpacing: '0',
  });



  return (
    <Stack spacing={2}>
      <Typography variant='h5'>
        {cumulativeTableLabel}
      </Typography>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <StyledTableHead>
          <TableRowLayout
            key={'CumulativeTableTotal.header'}
            label={'税抜'}
            shinchiku={projTypeList[0]}
            reform={projTypeList[1]}
            shinchikuhutai={projTypeList[2]}
            taiyouko={projTypeList[3]}
            others={projTypeList[4]}
            total={'合計'}
          />
        </StyledTableHead>
        <TableBody>
          {Object.keys(tableLabelList).map((tableLabel: KTableLabelList) => (
            <TableRowLayout
              key={`CumulativeTableTotal.${tableLabel}`}
              label={tableLabelList[tableLabel]}
              shinchiku={getViewData({
                datas: viewDate,
                projTypeForTotalization: projTypeList[0],
                tgtParam: tableLabel,
              })}
              reform={getViewData({
                datas: viewDate,
                projTypeForTotalization: projTypeList[1],
                tgtParam: tableLabel,
              })}
              shinchikuhutai={getViewData({
                datas: viewDate,
                projTypeForTotalization: projTypeList[2],
                tgtParam: tableLabel,
              })}
              taiyouko={getViewData({
                datas: viewDate,
                projTypeForTotalization: projTypeList[3],
                tgtParam: tableLabel,
              })}
              others={getViewData({
                datas: viewDate,
                projTypeForTotalization: projTypeList[4],
                tgtParam: tableLabel,
              })}
              total={getViewDataTotal({
                datas: viewDate,
                tgtParam: tableLabel,
              })}
            />
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};
