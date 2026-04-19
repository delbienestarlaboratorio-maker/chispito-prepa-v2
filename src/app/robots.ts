import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prepa.chispito.mx";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/"],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
