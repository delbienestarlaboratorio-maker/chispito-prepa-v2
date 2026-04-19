import type { Metadata } from "next";
import Link from "next/link";
import { PLANTELES_CCH, PLANTELES_ENP } from "@/data/schools";
import { getPuntajeMinimo } from "@/data/scores";
import { GamificationWidget } from "@/components/GamificationWidget";

export const metadata: Metadata = {
    title: "Prepárate para la UNAM — CCH y ENP | Examen de admisión bachillerato 2025",
    description:
        "Todo lo que necesitas para entrar al CCH o ENP de la UNAM. Simulacro de 128 preguntas, calculadora de aciertos con puntajes reales, temario completo y diagnóstico personalizado. Gratis.",
    keywords: ["examen CCH", "examen ENP UNAM", "cuántos aciertos necesito CCH", "puntaje mínimo ENP 2025", "simulacro UNAM bachillerato gratis"],
};

const NAV_ITEMS = [
    { href: "/unam/simulador", label: "⏱️ Simulacro" },
    { href: "/unam/diagnostico", label: "🩺 Diagnóstico" },
    { href: "/unam/temario", label: "📚 Temario" },
    { href: "/unam/escuelas", label: "🏫 Planteles" },
    { href: "/unam/calculadora", label: "🧮 Calculadora" },
    { href: "/unam/flashcards", label: "🧠 Flashcards" },
];

export default function UnamPage() {
    const cchConPuntaje = PLANTELES_CCH.map((p) => ({
        ...p,
        minimo: getPuntajeMinimo(p.id),
    })).sort((a, b) => (b.minimo ?? 0) - (a.minimo ?? 0));

    const enpConPuntaje = PLANTELES_ENP.map((p) => ({
        ...p,
        minimo: getPuntajeMinimo(p.id),
    })).sort((a, b) => (b.minimo ?? 0) - (a.minimo ?? 0));

    return (
        <>
            {/* NAVBAR UNAM */}
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← Inicio
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#38bdf8" }}>🏛️ UNAM</span>
                        <span style={{ color: "var(--color-text-dim)", fontSize: "0.875rem" }}> — CCH & ENP</span>
                    </div>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-unam" style={{ paddingTop: "var(--nav-height)" }}>
                {/* HERO UNAM */}
                <section
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,74,147,0.35) 0%, transparent 70%), var(--color-bg)",
                        padding: "4rem 1.5rem 3rem",
                        textAlign: "center",
                        borderBottom: "1px solid rgba(0,102,204,0.2)",
                    }}
                >
                    <div className="container">
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(0,102,204,0.15)",
                                border: "1px solid rgba(56,189,248,0.3)",
                                borderRadius: "999px",
                                padding: "0.375rem 1rem",
                                fontSize: "0.875rem",
                                color: "#38bdf8",
                                marginBottom: "1.5rem",
                                fontWeight: 500,
                            }}
                        >
                            🏛️ Sección UNAM — CCH y Escuela Nacional Preparatoria
                        </div>

                        <div style={{ marginBottom: "2.5rem" }}>
                            <GamificationWidget />
                        </div>

                        <h1 style={{ marginBottom: "1rem" }}>
                            Entra al CCH o ENP —
                            <br />
                            <span style={{ color: "#38bdf8" }}>sin pagar nada</span>
                        </h1>

                        <p style={{ maxWidth: "600px", margin: "0 auto 2.5rem", fontSize: "1.0625rem" }}>
                            14 planteles. Puntajes reales 2022-2024. Simulacro de 128 preguntas cronometrado.
                            Diagnóstico personalizado. Todo gratis.
                        </p>

                        {/* Nav de herramientas */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    style={{
                                        background: "rgba(0,74,147,0.25)",
                                        border: "1px solid rgba(0,102,204,0.4)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.625rem 1.125rem",
                                        color: "#bfdbfe",
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

                {/* PUNTAJES MÍNIMOS — dato clave */}
                <section style={{ padding: "4rem 1.5rem" }}>
                    <div className="container">
                        <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                            ¿Cuántos aciertos necesitas?
                        </h2>
                        <p style={{ textAlign: "center", marginBottom: "2.5rem", color: "var(--color-text-muted)" }}>
                            Puntajes mínimos verificados — examen 2024 de 128 preguntas
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
                            {/* CCH */}
                            <div>
                                <h3 style={{ color: "#38bdf8", marginBottom: "1rem", fontSize: "1.125rem" }}>
                                    🏫 CCH — Colegio de Ciencias y Humanidades
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    {cchConPuntaje.map((p) => {
                                        const pct = p.minimo ? Math.round((p.minimo / 128) * 100) : 0;
                                        return (
                                            <Link
                                                key={p.id}
                                                href={`/unam/escuelas/${p.slug}`}
                                                style={{ textDecoration: "none" }}
                                            >
                                                <div
                                                    style={{
                                                        background: "var(--color-bg-card)",
                                                        border: "1px solid var(--color-border)",
                                                        borderRadius: "var(--radius-md)",
                                                        padding: "0.875rem 1rem",
                                                        transition: "all 0.2s ease",
                                                    }}
                                                >
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                                                        <span style={{ fontWeight: 600, fontSize: "0.9375rem" }}>
                                                            {p.nombre.replace("CCH ", "")}
                                                        </span>
                                                        <span style={{ fontWeight: 800, color: "#38bdf8", fontSize: "1.125rem" }}>
                                                            {p.minimo ?? "N/D"}/128
                                                        </span>
                                                    </div>
                                                    {/* Barra de progreso */}
                                                    <div className="xp-bar">
                                                        <div
                                                            className="xp-bar-fill"
                                                            style={{
                                                                width: `${pct}%`,
                                                                background: "linear-gradient(90deg, #0066cc, #38bdf8)",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ENP */}
                            <div>
                                <h3 style={{ color: "#f59e0b", marginBottom: "1rem", fontSize: "1.125rem" }}>
                                    🏛️ ENP — Escuela Nacional Preparatoria
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    {enpConPuntaje.map((p) => {
                                        const pct = p.minimo ? Math.round((p.minimo / 128) * 100) : 0;
                                        const color = pct >= 84 ? "#f87171" : pct >= 78 ? "#fbbf24" : "#34d399";
                                        return (
                                            <Link
                                                key={p.id}
                                                href={`/unam/escuelas/${p.slug}`}
                                                style={{ textDecoration: "none" }}
                                            >
                                                <div
                                                    style={{
                                                        background: "var(--color-bg-card)",
                                                        border: "1px solid var(--color-border)",
                                                        borderRadius: "var(--radius-md)",
                                                        padding: "0.875rem 1rem",
                                                        transition: "all 0.2s ease",
                                                    }}
                                                >
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                                                        <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                                                            {p.nombre.replace(/".*"/, "").trim()}
                                                            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
                                                                {" "}{p.nombreHistorico}
                                                            </span>
                                                        </span>
                                                        <span style={{ fontWeight: 800, color, fontSize: "1.0625rem", whiteSpace: "nowrap" }}>
                                                            {p.minimo ?? "N/D"}/128
                                                        </span>
                                                    </div>
                                                    <div className="xp-bar">
                                                        <div
                                                            className="xp-bar-fill"
                                                            style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }}
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <Link href="/unam/calculadora" className="btn btn-unam">
                                🧮 Ver calculadora completa de puntajes →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA SIMULACRO */}
                <section
                    style={{
                        background: "linear-gradient(135deg, #001a38 0%, #003e7a 100%)",
                        padding: "4rem 1.5rem",
                        textAlign: "center",
                        borderTop: "1px solid rgba(0,102,204,0.2)",
                        borderBottom: "1px solid rgba(0,102,204,0.2)",
                    }}
                >
                    <div className="container">
                        <h2 style={{ marginBottom: "1rem" }}>Pon a prueba tu nivel ahora</h2>
                        <p style={{ marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                            128 preguntas · Cronometrado 3 horas · Con resultado y semáforo de planteles
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/unam/simulador" className="btn btn-unam" style={{ fontSize: "1.0625rem", padding: "0.875rem 2rem" }}>
                                ⏱️ Empezar Simulacro Completo
                            </Link>
                            <Link href="/unam/diagnostico" className="btn btn-ghost">
                                🩺 Hacer Diagnóstico (20 min)
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ padding: "2rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--color-border)" }}>
                    <div className="container">
                        <p style={{ color: "var(--color-text-dim)", fontSize: "0.8125rem" }}>
                            Los puntajes mínimos mostrados son históricos (2024) y pueden variar cada año según la demanda.{" "}
                            <a href="https://www.unam.mx" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
                                unam.mx
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
