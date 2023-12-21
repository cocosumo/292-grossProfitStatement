export const isProdForced = process.env.NODE_ENV_FORCED === 'production';
export const isProd = isProdForced || process.env.NODE_ENV === 'production';
