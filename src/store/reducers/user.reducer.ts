import { REDUCER_SELECTOR } from '../selector.store';
import { RootState } from '../store.store';

// user reducer
export const selectUserReducer = (state: RootState) => state[REDUCER_SELECTOR.USER];
