
/**
 * Docusignのステータスコード
 * @see https://developers.docusign.com/docs/esign-rest-api/esign101/concepts/envelopes/status-codes/
 */
export const envelopeStatuses = [
	'authoritativecopy',
	'completed',
	'correct',
	'created',
	'declined',
	'deleted',
	'delivered',
	'sent',
	'signed',
	'template',
	'timedout',
	'transfercompleted',
	'voided',

	// Custom statuses
	'voiding',
	'',
] as const;

export type TEnvelopeStatus = typeof envelopeStatuses[number];
