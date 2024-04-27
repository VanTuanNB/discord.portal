'use client';
import { useAppSelector } from '@/store/hook.store';
import { selectUserReducer } from '@/store/reducers/user.reducer';
import { ReactElement, useEffect } from 'react';

export function FriendPageComponent(): ReactElement {
    const store = useAppSelector(selectUserReducer);
    useEffect(() => {
        console.log('store', store);
    }, []);
    return (
        <div>
            <p>Store{JSON.stringify(store)}</p>
        </div>
    );
}
