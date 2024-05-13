'use client';
import { environment } from '@/core/configs/environment.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import PrimaryLayout from './Primary/PrimaryLayout.component';
const queryClient = new QueryClient();
function AppProviderComponent({ children }: { children: ReactNode }) {
    console.log('environment', environment);
    return (
        <QueryClientProvider client={queryClient}>
            <PrimaryLayout>{children}</PrimaryLayout>
        </QueryClientProvider>
    );
}

export default AppProviderComponent;
