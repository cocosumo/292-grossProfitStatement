import { describe, it, expect } from '@jest/globals';
import { getSummaryContracts } from './getSummaryContracts';
import { getProjTypes, getAllProjects, getAllContracts, getAllProcurementDetails } from 'api-kintone';


describe('getSummaryContracts', () => {
  it('契約書のまとめデータが返ってくること', async () => {

    const queryFrom = '2023-11-01';
    const queryTo = '2023-12-31';

    const [
      projTypes,
      projects,
      contracts,
      andpadProcurement,
    ] = await Promise.all([
      getProjTypes(),
      getAllProjects({ condition: `projFinDate >= "${queryFrom}" and projFinDate <= "${queryTo}"` }),
      getAllContracts(),
      getAllProcurementDetails({ condition: `支払日 <= "${queryTo}"` }),
    ]);


    const result = getSummaryContracts({
      projTypes: projTypes || [],
      projects: projects || [],
      contracts: contracts || [],
      andpadProcurement: andpadProcurement || [],
    });

    console.log('result', result);

    expect(result.length).toBeGreaterThan(0);
  }, 60000);
});
