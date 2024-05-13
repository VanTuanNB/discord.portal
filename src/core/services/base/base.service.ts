import { environment } from '@/core/configs/environment.config';
import { IDefineApiDocument } from '../../interfaces/common.interface';
import { RequestOptions } from './base.model';

export class BaseCoreService {
    private token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    constructor() {}

    public async requestApiWithAuth<T = any>(document: IDefineApiDocument, options?: RequestOptions): Promise<T> {
        const endpoint = this.handleConfigEndpointUrl(document, options);
        const body = this.handlePayloadByMethod(document.method, options);
        return await fetch(endpoint, {
            method: document.method,
            headers: {
                Authorization: `Bearer ${this.token}`,
                ...options?.headers,
            },
            body: body,
        }).then((res) => res.json());
    }

    public async requestApi<T = any>(document: IDefineApiDocument, options?: RequestOptions): Promise<T> {
        const endpoint = this.handleConfigEndpointUrl(document, options);
        const body = this.handlePayloadByMethod(document.method, options);
        return await fetch(endpoint, {
            method: document.method,
            headers: options ? options.headers : undefined,
            body: options ? options.payload : undefined,
        }).then((res) => res.json());
    }

    private handleConfigEndpointUrl(document: IDefineApiDocument, options?: RequestOptions) {
        console.log('apiEndpoint', environment);
        let endpoint = document.endpoint;
        if (options && options.slug) {
            endpoint = `${endpoint}/${options.slug}`;
        }
        if (options && options.queryParams && Object.keys(options.queryParams).length) {
            const queryParams = Object.keys(options.queryParams)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(options.queryParams[key])}`)
                .join('&');
            endpoint = `${endpoint}?${queryParams}`;
        }
        return `${environment.apiEndpoint}/${environment.prefixApi}/v1${endpoint}`;
    }

    private handlePayloadByMethod(method: IDefineApiDocument['method'], options?: RequestOptions) {
        if (!options) return undefined;
        switch (method) {
            case 'GET':
            case 'HEAD':
                return undefined;
            default:
                return options?.payload;
        }
    }
}
