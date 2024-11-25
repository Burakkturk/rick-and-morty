/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "rickandmortyapi.com"
            }
        ]
    }
};

export default nextConfig;