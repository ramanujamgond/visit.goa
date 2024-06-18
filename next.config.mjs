/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3ki85qs1zca4t.cloudfront.net'
            }
        ]
    }
};

export default nextConfig;
