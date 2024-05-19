import ChannelSidebarComponent from '@/views/layouts/components/Sidebar/Channel/ChannelSidebar.component';
import ProfileSidebarComponent from '@/views/layouts/components/Sidebar/Profile/ProfileSidebar.component';
import SidebarComponent from '@/views/layouts/components/Sidebar/Sidebar.component';
import { ReactElement } from 'react';

function MainChanelStaticPage({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { slug: string };
}): ReactElement {
    const { slug } = params;
    const decodeParams = decodeURIComponent(slug);
    const handleRenderSidebar = () => {
        switch (decodeParams) {
            case '@me':
                return <ProfileSidebarComponent />;

            default:
                return <ChannelSidebarComponent />;
        }
    };
    return (
        <>
            <SidebarComponent>{handleRenderSidebar()}</SidebarComponent>
            {children}
        </>
    );
}

export default MainChanelStaticPage;
