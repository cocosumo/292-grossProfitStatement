import {KintoneRestAPIClient} from '@kintone/rest-api-client';

export const client = new KintoneRestAPIClient({
	baseUrl: 'https://rdmuhwtt6gx7.cybozu.com/',
	// Use session authentication
});
