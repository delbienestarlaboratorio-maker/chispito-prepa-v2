import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLANTELES_ECOEMS } from "@/data/schools";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return PLANTELES_ECOEMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const plantel = PLANTELES_ECOEMS.find((p) => p.slug === slug);
    if (!plantel) return { title: "Institución no encontrada" };
    return {
        title: `${plantel.nombre} — Requisitos, inscripción y proceso 2025`,
        description: `Guía completa de ${plantel.nombre.split(" — ")[0]}. Proceso de inscripción ECOEMS 2025, requisitos y qué esperar del bachillerato sin examen.`,
        keywords: [plantel.nombre, "ECOEMS 2025", "bachillerato sin examen", "inscripción bachillerato"],
    };
}

export default async function EcoemsEscuelaPage({ params }: Props) {
    const { slug } = await params;
    const plantel = PLANTELES_ECOEMS.find((p) => p.slug === slug);
    if (!plantel) notFound();

    const otros = PLANTELES_ECOEMS.filter((p) => p.id !== plantel.id);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ecoems" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← Sin Examen
                    </Link>
                    <span style={{ fontWeight: 700, color: "#34d399" }}>📚 ECOEMS</span>
                    <a
                        href="https://miderechomilugar.sep.gob.mx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ecoems"
                        style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}
                    >
                        Registrarme →
                    </a>
                </div>
            </nav>

            <div className="page-ecoems" style={{ paddingTop: "var(--nav-height)" }}>
                {/* HERO */}
                <section
                    style={{
                        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(5,150,105,0.25) 0%, transparent 70%), var(--color-bg)",
                        padding: "3.5rem 1.5rem 2.5rem",
                        borderBottom: "1px solid rgba(5,150,105,0.15)",
                    }}
                >
                    <div className="container" style={{ maxWidth: "860px" }}>
                        <div
                            style={{
                                display: "inline-flex",
                                gap: "0.5rem",
                                background: "rgba(5,150,105,0.12)",
                                border: "1px solid rgba(52,211,153,0.25)",
                                borderRadius: "999px",
                                padding: "0.3rem 0.875rem",
                                fontSize: "0.8125rem",
                                color: "#34d399",
                                marginBottom: "1.25rem",
                                fontWeight: 500,
                            }}
                        >
                            📚 Sin examen · ECOEMS
                        </div>

                        <h1 style={{ marginBottom: "0.625rem", fontSize: "clamp(1.625rem, 4vw, 2.25rem)" }}>
                            {plantel.nombre.split(" — ")[0]}
                        </h1>

                        <p style={{ maxWidth: "700px", fontSize: "1rem", marginBottom: "1.75rem" }}>
                            {plantel.descripcion}
                        </p>

                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            {[
                                { icon: "📍", label: "Ubicación", value: plantel.zona },
                                { icon: "🎓", label: "Duración", value: plantel.duracion },
                                { icon: "✅", label: "Examen", value: "Sin examen" },
                                { icon: "💰", label: "Costo inscripción", value: "Gratuito" },
                            ].map((d) => (
                                <div
                                    key={d.label}
                                    style={{
                                        background: "rgba(5,150,105,0.1)",
                                        border: "1px solid rgba(5,150,105,0.2)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.75rem 1rem",
                                    }}
                                >
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                                        {d.icon} {d.label}
                                    </div>
                                    <div style={{ fontWeight: 700, color: "#6ee7b7", fontSize: "0.9375rem" }}>{d.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container" style={{ maxWidth: "860px", padding: "2.5rem 1.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                        {/* Carreras técnicas si aplica */}
                        {plantel.carrerasTecnicas && plantel.carrerasTecnicas.length > 0 && (
                            <div className="card">
                                <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#34d399" }}>
                                    🛠️ Carreras técnicas
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {plantel.carrerasTecnicas.map((c) => (
                                        <div
                                            key={c}
                                            style={{
                                                padding: "0.5rem 0.875rem",
                                                background: "rgba(5,150,105,0.08)",
                                                border: "1px solid rgba(5,150,105,0.15)",
                                                borderRadius: "var(--radius-sm)",
                                                fontSize: "0.875rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            ✓ {c}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Proceso de inscripción ECOEMS */}
                        <div className="card">
                            <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#34d399" }}>
                                📋 Proceso ECOEMS 2025
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                {[
                                    { n: "1", t: "Regístrate en miderechomilugar.sep.gob.mx", d: "Necesitas tu CURP y datos de secundaria. Elige hasta 6 instituciones en orden de preferencia." },
                                    { n: "2", t: "Espera la asignación", d: "El sistema asigna según tu promedio de secundaria y disponibilidad de lugares." },
                                    { n: "3", t: "Acepta e inscríbete", d: "Si te asignaron un lugar, acéptalo en el portal y preséntate a inscribir en la institución." },
                                ].map((paso) => (
                                    <div key={paso.n} style={{ display: "flex", gap: "0.875rem" }}>
                                        <div
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                background: "rgba(5,150,105,0.2)",
                                                border: "1px solid rgba(52,211,153,0.3)",
                                                color: "#34d399",
                                                fontWeight: 800,
                                                fontSize: "0.8125rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                marginTop: "2px",
                                            }}
                                        >
                                            {paso.n}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{paso.t}</div>
                                            <p style={{ fontSize: "0.8125rem", margin: 0 }}>{paso.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="https://miderechomilugar.sep.gob.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ecoems"
                                style={{ marginTop: "1.25rem", width: "100%", justifyContent: "center" }}
                            >
                                🌐 Ir al portal oficial →
                            </a>
                        </div>
                    </div>

                    {/* Otras opciones sin examen */}
                    <div style={{ marginTop: "2.5rem" }}>
                        <h3 style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                            Otras opciones sin examen
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
                            {otros.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/ecoems/escuelas/${p.slug}`}
                                    style={{
                                        background: "var(--color-bg-card)",
                                        border: "1px solid rgba(5,150,105,0.15)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.875rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    <div style={{ fontWeight: 700, color: "#34d399", fontSize: "0.9375rem" }}>
                                        {p.nombre.split(" — ")[0].replace("CONALEP — ", "CONALEP").split(" (")[0]}
                                    </div>
                                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                                        {p.zona}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
