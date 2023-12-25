import { appId, RecordType } from './config';
import { getAllRecords } from '../common';


export const getAllProjects = async (
  params?: Omit<Parameters<typeof getAllRecords>[0], 'app'>,
) => getAllRecords<RecordType>({
  ...params,
  app: appId,
  orderBy: '作成日時 desc',

});
