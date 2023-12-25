import { appId, RecordType } from './config';
import { getAllRecords } from '../common';

export type GetAllProcurementDetailsParams = Parameters<typeof getAllProcurementDetails>[0];

/**
 * Retrieves all 発注情報。
 * @param params - Optional parameters for retrieving the records.
 * @returns A promise that resolves to an array of procurement details.
 */
export const getAllProcurementDetails = async (
  params?: Omit<Parameters<typeof getAllRecords>[0], 'app'>,
) => getAllRecords<RecordType>({
  ...params,
  app: appId,
});

