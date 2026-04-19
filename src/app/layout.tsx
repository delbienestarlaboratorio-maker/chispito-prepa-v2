import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://prepa.chispito.mx";
const ADSENSE_ID = "ca-pub-6867283748828267";
const GA4_ID = "G-XXXXXXXXXX"; // TODO: reemplazar con ID real de GA4

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Prepárate para la Prepa GRATIS | UNAM, IPN y ECOEMS — prepa.chispito.mx",
        template: "%s | prepa.chispito.mx",
    },
    description:
        "El portal más completo y GRATUITO para prepararte para el examen de admisión al bachillerato. Simuladores UNAM (CCH, ENP), IPN (CECyT) y guías ECOEMS. 1,500+ reactivos con explicaciones.",
    keywords: [
        "simulador COMIPEMS",
        "examen CCH",
        "examen ENP",
        "examen CECyT IPN",
        "ECOEMS 2025",
        "cuántos aciertos necesito para el CCH",
        "puntaje mínimo ENP",
        "reactivos examen bachillerato",
        "simulacro UNAM gratis",
        "preparatoria México",
    ],
    authors: [{ name: "Chispito", url: "https://chispito.mx" }],
    creator: "Chispito",
    publisher: "Chispito",
    openGraph: {
        type: "website",
        locale: "es_MX",
        url: SITE_URL,
        siteName: "prepa.chispito.mx",
        title: "Prepárate GRATIS para el CCH, ENP y CECyT | prepa.chispito.mx",
        description:
            "Simuladores, temario y guías para entrar a la UNAM (CCH/ENP) o al IPN (CECyT). Con puntajes históricos reales, calculadora de aciertos y sistema de racha diaria.",
        images: [
            {
                url: `${SITE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "prepa.chispito.mx — Prepárate gratis para la preparatoria",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Simulador CCH y ENP GRATIS | prepa.chispito.mx",
        description: "Prepárate para el examen de la UNAM o IPN totalmente gratis. 1,500+ reactivos con explicaciones.",
        images: [`${SITE_URL}/og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    alternates: { canonical: SITE_URL },
    other: {
        "google-adsense-account": ADSENSE_ID,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es-MX">
            <head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
                    rel="stylesheet"
                />
                {/* AdSense */}
                <script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
                    crossOrigin="anonymous"
                />
                {/* Meta AdSense */}
                <meta name="google-adsense-account" content={ADSENSE_ID} />
                {/* GA4 */}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `,
                    }}
                />
                {/* Schema.org — WebSite */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "prepa.chispito.mx",
                            url: SITE_URL,
                            description: "Portal gratuito de preparación para el examen de bachillerato en México",
                            inLanguage: "es-MX",
                            potentialAction: {
                                "@type": "SearchAction",
                                target: `${SITE_URL}/blog?q={search_term_string}`,
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
