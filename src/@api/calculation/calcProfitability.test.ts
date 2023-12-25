import {describe, it, expect} from '@jest/globals';
import {calcProfitability} from './calcProfitability';

describe('calcProfitability', () => {
	const testData = {
		orderAmountAfterTax: 22700000,
		additionalAmountAfterTax: 1500000,
		purchaseAmount: 16041147,
		paymentAmount: 15000000,
		depositAmount: 24200000,
		yumeCommFeeRate: 19,
		tax: 0.1,
		hasRefund: true,
	};

	const {
		orderAmountBeforeTax,
		additionalAmountBeforeTax,
		purchaseAmount,
		paymentAmount,
		予定利益率,
		予定利益額,
		実利益率,
		実利益額,
		yumeProfitSharing,
		cocoProfitSharing,
		実利益税抜_夢てつ,
		実利益税抜_ここすも,
		利益税抜_夢てつ,
		利益税抜_ここすも,
		受注額計_税込,
		受注額計_税抜,
		入金額,
		未入金,
	} = calcProfitability(testData);

	it('正しい「発注金額」を返す', () => {
		expect(orderAmountBeforeTax).toBe(20636364);
	});

	it('正しい「追加金額」を返す', () => {
		expect(additionalAmountBeforeTax).toBe(1363636);
	});

	it('正しい「発注金額」を返す', () => {
		expect(purchaseAmount).toBe(16041147);
	});

	it('正しい「支払金額」を返す', () => {
		expect(paymentAmount).toBe(15000000);
	});

	it('正しい「予定利益率」を返す', () => {
		expect(予定利益率).toBe(27.09);
	});

	it('正しい「予定利益額」を返す', () => {
		expect(予定利益額).toBe(5958853);
	});

	it('正しい「実利益率」を返す', () => {
		expect(実利益率).toBe(31.82);
	});

	it('正しい「実利益額」を返す', () => {
		expect(実利益額).toBe(7000000);
	});

	it('正しい「ゆめてつ利益配分」を返す', () => {
		expect(yumeProfitSharing).toBe(19);
	});

	it('正しい「ここすも利益配分」を返す', () => {
		expect(cocoProfitSharing).toBe(81);
	});

	it('正しい「実利益税抜_夢てつ」を返す', () => {
		expect(実利益税抜_夢てつ).toBe(1330000);
	});

	it('正しい「実利益税抜_ここすも」を返す', () => {
		expect(実利益税抜_ここすも).toBe(5670000);
	});

	it('正しい「利益税抜_夢てつ」を返す', () => {
		expect(利益税抜_夢てつ).toBe(1263500);
	});

	it('正しい「利益税抜_ここすも」を返す', () => {
		expect(利益税抜_ここすも).toBe(5736500);
	});

	it('正しい「受注額計_税込」を返す', () => {
		expect(受注額計_税込).toBe(24200000);
	});

	it('正しい「受注額計_税抜」を返す', () => {
		expect(受注額計_税抜).toBe(22000000);
	});

	it('正しい「入金額」を返す', () => {
		expect(入金額).toBe(24200000);
	});

	it('正しい「未入金額」を返す', () => {
		expect(未入金).toBe(0);
	});
});
