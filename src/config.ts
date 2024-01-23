export const areas = {
	西: '豊田方面',
	東: '豊川方面',
} as const;
export type Areas = keyof typeof areas;
