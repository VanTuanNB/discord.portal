import classNames from 'classnames/bind';

import { ReactElement, ReactNode } from 'react';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

function SidebarComponent({ children }: { children: ReactNode }): ReactElement {
    return <aside className={cx('side-bar')}>{children}</aside>;
}

export default SidebarComponent;
