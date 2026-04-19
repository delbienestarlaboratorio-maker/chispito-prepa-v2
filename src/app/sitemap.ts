import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";
import { PLANTELES_CCH, PLANTELES_ENP, PLANTELES_CECYT, PLANTELES_ECOEMS, type Plantel } from "@/data/schools";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prepa.chispito.mx";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/unam`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/unam/simulador`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/unam/calculadora`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
        { url: `${BASE_URL}/unam/escuelas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/unam/temario`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
        { url: `${BASE_URL}/unam/flashcards`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
        { url: `${BASE_URL}/unam/diagnostico`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/ipn`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/ipn/simulador`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/ipn/calculadora`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
        { url: `${BASE_URL}/ipn/escuelas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/ipn/temario`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
        { url: `${BASE_URL}/ipn/diagnostico`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/ecoems`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
        { url: `${BASE_URL}/ecoems/como-funciona`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/ecoems/escuelas`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
        { url: `${BASE_URL}/ecoems/calculadora-promedio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/quiz`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
        { url: `${BASE_URL}/unam/mi-plan`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ];

    const toUrl = (prefix: string, p: Plantel, priority: number) => ({
        url: `${BASE_URL}${prefix}/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
    });

    return [
        ...staticRoutes,
        ...PLANTELES_CCH.map((p) => toUrl("/unam/escuelas", p, 0.7)),
        ...PLANTELES_ENP.map((p) => toUrl("/unam/escuelas", p, 0.7)),
        ...PLANTELES_CECYT.map((p) => toUrl("/ipn/escuelas", p, 0.7)),
        ...PLANTELES_ECOEMS.map((p) => toUrl("/ecoems/escuelas", p, 0.65)),
        ...BLOG_POSTS.map((post) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.fecha),
            changeFrequency: "monthly" as const,
            priority: 0.75,
        })),
    ];
}
