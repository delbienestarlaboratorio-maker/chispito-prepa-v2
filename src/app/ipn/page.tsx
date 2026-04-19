import type { Metadata } from "next";
import Link from "next/link";
import { PLANTELES_CECYT } from "@/data/schools";
import { GamificationWidget } from "@/components/GamificationWidget";

export const metadata: Metadata = {
    title: "Prepárate para el IPN — CECyT | Examen de admisión bachillerato 2025",
    description:
        "Todo lo que necesitas para entrar al CECyT del IPN. Simulacro de 128 preguntas, 19 planteles con especialidades técnicas y guía del proceso de admisión. Gratis.",
    keywords: ["examen CECyT IPN", "examen admisión IPN bachillerato", "CECyT cuántos aciertos", "simulacro IPN gratis"],
};

const NAV_ITEMS = [
    { href: "/ipn/simulador", label: "⏱️ Simulacro" },
    { href: "/ipn/diagnostico", label: "🩺 Diagnóstico" },
    { href: "/ipn/temario", label: "📚 Temario" },
    { href: "/ipn/escuelas", label: "🏫 Planteles" },
    { href: "/ipn/calculadora", label: "🧮 Calculadora" },
];

export default function IpnPage() {
    return (
        <>
            {/* NAVBAR IPN */}
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Inicio</Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#f87171" }}>⚙️ IPN</span>
                        <span style={{ color: "var(--color-text-dim)", fontSize: "0.875rem" }}> — CECyT</span>
                    </div>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-ipn" style={{ paddingTop: "var(--nav-height)" }}>
                {/* HERO IPN */}
                <section
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,40,47,0.3) 0%, transparent 70%), var(--color-bg)",
                        padding: "4rem 1.5rem 3rem",
                        textAlign: "center",
                        borderBottom: "1px solid rgba(200,40,47,0.2)",
                    }}
                >
                    <div className="container">
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(200,40,47,0.15)",
                                border: "1px solid rgba(248,113,113,0.3)",
                                borderRadius: "999px",
                                padding: "0.375rem 1rem",
                                fontSize: "0.875rem",
                                color: "#f87171",
                                marginBottom: "1.5rem",
                                fontWeight: 500,
                            }}
                        >
                            ⚙️ Sección IPN — Centros de Estudios Científicos y Tecnológicos
                        </div>

                        <div style={{ marginBottom: "2.5rem" }}>
                            <GamificationWidget />
                        </div>

                        <h1 style={{ marginBottom: "1rem" }}>
                            Entra al CECyT con
                            <br />
                            <span style={{ color: "#f87171" }}>bachillerato + título técnico</span>
                        </h1>

                        <p style={{ maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.0625rem" }}>
                            El IPN ofrece bachillerato tecnológico: terminas con <strong>título de técnico</strong> y puedes continuar en el IPN.
                            19 planteles en CDMX y Estado de México.
                        </p>

                        {/* Dato clave */}
                        <div
                            style={{
                                display: "inline-flex",
                                gap: "2rem",
                                background: "rgba(200,40,47,0.1)",
                                border: "1px solid rgba(200,40,47,0.25)",
                                borderRadius: "var(--radius-lg)",
                                padding: "1rem 2rem",
                                marginBottom: "2.5rem",
                            }}
                        >
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#f87171" }}>19</div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>Planteles CECyT</div>
                            </div>
                            <div style={{ borderLeft: "1px solid rgba(200,40,47,0.2)", margin: "0 0.5rem" }} />
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#f87171" }}>$525</div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>Costo del examen MXN</div>
                            </div>
                            <div style={{ borderLeft: "1px solid rgba(200,40,47,0.2)", margin: "0 0.5rem" }} />
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#f87171" }}>3 años</div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>+ Título técnico</div>
                            </div>
                        </div>

                        {/* Nav de herramientas */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    style={{
                                        background: "rgba(200,40,47,0.15)",
                                        border: "1px solid rgba(248,113,113,0.3)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.625rem 1.125rem",
                                        color: "#fca5a5",
                                        fontWeight: 600,
                                        fontSize: "0.9375rem",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PLANTELES */}
                <section style={{ padding: "3rem 1.5rem" }}>
                    <div className="container">
                        <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>19 Planteles CECyT</h2>
                        <p style={{ textAlign: "center", marginBottom: "2rem", color: "var(--color-text-muted)" }}>
                            Haz click en cualquier plantel para ver sus especialidades técnicas y proceso de inscripción
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.875rem" }}>
                            {PLANTELES_CECYT.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/ipn/escuelas/${p.slug}`}
                                    style={{
                                        background: "var(--color-bg-card)",
                                        border: "1px solid rgba(200,40,47,0.2)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "1rem",
                                        textDecoration: "none",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <div style={{ fontWeight: 800, fontSize: "1.125rem", color: "#f87171" }}>
                                        CECyT {p.numero}
                                    </div>
                                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem", marginTop: "0.25rem", lineHeight: 1.4 }}>
                                        {p.nombreHistorico}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    style={{
                        background: "linear-gradient(135deg, #2d0a0a 0%, #7f1d1d 100%)",
                        padding: "3.5rem 1.5rem",
                        textAlign: "center",
                        borderTop: "1px solid rgba(200,40,47,0.2)",
                    }}
                >
                    <div className="container">
                        <h2 style={{ marginBottom: "1rem" }}>Empieza tu preparación ahora</h2>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/ipn/simulador" className="btn btn-ipn" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                                ⏱️ Hacer Simulacro
                            </Link>
                            <Link href="/ipn/diagnostico" className="btn btn-ghost">
                                🩺 Diagnóstico rápido
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
