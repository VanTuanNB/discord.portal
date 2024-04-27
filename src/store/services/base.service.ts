import { environment } from '@/core/configs/environment.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const BaseCoreService = createApi({
    reducerPath: environment.apiEndpoint,
    baseQuery: fetchBaseQuery({
        baseUrl: `${environment.apiEndpoint}`,
    }),
    endpoints: (builder) => ({}),
});
