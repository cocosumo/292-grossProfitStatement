import { Controller } from 'react-hook-form';
import { Box, Chip, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTypedFormContext, useTypedWatch } from '../../hooks/useTypedRHF';
import { formatYearMonth } from '../../helpers/formatYearMonth';
import { getFiscalMonths } from '../../helpers/getFiscalMonths';
import { getMonthList } from '../../helpers/getMonthList';
import { periodLabelList } from '../config';



export const SelectMonths = () => {

  const { control, setValue } = useTypedFormContext();
  const selectedYear = useTypedWatch({
    name: 'year',
  }) as string;

  const fiscalMonths = getFiscalMonths(selectedYear);

  return (
    <Controller
      name='months'
      control={control}
      render={({
        field: { onChange, value, ...otherField },
      }) => {

        return (

          <FormControl
            size='small'
            sx={{
              minWidth: '150px',
            }}
          >
            <InputLabel id="selectMonthsLabel">
              年月
            </InputLabel>
            <Select
              labelId="selectMonths"
              id="selectMonths"
              value={value}
              label="年月"
              onChange={(e) => {
                onChange(([] as string[]).concat(e.target.value).sort());
                setValue('months', getMonthList(([] as string[]).concat(e.target.value)));
              }}
              multiple
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((s) => (
                    <Chip size='small' key={s} label={formatYearMonth(s)} />
                  ))}
                </Box>
              )}
              {...otherField}
            >
              {periodLabelList.map((period) => {
                return (
                  <MenuItem
                    key={period}
                    value={period}
                  >
                    <em>
                      {period}
                    </em>
                  </MenuItem>);
              })}
              <Divider />

              {fiscalMonths.map((month) => (
                <MenuItem
                  key={month}
                  value={month}
                >
                  {formatYearMonth(month)}
                </MenuItem>
              ))}


            </Select>
          </FormControl>

        );
      }}

    />
  );
};