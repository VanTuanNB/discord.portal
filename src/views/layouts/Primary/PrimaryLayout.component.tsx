import classNames from 'classnames/bind';
import { ReactElement, ReactNode } from 'react';
import { ScrollBarComponent } from '../components/Scrollbar/Scrollbar.component';
import styles from './PrimaryLayout.module.scss';

const cx = classNames.bind(styles);

function PrimaryLayout({ children }: { children: ReactNode }, ...props: any): ReactElement {
    console.log('props in primary layout', props);
    console.log('props in primary layout', children);
    return (
        <div className={cx('primary-layout')}>
            <aside className={cx('scroll-bar')}>
                <ScrollBarComponent className={cx('scroll-bar')} />
            </aside>
            <div className={cx('container')}>
                {children}
                {/* <aside className={cx('side-bar')}>Sidebar</aside>
                <main className={cx('central')}>
                    <header className={cx('header')}>Header nè</header>
                    <section className={cx('section')}>{children}</section>
                </main> */}
            </div>
        </div>
    );
}

export default PrimaryLayout;
