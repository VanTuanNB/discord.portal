'use client';

import { store } from '@/store/store.store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PrimaryLayout } from './PrimaryLayout/PrimaryLayout.layout';

export default function AppComponent({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <PrimaryLayout>{children}</PrimaryLayout>
        </Provider>
    );
}
