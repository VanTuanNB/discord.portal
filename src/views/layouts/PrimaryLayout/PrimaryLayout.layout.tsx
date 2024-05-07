import { Flex, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import classNames from 'classnames/bind';
import ScrollBaseLayout from '../components/ScrollerBase/ScrollBase.component';
import styles from './PrimaryLayout.module.scss';
const cx = classNames.bind(styles);
export function PrimaryLayout({ children }: { children: any }) {
    return (
        // <div id={cx('primary-layout')} className={cx('row')}>
        //     {/* <div className={cx('box-left', 'col', 'c-2')}>
        //         <Layout>
        //             <Layout.Sider style={{ background: '#ccc' }}>Scroller Component</Layout.Sider>
        //             <Layout.Sider>Sidebar Component</Layout.Sider>
        //         </Layout>
        //     </div>
        //     <div className={cx('box-center', 'col', 'c-8')}>box-center</div>
        //     <div className={cx('box-right', 'col', 'c-2')}>box-right</div> */}
        //     {/* <ConfigProvider
        //         theme={{
        //             token: {
        //                 colorPrimary: '#313338',
        //             },
        //         }}
        //     >

        //     </ConfigProvider> */}

        // </div>
        <Flex id={cx('primary-layout')} gap="middle" wrap="wrap">
            <Layout>
                <Sider className={cx('wrapper-scroll-base')} width="4%">
                    <ScrollBaseLayout></ScrollBaseLayout>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider width="10%" style={{ background: 'red' }}>
                            Sider
                        </Sider>
                        <Content>Content</Content>
                        <Sider width="10%" style={{ background: 'red' }}>
                            Sider
                        </Sider>
                    </Layout>
                </Layout>
            </Layout>
        </Flex>
    );
}
