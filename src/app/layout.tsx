import AppComponent from '@/views/layouts/app';
import './global.scss';

export const metadata = {
    title: 'Discord',
    description: 'Discord portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <AppComponent>{children}</AppComponent>
            </body>
        </html>
    );
}
