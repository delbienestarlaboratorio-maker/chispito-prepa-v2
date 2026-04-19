import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },
    // eslint.ignoreDuringBuilds removed — not supported in Next.js 15+
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
