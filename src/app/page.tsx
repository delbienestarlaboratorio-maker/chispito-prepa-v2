import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
    title: "Prepárate GRATIS para la Prepa UNAM, IPN y ECOEMS",
    description:
        "El portal más completo de México para ingresar al bachillerato. Simuladores gratuitos para el CCH, ENP (UNAM), CECyT (IPN) y guías ECOEMS. 1,500+ reactivos con explicaciones detalladas.",
};

const STATS = [
    { numero: "1,500+", label: "Reactivos con explicaciones" },
    { numero: "60+", label: "Planteles documentados" },
    { numero: "128", label: "Preguntas por simulacro" },
    { numero: "100%", label: "Gratuito siempre" },
];

const INSTITUCIONES = [
    {
        id: "unam",
        href: "/unam",
        emoji: "🏛️",
        nombre: "UNAM",
        subtitulo: "CCH y Escuela Nacional Preparatoria",
        descripcion: "Los bachilleratos más prestigiosos de México. Requieren examen. Con pase reglamentado a cualquier carrera de la UNAM.",
        detalles: ["5 planteles CCH", "9 planteles ENP", "87 a 113 aciertos mínimos", "Pase Reglamentado incluido"],
        btnLabel: "Prepararme para la UNAM →",
        cardClass: "inst-card-unam",
        btnClass: "btn-unam",
        accentColor: "#38bdf8",
        tagBg: "rgba(0, 102, 204, 0.2)",
        tagColor: "#93c5fd",
    },
    {
        id: "ipn",
        href: "/ipn",
        emoji: "⚙️",
        nombre: "IPN",
        subtitulo: "Centros de Estudios Científicos y Tecnológicos",
        descripcion: "Bachillerato tecnológico con título técnico incluido. Requiere examen. Prepara tanto para la vida laboral como para la universidad.",
        detalles: ["19 planteles CECyT", "Carrera técnica al terminar", "Examen en línea ($525 MXN)", "Preparación para licenciaturas IPN"],
        btnLabel: "Prepararme para el IPN →",
        cardClass: "inst-card-ipn",
        btnClass: "btn-ipn",
        accentColor: "#f87171",
        tagBg: "rgba(200, 40, 47, 0.2)",
        tagColor: "#fca5a5",
    },
    {
        id: "ecoems",
        href: "/ecoems",
        emoji: "📚",
        nombre: "Sin Examen",
        subtitulo: "ECOEMS — Asignación directa al bachillerato",
        descripcion: "Sin examen, sin estrés. La asignación se hace por promedio de secundaria y zona geográfica. ¡Tu lugar está garantizado!",
        detalles: ["Colbach — 20 planteles CDMX", "CONALEP — 27 planteles CDMX", "CBTis, IEMS, Prepa en Línea", "Asignación por promedio escolar"],
        btnLabel: "Ver mis opciones sin examen →",
        cardClass: "inst-card-ecoems",
        btnClass: "btn-ecoems",
        accentColor: "#34d399",
        tagBg: "rgba(5, 150, 105, 0.2)",
        tagColor: "#6ee7b7",
    },
];

export default function HomePage() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/" className="navbar-logo">
                        Chispito <span style={{ color: "#f59e0b" }}>⚡</span> Prepa
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <Link href="/unam" style={{ color: "#93c5fd", fontSize: "0.9rem", fontWeight: 500 }}>UNAM</Link>
                        <Link href="/ipn" style={{ color: "#fca5a5", fontSize: "0.9rem", fontWeight: 500 }}>IPN</Link>
                        <Link href="/ecoems" style={{ color: "#6ee7b7", fontSize: "0.9rem", fontWeight: 500 }}>Sin Examen</Link>
                        <Link href="/blog" style={{ color: "#fbbf24", fontSize: "0.9rem", fontWeight: 500 }}>Blog</Link>
                        <Link href="/quiz" className="btn btn-ghost" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                            ¿Cuál me conviene?
                        </Link>
                    </div>
                </div>
            </nav>

            <main style={{ paddingTop: "var(--nav-height)" }}>
                {/* ====== HERO ====== */}
                <section
                    style={{
                        minHeight: "calc(100vh - var(--nav-height))",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "4rem 1.5rem",
                        background: "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(0,74,147,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(200,40,47,0.08) 0%, transparent 50%), var(--color-bg)",
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(251, 191, 36, 0.1)",
                            border: "1px solid rgba(251, 191, 36, 0.3)",
                            borderRadius: "999px",
                            padding: "0.4rem 1rem",
                            fontSize: "0.875rem",
                            color: "#fbbf24",
                            marginBottom: "1.5rem",
                            fontWeight: 500,
                        }}
                    >
                        ✨ 100% Gratuito · Sin registro · Sin trucos
                    </div>

                    <h1
                        style={{
                            maxWidth: "800px",
                            marginBottom: "1.25rem",
                            background: "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        ¿A cuál preparatoria quieres entrar?
                    </h1>

                    <p
                        style={{
                            maxWidth: "600px",
                            fontSize: "1.125rem",
                            color: "var(--color-text-muted)",
                            marginBottom: "3rem",
                        }}
                    >
                        El portal más completo de México para prepararte. Simuladores, temario, puntajes
                        históricos y más — completamente gratis.
                    </p>

                    {/* STATS */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "2rem",
                            maxWidth: "700px",
                            width: "100%",
                            marginBottom: "4rem",
                        }}
                    >
                        {STATS.map((s) => (
                            <div key={s.label} style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "1.875rem", fontWeight: 800, color: "white", lineHeight: 1 }}>
                                    {s.numero}
                                </div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginTop: "0.375rem" }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Las 3 cards de institución */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "1.5rem",
                            maxWidth: "1100px",
                            width: "100%",
                        }}
                    >
                        {INSTITUCIONES.map((inst) => (
                            <Link
                                key={inst.id}
                                href={inst.href}
                                className={inst.cardClass}
                                style={{ display: "block", textDecoration: "none" }}
                            >
                                {/* Header */}
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <span style={{ fontSize: "2rem" }}>{inst.emoji}</span>
                                    <div style={{ textAlign: "left" }}>
                                        <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "white" }}>
                                            {inst.nombre}
                                        </div>
                                        <div style={{ fontSize: "0.8125rem", color: inst.accentColor, fontWeight: 500 }}>
                                            {inst.subtitulo}
                                        </div>
                                    </div>
                                </div>

                                {/* Descripción */}
                                <p style={{ textAlign: "left", fontSize: "0.9375rem", marginBottom: "1.25rem", color: "rgba(241,245,249,0.75)" }}>
                                    {inst.descripcion}
                                </p>

                                {/* Tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                                    {inst.detalles.map((d) => (
                                        <span
                                            key={d}
                                            style={{
                                                background: inst.tagBg,
                                                color: inst.tagColor,
                                                padding: "0.25rem 0.625rem",
                                                borderRadius: "999px",
                                                fontSize: "0.8125rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {d}
                                        </span>
                                    ))}
                                </div>

                                {/* Botón */}
                                <div
                                    className={`btn ${inst.btnClass}`}
                                    style={{ width: "100%", justifyContent: "center" }}
                                >
                                    {inst.btnLabel}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Quiz CTA */}
                    <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
                        <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem", fontSize: "0.9375rem" }}>
                            ¿No sabes cuál es la mejor opción para ti?
                        </p>
                        <Link href="/quiz" className="btn btn-ghost">
                            🤔 Hacer el quiz de 5 preguntas →
                        </Link>
                    </div>
                </section>

                {/* ====== SECCIÓN CÓMO FUNCIONA ====== */}
                <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid var(--color-border)" }}>
                    <div className="container" style={{ textAlign: "center" }}>
                        <h2 style={{ marginBottom: "0.75rem" }}>¿Cómo me preparo?</h2>
                        <p style={{ marginBottom: "3rem", maxWidth: "520px", margin: "0 auto 3rem" }}>
                            Un camino claro para entrar a tu preparatoria ideal
                        </p>
                        <div className="grid-3" style={{ maxWidth: "900px", margin: "0 auto" }}>
                            {[
                                { num: "1", icon: "🩺", title: "Haz el diagnóstico", desc: "40 preguntas que identifican tus puntos fuertes y débiles en 20 minutos." },
                                { num: "2", icon: "📅", title: "Sigue tu plan", desc: "Recibe un plan de estudio personalizado semana a semana basado en tu diagnóstico." },
                                { num: "3", icon: "⏱️", title: "Practica el simulacro", desc: "128 preguntas cronometradas. Al terminar ves en qué planteles habrías quedado." },
                            ].map((paso) => (
                                <div key={paso.num} className="card" style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            background: "rgba(251,191,36,0.1)",
                                            border: "1px solid rgba(251,191,36,0.3)",
                                            color: "#fbbf24",
                                            fontWeight: 800,
                                            fontSize: "1.125rem",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 1rem",
                                        }}
                                    >
                                        {paso.num}
                                    </div>
                                    <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{paso.icon}</div>
                                    <h3 style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}>{paso.title}</h3>
                                    <p style={{ fontSize: "0.9rem" }}>{paso.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ====== BLOG DESTACADO ====== */}
                <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid var(--color-border)", background: "rgba(245,158,11,0.03)" }}>
                    <div className="container" style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "0.875rem", color: "#fbbf24", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>📰 Blog</p>
                        <h2 style={{ marginBottom: "0.75rem" }}>Guías y consejos gratuitos</h2>
                        <p style={{ marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
                            Artículos con puntajes históricos, planes de estudio y tips para el COMIPEMS.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto 2rem" }}>
                            {BLOG_POSTS.slice(0, 3).map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                                    <div className="card" style={{ textAlign: "left", height: "100%" }}>
                                        <div style={{ fontSize: "0.75rem", color: "#fbbf24", fontWeight: 600, marginBottom: "0.5rem" }}>
                                            {post.tiempoLectura} min de lectura
                                        </div>
                                        <div style={{ fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.4 }}>{post.titulo}</div>
                                        <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                                            {post.descripcionSeo.slice(0, 80)}...
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="/blog" className="btn btn-ghost">Ver todos los artículos →</Link>
                    </div>
                </section>

                {/* ====== FOOTER ====== */}
                <footer
                    style={{
                        borderTop: "1px solid var(--color-border)",
                        padding: "2.5rem 1.5rem",
                        textAlign: "center",
                    }}
                >
                    <div className="container">
                        <p style={{ color: "var(--color-text-dim)", fontSize: "0.875rem" }}>
                            prepa.chispito.mx — Portal educativo gratuito de{" "}
                            <a href="https://chispito.mx" style={{ color: "#f59e0b" }}>
                                Chispito.mx
                            </a>
                            . Los datos de puntajes son referenciales basados en convocatorias anteriores.
                        </p>
                    </div>
                </footer>
            </main>
        </>
    );
}
