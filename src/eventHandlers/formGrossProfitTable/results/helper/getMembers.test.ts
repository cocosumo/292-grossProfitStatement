import {describe, it, expect} from '@jest/globals';
import {type AreaLabelList} from '../../config';
import {getMembers} from './getMembers';
import {useEmployees} from '@/eventHandlers/hooks/useEmployees';
import {type IEmployees} from '@api/getEmployees';

describe('getMembers', () => {
	const {data: employees} = useEmployees();
	it('全エリアのメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['全店舗' as AreaLabelList],
		});

		expect(result.length).toBe(15);
	}, 10000);

	it('西エリアのメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['西エリア' as AreaLabelList],
		});

		expect(result.length).toBe(9);
	}, 10000);

	it('東エリアのメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['東エリア' as AreaLabelList],
		});

		expect(result.length).toBe(6);
	}, 10000);

	it('対象店舗のメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['豊川店', '向山店'],
		});

		expect(result.length).toBe(6);
	}, 10000);
});
