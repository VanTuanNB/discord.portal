export type RequestOptions<T = any, K = any> = {
    payload?: T;
    headers?: HeadersInit;
    queryParams?: K;
    slug?: string;
};
