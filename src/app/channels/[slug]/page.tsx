type ChannelStaticPageProps = {
    params: {
        slug: string;
    };
    searchParams: { [key: string]: string };
};
function ChannelStaticPage({ params }: ChannelStaticPageProps) {
    const { slug } = params;
    switch (decodeURIComponent(slug)) {
        case '@me':
            return <>ProfilePage</>;
        default:
            return <>Channel Static Page</>;
    }
}

export default ChannelStaticPage;
