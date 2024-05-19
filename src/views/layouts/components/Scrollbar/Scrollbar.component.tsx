import classNames from 'classnames/bind';
import { ReactElement, useState } from 'react';

import { DiscordLogo } from '@/views/shared/Icons/Icon.component';
import { SeparateComponent } from '@/views/shared/Separate/Separate.component';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Scrollbar.module.scss';

const cx = classNames.bind(styles);

type ScrollBarProps = {
    className?: string;
};

const channels = [
    {
        id: '4e5508fd-979d-47ad-a56b-e9a604d02f1f',
        code: '3213213',
        name: 'Channel1',
        thumbnailUrl:
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    },
    {
        id: 'bca65efd-d928-40c3-afa1-1ff4f2a714f8',
        name: 'Channel1',
        code: 'qweqwe',
        thumbnailUrl:
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    },
    {
        id: '7b62adde-bac6-4103-8169-5b319dc49941',
        name: 'Channel1',
        code: '6745ytrrt',
        thumbnailUrl:
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    },
    {
        id: '8b6ffabb-e9bb-4479-b3d1-96ca08ff3075',
        name: 'Channel1',
        code: '46565ytgtg',
        thumbnailUrl:
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    },
    {
        id: '8b6ffabb-e9bb-4479-b3d1-96ca08ff3076',
        name: 'Channel1',
        code: '32fgfgtyjhy',
        thumbnailUrl: null,
    },
    {
        id: '8b6ffabb-e9bb-4479-b3d1-96ca08ff3071',
        name: 'Channel1',
        code: '3fwdvfdhtyjyj',
        thumbnailUrl: null,
    },
];

export function ScrollBarComponent({ className }: ScrollBarProps): ReactElement {
    const [selected, setSelected] = useState<string>('@me');
    return (
        <aside className={cx('wrapper-scrollbar', className)}>
            <ul className={cx('nav-list')}>
                <li className={cx('nav-item', selected === '@me' && 'selected')} onClick={() => setSelected('@me')}>
                    <Link href={`/channels/@me`} className={cx('nav-menu')}>
                        <DiscordLogo className={cx('logo')} width={30} height={30} />
                    </Link>
                </li>
                <li
                    className={cx('nav-item', selected === 'guild-discovery' && 'selected')}
                    onClick={() => setSelected('guild-discovery')}
                >
                    <Link href={`/guild-discovery`} className={cx('nav-menu')}>
                        <DiscordLogo className={cx('logo')} width={30} height={30} />
                    </Link>
                </li>
            </ul>
            <SeparateComponent width={'48%'} height={2} className={cx('separate')} />
            <ul className={cx('nav-list')}>
                {channels.map((channel) => (
                    <li
                        key={channel.id}
                        className={cx('nav-item', selected === channel.code && 'selected')}
                        onClick={() => setSelected(channel.code)}
                    >
                        <Link href={`/channels/${channel.code}`} className={cx('nav-menu')}>
                            {channel.thumbnailUrl ? (
                                <Image
                                    src={channel.thumbnailUrl}
                                    alt=""
                                    className={cx('thumbnail')}
                                    width={48}
                                    height={48}
                                />
                            ) : (
                                <div className={cx('')}>{channel.name[0]}</div>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
