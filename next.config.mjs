// /** @type {import('next').NextConfig} */
// const nextConfig = {reactStrictMode: false};

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'excubatoir-bucket.s3.eu-north-1.amazonaws.com',
                port: '',
                protocol: 'https',
                search: '',
            },
        ],
    },
    reactStrictMode: false

};
 
export default withNextIntl(nextConfig);