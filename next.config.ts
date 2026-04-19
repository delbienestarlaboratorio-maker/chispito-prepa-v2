import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    assetPrefix: process.env.NODE_ENV === "production" ? "https://chispito-prepa.pages.dev" : undefined,
    images: {
        unoptimized: true,
    },
    // eslint.ignoreDuringBuilds removed — not supported in Next.js 15+
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
