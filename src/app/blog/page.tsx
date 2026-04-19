import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, CATEGORIAS_BLOG, type BlogPost } from "@/data/blog-posts";

export const metadata: Metadata = {
    title: "Blog — Guías y Consejos para el Examen de Bachillerato | prepa.chispito.mx",
    description: "Artículos gratuitos sobre el COMIPEMS 2025: puntajes mínimos CCH y ENP, cómo estudiar, fechas de registro, diferencias entre escuelas y más.",
};

function CardBlog({ post }: { post: BlogPost }) {
    const emoji = {
        puntajes: "📊",
        guias: "📚",
        comparativas: "⚖️",
        consejos: "💡",
        fechas: "📅",
    }[post.categoria];

    return (
        <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div
                className="card"
                style={{
                    padding: "1.25rem",
                    transition: "all 0.2s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                }}
            >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{
                        background: "rgba(245,158,11,0.1)",
                        border: "1px solid rgba(245,158,11,0.2)",
                        borderRadius: "999px",
                        padding: "0.2rem 0.625rem",
                        fontSize: "0.75rem",
                        color: "#fbbf24",
                        fontWeight: 600,
                    }}>
                        {emoji} {CATEGORIAS_BLOG[post.categoria]}
                    </span>
                    <span style={{ color: "var(--color-text-dim)", fontSize: "0.75rem" }}>
                        {post.tiempoLectura} min de lectura
                    </span>
                </div>
                <h2 style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.5, margin: 0 }}>{post.titulo}</h2>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", flex: 1, margin: 0 }}>
                    {post.descripcionSeo}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {post.tags.slice(0, 2).map((t) => (
                        <span
                            key={t}
                            style={{
                                background: "var(--color-bg)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "999px",
                                padding: "0.15rem 0.5rem",
                                fontSize: "0.7rem",
                                color: "var(--color-text-dim)",
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default function BlogPage() {
    const categorias = Object.keys(CATEGORIAS_BLOG) as (keyof typeof CATEGORIAS_BLOG)[];

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Inicio</Link>
                    <span style={{ fontWeight: 700, color: "#fbbf24" }}>📰 Blog</span>
                    <Link href="/quiz" className="btn btn-ghost" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Quiz vocacional →
                    </Link>
                </div>
            </nav>

            <div style={{ paddingTop: "var(--nav-height)", background: "var(--color-bg)", minHeight: "100vh" }}>
                {/* Hero */}
                <section style={{
                    padding: "3.5rem 1.5rem 2.5rem",
                    borderBottom: "1px solid var(--color-border)",
                    background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(245,158,11,0.15) 0%, transparent 60%)",
                    textAlign: "center",
                }}>
                    <p style={{ fontSize: "0.875rem", color: "#fbbf24", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        📰 Blog Chispito Prepa
                    </p>
                    <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
                        Guías gratuitas para entrar al bachillerato
                    </h1>
                    <p style={{ maxWidth: "560px", margin: "0 auto", fontSize: "1.0625rem" }}>
                        {BLOG_POSTS.length} artículos sobre puntajes, estrategias de estudio, fechas del COMIPEMS y más.
                    </p>
                </section>

                {/* Artículos por categoría */}
                <div className="container" style={{ maxWidth: "1080px", padding: "2.5rem 1.5rem" }}>
                    {categorias.map((cat) => {
                        const posts = BLOG_POSTS.filter((p) => p.categoria === cat);
                        if (posts.length === 0) return null;
                        return (
                            <div key={cat} style={{ marginBottom: "3rem" }}>
                                <h2 style={{ fontSize: "1.25rem", marginBottom: "1.25rem", color: "#fbbf24" }}>
                                    {CATEGORIAS_BLOG[cat]}
                                </h2>
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                                    gap: "1rem",
                                }}>
                                    {posts.map((post) => <CardBlog key={post.slug} post={post} />)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
