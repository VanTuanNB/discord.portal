import { THEME_OPTION } from '@/core/constants/common.constant';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_SELECTOR } from '../selector.store';

// init instance

const initialState = {
    id: '',
    name: 'Tuan ne',
};
export const userSlice = createSlice({
    name: REDUCER_SELECTOR.USER,
    initialState,
    reducers: {
        test(state, action: PayloadAction<{ theme: THEME_OPTION }>) {
            console.log('state', state);
            console.log('actions', action);
        },
        // changeGlobalThemes(state, actions: PayloadAction<{ theme: THEME_OPTION }>) {
        //     state.localStoreSide[ELocalStorageKey.DATA_THEME] = actions.payload.theme;
        //     localStoreInstance.setStore<EDataTheme>(ELocalStorageKey.DATA_THEME, actions.payload.theme);
        // },
        // setUserToken(state, actions: PayloadAction<IUserToken | null>) {
        //     state.localStoreSide[ELocalStorageKey.HARMONY_USER_TOKEN] = actions.payload;
        //     localStoreInstance.setStore<IUserToken | null>(ELocalStorageKey.HARMONY_USER_TOKEN, actions.payload);
        // },
    },
});

export default userSlice;
