import path from 'path';
const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: process.env.NODE_ENV === 'development',
        },
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'global')],
    },
};

export default nextConfig;
