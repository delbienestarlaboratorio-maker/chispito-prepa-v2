import type { Metadata } from "next";
import Link from "next/link";
import { PLANTELES_ECOEMS } from "@/data/schools";

export const metadata: Metadata = {
    title: "Sin Examen — ECOEMS 2025 | Colbach, CONALEP, CBTis, IEMS | prepa.chispito.mx",
    description:
        "No presentaste examen o quieres conocer tus opciones de bachillerato sin examen. Guía completa de Colbach, CONALEP, CBTis, IEMS, Prepa en Línea y Prepa Abierta.",
    keywords: ["ECOEMS 2025 sin examen", "Colbach inscripción", "CONALEP bachillerato", "IEMS CDMX", "bachillerato sin examen"],
};

export default function EcoemsPage() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Inicio</Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#34d399" }}>📚 Sin Examen</span>
                        <span style={{ color: "var(--color-text-dim)", fontSize: "0.875rem" }}> — ECOEMS</span>
                    </div>
                    <Link href="/ecoems/como-funciona" className="btn btn-ecoems" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        ¿Cómo funciona? →
                    </Link>
                </div>
            </nav>

            <div className="page-ecoems" style={{ paddingTop: "var(--nav-height)" }}>
                {/* HERO */}
                <section
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(5,150,105,0.3) 0%, transparent 70%), var(--color-bg)",
                        padding: "4rem 1.5rem 3rem",
                        textAlign: "center",
                        borderBottom: "1px solid rgba(5,150,105,0.2)",
                    }}
                >
                    <div className="container">
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(5,150,105,0.15)",
                                border: "1px solid rgba(52,211,153,0.3)",
                                borderRadius: "999px",
                                padding: "0.375rem 1rem",
                                fontSize: "0.875rem",
                                color: "#34d399",
                                marginBottom: "1.5rem",
                                fontWeight: 500,
                            }}
                        >
                            📚 ECOEMS — Asignación directa sin examen
                        </div>

                        <h1 style={{ marginBottom: "1rem" }}>
                            Tu lugar en el bachillerato
                            <br />
                            <span style={{ color: "#34d399" }}>está garantizado</span>
                        </h1>

                        <p style={{ maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.0625rem" }}>
                            El sistema ECOEMS asigna lugares en bachillerato según tu promedio de
                            secundaria y zona geográfica. <strong>Sin examen de admisión.</strong>
                        </p>

                        {/* Estadística */}
                        <div
                            style={{
                                display: "inline-flex",
                                gap: "2rem",
                                background: "rgba(5,150,105,0.1)",
                                border: "1px solid rgba(5,150,105,0.25)",
                                borderRadius: "var(--radius-lg)",
                                padding: "1rem 2rem",
                                marginBottom: "2rem",
                            }}
                        >
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#34d399" }}>Gratis</div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>Sin costo de examen</div>
                            </div>
                            <div style={{ borderLeft: "1px solid rgba(5,150,105,0.2)", margin: "0 0.5rem" }} />
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#34d399" }}>100%</div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>Garantizado</div>
                            </div>
                            <div style={{ borderLeft: "1px solid rgba(5,150,105,0.2)", margin: "0 0.5rem" }} />
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#34d399" }}>1000+</div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>Planteles nacionales</div>
                            </div>
                        </div>

                        <div>
                            <Link href="/ecoems/como-funciona" className="btn btn-ecoems" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                                📋 ¿Cómo funciona el proceso ECOEMS 2025?
                            </Link>
                        </div>
                    </div>
                </section>

                {/* INSTITUCIONES */}
                <section style={{ padding: "3.5rem 1.5rem" }}>
                    <div className="container">
                        <h2 style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                            Instituciones disponibles sin examen
                        </h2>
                        <p style={{ textAlign: "center", marginBottom: "2.5rem", color: "var(--color-text-muted)" }}>
                            Todas las siguientes instituciones forman parte del sistema ECOEMS de asignación directa
                        </p>
                        <div className="grid-2" style={{ maxWidth: "900px", margin: "0 auto" }}>
                            {PLANTELES_ECOEMS.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/ecoems/escuelas/${p.slug}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <div
                                        className="card"
                                        style={{
                                            borderColor: "rgba(5,150,105,0.2)",
                                            height: "100%",
                                        }}
                                    >
                                        <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem", color: "#34d399" }}>
                                            {p.nombre}
                                        </h3>
                                        <p style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>
                                            {p.descripcion.slice(0, 120)}...
                                        </p>
                                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                            <span
                                                style={{
                                                    background: "rgba(5,150,105,0.15)",
                                                    color: "#6ee7b7",
                                                    padding: "0.2rem 0.6rem",
                                                    borderRadius: "999px",
                                                    fontSize: "0.78rem",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {p.zona}
                                            </span>
                                            <span
                                                style={{
                                                    background: "rgba(5,150,105,0.15)",
                                                    color: "#6ee7b7",
                                                    padding: "0.2rem 0.6rem",
                                                    borderRadius: "999px",
                                                    fontSize: "0.78rem",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {p.duracion}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PASOS */}
                <section
                    style={{
                        background: "rgba(5,150,105,0.05)",
                        borderTop: "1px solid rgba(5,150,105,0.15)",
                        borderBottom: "1px solid rgba(5,150,105,0.15)",
                        padding: "3.5rem 1.5rem",
                    }}
                >
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                            ¿Cómo es el proceso?
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                { num: "1", title: "Regístrate en miderechomilugar.gob.mx", desc: "Necesitas tu CURP, datos de tu secundaria y una foto. El registro es gratuito." },
                                { num: "2", title: "Elige hasta 6 opciones de bachillerato", desc: "Puedes elegir cualquier institución ECOEMS en orden de preferencia. Selecciona las que están cerca de tu casa." },
                                { num: "3", title: "Espera la asignación", desc: "El sistema asigna lugares considerando tu promedio de secundaria y la disponibilidad en cada institución." },
                                { num: "4", title: "Acepta tu lugar e inscríbete", desc: "Si fuiste asignado, acepta dentro del plazo y preséntate a inscribir en la institución asignada." },
                            ].map((paso) => (
                                <div
                                    key={paso.num}
                                    style={{
                                        display: "flex",
                                        gap: "1.25rem",
                                        background: "var(--color-bg-card)",
                                        border: "1px solid var(--color-border)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "1.25rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            background: "rgba(5,150,105,0.2)",
                                            border: "2px solid rgba(52,211,153,0.4)",
                                            color: "#34d399",
                                            fontWeight: 800,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {paso.num}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{paso.title}</div>
                                        <p style={{ fontSize: "0.9rem", margin: 0 }}>{paso.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <a
                                href="https://miderechomilugar.sep.gob.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ecoems"
                            >
                                🌐 Ir a miderechomilugar.sep.gob.mx →
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
