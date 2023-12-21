import { useFormContext, useWatch } from 'react-hook-form';
import { TForm } from '../formGrossProfitTable/schema';

export const useTypedFormContext = useFormContext<TForm>;
export const useTypedWatch = useWatch<TForm>;
