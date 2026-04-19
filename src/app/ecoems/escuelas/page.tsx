import type { Metadata } from "next";
import Link from "next/link";
import { PLANTELES_ECOEMS, type Plantel } from "@/data/schools";

export const metadata: Metadata = {
    title: "Escuelas ECOEMS 2025: COLBACH, CONALEP, CBTis y más | prepa.chispito.mx",
    description: "Catálogo de todas las instituciones del sistema ECOEMS-SEP disponibles para bachillerato sin examen en 2025. COLBACH, CONALEP, CBTis, IEMS, Prepa en Línea y Prepa Abierta.",
};

const CATEGORIAS = [
    { key: "colbach", label: "COLBACH", emoji: "🏛️", color: "#059669", desc: "Colegio de Bachilleres" },
    { key: "conalep", label: "CONALEP", emoji: "⚙️", color: "#0284c7", desc: "Bachillerato técnico federal" },
    { key: "cbtis", label: "CBTis / CETis", emoji: "🔧", color: "#7c3aed", desc: "Bachillerato tecnológico" },
    { key: "iems", label: "IEMS CDMX", emoji: "🌆", color: "#b45309", desc: "Instituto de Educación Media Superior" },
    { key: "prepa-linea", label: "Prepa en Línea", emoji: "💻", color: "#0891b2", desc: "100% en línea – gratuita" },
    { key: "prepa-abierta", label: "Prepa Abierta", emoji: "📖", color: "#7c3aed", desc: "Horario flexible" },
];

export default function EcoemsEscuelasPage() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ecoems" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← ECOEMS
                    </Link>
                    <span style={{ fontWeight: 700, color: "var(--ecoems-accent)" }}>🏫 Escuelas</span>
                    <Link href="/ecoems/como-funciona" className="btn btn-ecoems"
                        style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        ¿Cómo funciona? →
                    </Link>
                </div>
            </nav>

            <div style={{ paddingTop: "var(--nav-height)", background: "var(--color-bg)", minHeight: "100vh" }}>
                {/* Hero */}
                <section style={{
                    padding: "3.5rem 1.5rem 2.5rem",
                    borderBottom: "1px solid var(--color-border)",
                    background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(5,150,105,0.15) 0%, transparent 60%)",
                    textAlign: "center",
                }}>
                    <p style={{ fontSize: "0.875rem", color: "var(--ecoems-accent)", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        📋 Sistema ECOEMS – SEP
                    </p>
                    <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
                        Instituciones de bachillerato disponibles
                    </h1>
                    <p style={{ maxWidth: "560px", margin: "0 auto", fontSize: "1.0625rem" }}>
                        {PLANTELES_ECOEMS.length} opciones para estudiar bachillerato sin examen de admisión en 2025.
                        Asignación por promedio de secundaria.
                    </p>
                </section>

                {/* Grid por categoría */}
                <div className="container" style={{ maxWidth: "1080px", padding: "2.5rem 1.5rem" }}>
                    {CATEGORIAS.map(({ key, label, emoji, color, desc }) => {
                        const escuelas = PLANTELES_ECOEMS.filter((e: Plantel) =>
                            e.slug.startsWith(key) || e.institucion === key || e.institucion === key.replace("-", "")
                        );

                        return (
                            <div key={key} style={{ marginBottom: "2.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <span style={{ fontSize: "1.5rem" }}>{emoji}</span>
                                    <div>
                                        <h2 style={{ fontSize: "1.125rem", marginBottom: "0.125rem" }}>{label}</h2>
                                        <p style={{ fontSize: "0.85rem", color: "var(--color-text-dim)", margin: 0 }}>{desc}</p>
                                    </div>
                                </div>

                                {escuelas.length > 0 ? (
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                                        gap: "0.875rem",
                                    }}>
                                        {escuelas.map((e) => (
                                            <Link key={e.slug} href={`/ecoems/escuelas/${e.slug}`} style={{ textDecoration: "none" }}>
                                                <div className="card" style={{
                                                    padding: "1.1rem 1.25rem",
                                                    borderLeft: `3px solid ${color}`,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.375rem",
                                                }}>
                                                    <span style={{ fontWeight: 700, fontSize: "0.9375rem" }}>{e.nombre}</span>
                                                    {e.zona && (
                                                        <span style={{ fontSize: "0.8rem", color: "var(--color-text-dim)" }}>
                                                            📍 {e.zona}
                                                        </span>
                                                    )}
                                                    <span style={{
                                                        fontSize: "0.75rem",
                                                        color,
                                                        fontWeight: 600,
                                                        background: `${color}18`,
                                                        borderRadius: "999px",
                                                        padding: "0.15rem 0.5rem",
                                                        alignSelf: "flex-start",
                                                    }}>
                                                        Sin examen →
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    // Fallback si no hay datos filtrados: muestra card genérica
                                    <div className="card" style={{
                                        padding: "1.5rem",
                                        borderLeft: `3px solid ${color}`,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        gap: "1rem",
                                    }}>
                                        <div>
                                            <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{label}</div>
                                            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>{desc} · Disponible vía ECOEMS</div>
                                        </div>
                                        <Link href="/ecoems/como-funciona" className="btn btn-ecoems"
                                            style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>
                                            Cómo inscribirse →
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* CTA inferior */}
                    <div style={{
                        background: "linear-gradient(135deg, rgba(5,150,105,0.1), rgba(5,150,105,0.05))",
                        border: "1px solid rgba(52,211,153,0.2)",
                        borderRadius: "var(--radius-xl)",
                        padding: "2rem",
                        textAlign: "center",
                        marginTop: "1rem",
                    }}>
                        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📋</div>
                        <h3 style={{ marginBottom: "0.5rem" }}>¿Cómo me registro en ECOEMS?</h3>
                        <p style={{ marginBottom: "1.5rem", maxWidth: "480px", margin: "0 auto 1.5rem" }}>
                            El proceso es 100% en línea y gratuito. Solo necesitas tu CURP y datos de secundaria.
                        </p>
                        <Link href="/ecoems/como-funciona" className="btn btn-ecoems">
                            Ver guía completa →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
