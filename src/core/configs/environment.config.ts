export const environmentClient = {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
    staticEndpoint: process.env.NEXT_PUBLIC_STATIC_ENDPOINT,
    prefixApi: process.env.NEXT_PUBLIC_PREFIX_API_ENDPOINT || 'api',
};

export const environmentServer = {
    apiEndpoint: process.env.API_ENDPOINT,
    staticEndpoint: process.env.STATIC_ENDPOINT,
    prefixApi: process.env.PREFIX_ENDPOINT || 'api',
};
