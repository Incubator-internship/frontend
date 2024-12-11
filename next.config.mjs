// /** @type {import('next').NextConfig} */
// const nextConfig = {reactStrictMode: false};

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {reactStrictMode: false};
 
export default withNextIntl(nextConfig);