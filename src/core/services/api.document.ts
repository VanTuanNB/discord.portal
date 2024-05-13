import { IDefineApiDocument } from '../interfaces/common.interface';

export const API_DOCUMENT: { [key: string]: { [key: string]: IDefineApiDocument } } = {
    user: {
        getList: {
            endpoint: '/user',
            method: 'GET',
        },
    },
};
