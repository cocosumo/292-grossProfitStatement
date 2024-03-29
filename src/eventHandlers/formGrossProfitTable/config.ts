export const periodLabelList = ['全期', '上半期', '下半期'] as const;
export type PeriodLabelList = typeof periodLabelList[number];

export const areaLabelList = ['全店舗', '西エリア', '東エリア'] as const;
export type AreaLabelList = typeof areaLabelList[number];

export const projTypeList = ['新築', 'リフォーム', '新築付帯', '太陽光', 'その他'] as const;
export type ProjTypeList = typeof projTypeList[number] | '';

export type GrossProfitTableRow = {
	/** 担当者ID */
	cocoConstId?: string;

	/** 工事種別 */
	projType: ProjTypeList;

	/** 受注金額計 */
	orderAmtTotalBeforeTax: number;

	/** 粗利 */
	grossprofitAmtTotal: number;

	/** 夢てつ紹介料 */
	introFeeYume: number;

	/** ここすも粗利 */
	grossProfitCoco: number;

	/** ここすも粗利率 */
	grossProfitRateCoco: number;

	/** 受注 月平均 */
	orderAmtMonthlyAve: number;

	/** 粗利 月平均 */
	grossProfitMonthlyAve: number;
};
export type KGrossProfitTableRows = keyof GrossProfitTableRow;
export type KTableLabelList = keyof Omit<GrossProfitTableRow, 'cocoConstId' | 'projType' | 'grossprofitAmtTotal' | 'introFeeYume'>;

export const grossProfitTblRowInit: GrossProfitTableRow = {
	cocoConstId: '',
	projType: '',
	orderAmtTotalBeforeTax: 0,
	grossprofitAmtTotal: 0,
	introFeeYume: 0,
	grossProfitCoco: 0,
	grossProfitRateCoco: 0,
	orderAmtMonthlyAve: 0,
	grossProfitMonthlyAve: 0,
};

export const tableLabelList: Record<KTableLabelList, string> = {
	orderAmtTotalBeforeTax: '受注金額計',
	grossProfitCoco: 'ここすも粗利',
	grossProfitRateCoco: 'ここすも粗利率',
	orderAmtMonthlyAve: '受注 月平均',
	grossProfitMonthlyAve: '粗利 月平均',
};

export const tableLabelListAve: Record<KTableLabelList, string> = {
	orderAmtTotalBeforeTax: '一人当たり受注額',
	grossProfitCoco: '一人当たり粗利額',
	grossProfitRateCoco: '一人当たり粗利率',
	orderAmtMonthlyAve: '受注 月平均',
	grossProfitMonthlyAve: '粗利 月平均',
};
