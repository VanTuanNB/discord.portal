import classNames from 'classnames/bind';
import styles from './PrimaryLayout.module.scss';
const cx = classNames.bind(styles);
export function PrimaryLayout({ children }: { children: any }) {
    return <div id={cx('primary-layout')}>{children}</div>;
}
