export const agentTypes = ['yumeAG', 'cocoAG', 'cocoConst'] as const;
export type Tagents = typeof agentTypes[number];

export const empRoles = ['取締役', '店長', '店長代理', '主任', '営業', '工務'] as const;
export type EmpRoles = typeof empRoles[number];

export const employeeStatus = ['有効', '無効', '保留(退職済)'] as const;
export type EmpStatus = typeof employeeStatus[number];

export const affiliations = ['ここすも', 'すてくら', 'ゆめてつ'] as const;
export type EmpAffiliations = typeof affiliations[number];

type RolesMap = {
	[key in Tagents]: EmpRoles[];
};

export const rolesMap: RolesMap = {
	yumeAG: ['取締役', '主任', '営業', '店長', '店長代理'],
	cocoAG: ['営業', '店長', '工務', '主任'],
	cocoConst: ['営業', '店長', '工務', '主任'], // 当面、cocoAGと一緒ですが、変わるかもしれませんので、残しておきます。
	// 'sutekura': ['主任', '営業', '店長', '工務'],
};
