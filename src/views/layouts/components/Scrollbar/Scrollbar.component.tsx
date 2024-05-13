import classNames from 'classnames/bind';
import { ReactElement } from 'react';

import { DiscordLogo } from '@/views/shared/Icons/Icon.component';
import { SeparateComponent } from '@/views/shared/Separate/Separate.component';
import styles from './Scrollbar.module.scss';

const cx = classNames.bind(styles);

type ScrollBarProps = {
    className?: string;
};

export function ScrollBarComponent({ className }: ScrollBarProps): ReactElement {
    return (
        <aside className={cx('wrapper-scrollbar', className)}>
            <ul className={cx('nav-list')}>
                <li className={cx('nav-item')}>
                    <nav className={cx('nav-menu')}>
                        <DiscordLogo className={cx('logo')} width={30} height={30} />
                    </nav>
                </li>
            </ul>
            <SeparateComponent width={'48%'} height={2} className={cx('separate')} />
        </aside>
    );
}
