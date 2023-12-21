import { useStores } from '../../../hooks/useStores';
import { areaLabelList } from '../../config';

export const useAreaNameById = (area: string[]) => {
  const { data } = useStores();

  // 選択されているのがエリアの場合(エリアの場合は単一選択)
  const hasArea = areaLabelList.some((areaLabel) => areaLabel === area[0]);
  if (hasArea) return area[0];

  // 店舗が選択されている場合
  const stores = area.map((store) => {
    const storeRec = data?.find((s) => s.uuid.value === store);
    return storeRec?.storeNameShort.value;
  });

  return stores.filter(Boolean).join(', ');

};