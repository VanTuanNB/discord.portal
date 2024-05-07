import classNames from 'classnames/bind';

import { DiscordLogo } from '@/assets/icons/custom.icon';
import { SCROLL_NAV } from '@/core/constants/common.constant';
import Image from 'next/image';
import styles from './ScrollBase.module.scss';

const cx = classNames.bind(styles);
const channels = [
    {
        id: '213123',
        code: '1190709789689380924',
        name: 'Testing',
        firstCharacter: 'T',
        imageUrl: null,
    },
    {
        id: '333343',
        code: '1190709789689380924',
        name: '[PUBLIC]-Members-Tipjs',
        firstCharacter: 'P',
        imageUrl: 'https://cdn.discordapp.com/icons/763045651679543306/6a022ae78f57dda5af443ba3f323d81f.webp?size=96',
    },
    {
        id: '555454534',
        code: '1190709789689380924',
        name: 'Valorant',
        firstCharacter: 'V',
        imageUrl: null,
    },
    {
        id: '9997867',
        code: '1190709789689380924',
        name: 'Phòng để nghiện',
        firstCharacter: 'P',
        imageUrl: 'https://cdn.discordapp.com/icons/763045651679543306/6a022ae78f57dda5af443ba3f323d81f.webp?size=96',
    },
];
const menus = SCROLL_NAV;
function ScrollBaseLayout() {
    return (
        <div className={cx('scroll-base')}>
            <ul className={cx('list-channel')}>
                <li className={cx('channel-item')}>
                    <div className={cx('pill')}></div>
                    <div className={cx('channel')}>
                        <div className={cx('box')}>
                            <DiscordLogo className={cx('logo')} width={30} height={30} />
                            <span className={cx('notify-quantity')}>
                                <span className={cx('text')}>1</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            {/* separator */}
            <div className={cx('wrapper-separator')}>
                <div className={cx('separator')}></div>
            </div>
            {/* channel of user */}
            <ul className={cx('list-channel')}>
                <li className={cx('channel-item')}>
                    <div className={cx('pill')}></div>
                    <div className={cx('channel')}>
                        <div className={cx('box')}>
                            {/* <DiscordLogo className={cx('logo')} width={30} height={30} /> */}
                            <div className="wrapper-img">
                                <Image
                                    className={cx('img')}
                                    src={
                                        'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
                                    }
                                    width={0}
                                    height={0}
                                    alt=""
                                />
                            </div>
                            {/* <span className={cx('notify-quantity')}>
                                <span className={cx('text')}>1</span>
                            </span> */}
                        </div>
                    </div>
                </li>
            </ul>
            {/* <ul className={cx('list-channel')}>
                {channels.map((channel) => (
                    <li key={channel.id} className={cx('channel-item')}>
                        <div className={cx('pill')}></div>
                        <div className={cx('channel')}>
                            <div className={cx('box')}>
                                <DiscordLogo className={cx('logo')} width={30} height={30} />
                                <span className={cx('notify-quantity')}>
                                    <span className={cx('text')}>1</span>
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default ScrollBaseLayout;
