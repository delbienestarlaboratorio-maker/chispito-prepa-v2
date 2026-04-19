import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPost, CATEGORIAS_BLOG } from "@/data/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};
    return {
        title: `${post.titulo} | prepa.chispito.mx`,
        description: post.descripcionSeo,
        keywords: post.tags.join(", "),
        openGraph: {
            title: post.titulo,
            description: post.descripcionSeo,
            type: "article",
            publishedTime: post.fecha,
        },
    };
}

function renderContenido(text: string) {
    // Render básico: procesa ## titulos, | tablas |, **bold**, → links, > blockquotes
    const lines = text.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        if (!line) { i++; continue; }

        // H2
        if (line.startsWith("## ")) {
            elements.push(<h2 key={i} style={{ fontSize: "1.375rem", marginTop: "2rem", marginBottom: "0.75rem", color: "#e2e8f0" }}>{line.slice(3)}</h2>);
            i++; continue;
        }
        // H3
        if (line.startsWith("### ")) {
            elements.push(<h3 key={i} style={{ fontSize: "1.125rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#cbd5e1" }}>{line.slice(4)}</h3>);
            i++; continue;
        }
        // Blockquote
        if (line.startsWith("> ")) {
            elements.push(
                <blockquote key={i} style={{ borderLeft: "3px solid #f59e0b", paddingLeft: "1rem", color: "#fbbf24", fontSize: "0.9375rem", margin: "1rem 0" }}>
                    {line.slice(2)}
                </blockquote>
            );
            i++; continue;
        }
        // Tabla markdown
        if (line.startsWith("|")) {
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("|")) {
                tableLines.push(lines[i].trim());
                i++;
            }
            const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/));
            elements.push(
                <div key={i} style={{ overflowX: "auto", margin: "1.25rem 0" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                        <tbody>
                            {rows.map((row, ri) => {
                                const cells = row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
                                const Tag = ri === 0 ? "th" : "td";
                                return (
                                    <tr key={ri} style={{ borderBottom: "1px solid var(--color-border)" }}>
                                        {cells.map((cell, ci) => (
                                            <Tag key={ci} style={{ padding: "0.5rem 0.875rem", textAlign: "left", fontWeight: ri === 0 ? 700 : 400, color: ri === 0 ? "#e2e8f0" : "var(--color-text-muted)" }}>
                                                {cell.trim()}
                                            </Tag>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }
        // Lista - con →  → link
        if (line.startsWith("- ") || line.startsWith("* ")) {
            const items: string[] = [];
            while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
                items.push(lines[i].trim().slice(2));
                i++;
            }
            elements.push(
                <ul key={i} style={{ paddingLeft: "1.25rem", margin: "0.75rem 0", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {items.map((item, ii) => (
                        <li key={ii} style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
                            {renderInline(item)}
                        </li>
                    ))}
                </ul>
            );
            continue;
        }
        // Lista numerada
        if (/^\d+\./.test(line)) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
                items.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
                i++;
            }
            elements.push(
                <ol key={i} style={{ paddingLeft: "1.25rem", margin: "0.75rem 0", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {items.map((item, ii) => (
                        <li key={ii} style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
                            {renderInline(item)}
                        </li>
                    ))}
                </ol>
            );
            continue;
        }
        // Párrafo normal
        elements.push(
            <p key={i} style={{ color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0.625rem 0" }}>
                {renderInline(line)}
            </p>
        );
        i++;
    }
    return elements;
}

function renderInline(text: string): React.ReactNode {
    // **bold** y [text](url)
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i} style={{ color: "#e2e8f0", fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
            return <Link key={i} href={linkMatch[2]} style={{ color: "#38bdf8", fontWeight: 500 }}>{linkMatch[1]}</Link>;
        }
        return part;
    });
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.categoria === post.categoria).slice(0, 3);
    const emojis: Record<string, string> = { puntajes: "📊", guias: "📚", comparativas: "⚖️", consejos: "💡", fechas: "📅" };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.titulo,
        description: post.descripcionSeo,
        datePublished: post.fecha,
        keywords: post.tags.join(", "),
        publisher: {
            "@type": "Organization",
            name: "prepa.chispito.mx",
            url: "https://prepa.chispito.mx",
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/blog" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Blog</Link>
                    <span style={{ color: "#fbbf24", fontWeight: 700, fontSize: "0.875rem" }}>
                        {emojis[post.categoria]} {CATEGORIAS_BLOG[post.categoria as keyof typeof CATEGORIAS_BLOG]}
                    </span>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Simulacro gratis →
                    </Link>
                </div>
            </nav>

            <div style={{ paddingTop: "var(--nav-height)", background: "var(--color-bg)", minHeight: "100vh" }}>
                {/* Header del artículo */}
                <header style={{
                    borderBottom: "1px solid var(--color-border)",
                    padding: "3rem 1.5rem 2.5rem",
                    background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 70%)",
                }}>
                    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                            <span style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.78rem", color: "#fbbf24", fontWeight: 600 }}>
                                {emojis[post.categoria]} {CATEGORIAS_BLOG[post.categoria as keyof typeof CATEGORIAS_BLOG]}
                            </span>
                            <span style={{ color: "var(--color-text-dim)", fontSize: "0.78rem", display: "flex", alignItems: "center" }}>
                                ⏱️ {post.tiempoLectura} min de lectura
                            </span>
                            <span style={{ color: "var(--color-text-dim)", fontSize: "0.78rem", display: "flex", alignItems: "center" }}>
                                📅 {new Date(post.fecha).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                            </span>
                        </div>
                        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: 1.35, marginBottom: "1rem" }}>
                            {post.titulo}
                        </h1>
                        <p style={{ fontSize: "1.0625rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                            {post.descripcionSeo}
                        </p>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {post.tags.map((t) => (
                                <span key={t} style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "999px", padding: "0.2rem 0.625rem", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Contenido */}
                <div style={{ maxWidth: "720px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
                    <article>
                        {renderContenido(post.contenido)}
                    </article>

                    {/* CTA */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, rgba(0,74,147,0.15), rgba(0,74,147,0.05))",
                            border: "1px solid rgba(56,189,248,0.2)",
                            borderRadius: "var(--radius-xl)",
                            padding: "2rem",
                            marginTop: "3rem",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>⏱️</div>
                        <h3 style={{ marginBottom: "0.75rem" }}>¿Listo para practicar?</h3>
                        <p style={{ marginBottom: "1.5rem", color: "var(--color-text-muted)" }}>
                            Haz el simulacro gratuito de 128 preguntas y mide tu nivel real.
                        </p>
                        <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/unam/simulador" className="btn btn-unam">⏱️ Simulacro UNAM →</Link>
                            <Link href="/unam/calculadora" className="btn btn-ghost">🧮 Calculadora</Link>
                        </div>
                    </div>

                    {/* Artículos relacionados */}
                    {related.length > 0 && (
                        <div style={{ marginTop: "3rem" }}>
                            <h3 style={{ marginBottom: "1.25rem", fontSize: "1.125rem" }}>📰 Artículos relacionados</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                {related.map((r) => (
                                    <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                                        <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1rem 1.125rem" }}>
                                            <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{r.titulo}</div>
                                            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>{r.tiempoLectura} min · {r.descripcionSeo.slice(0, 80)}...</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
