/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: process.env.NODE_ENV === 'development',
};

export default nextConfig;
