export const environment = {
    isProduction: process.env.NODE_ENV === 'production',
    apiEndpoint: process.env.API_ENDPOINT,
    staticEndpoint: process.env.STATIC_ENDPOINT,
    dataDogApplicationId: process.env.DATA_DOG_APPLICATION_ID,
    dataDogClientToken: process.env.DATA_DOG_CLIENT_TOKEN,
};
