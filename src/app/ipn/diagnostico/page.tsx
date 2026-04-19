import type { Metadata } from "next";
import Link from "next/link";
import { DISTRIBUCION_EXAMEN, NOMBRES_MATERIAS, EMOJIS_MATERIAS, type Materia } from "@/data/questions";

export const metadata: Metadata = {
    title: "Diagnóstico IPN CECyT — Identifica tus materias débiles | prepa.chispito.mx",
    description: "Haz un diagnóstico rápido de 40 preguntas para el examen del IPN. Descubre en qué materias necesitas estudiar más antes del COMIPEMS.",
};

export default function DiagnosticoIpn() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ipn" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← IPN</Link>
                    <span style={{ fontWeight: 700, color: "#f87171" }}>🩺 Diagnóstico</span>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Simulacro completo →
                    </Link>
                </div>
            </nav>

            <div className="page-ipn" style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
                <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1.25rem" }}>🩺</div>
                    <h1 style={{ marginBottom: "1rem" }}>Diagnóstico IPN — CECyT</h1>
                    <p style={{ fontSize: "1.0625rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                        El examen del IPN tiene la misma estructura que el COMIPEMS. Usa este diagnóstico para
                        identificar tus áreas de oportunidad.
                    </p>

                    {/* Peso de materias */}
                    <div className="card" style={{ marginBottom: "2rem", textAlign: "left", maxWidth: "540px", margin: "0 auto 2rem" }}>
                        <h3 style={{ marginBottom: "1rem", color: "#f87171" }}>📊 Peso de materias en el examen</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {(Object.entries(DISTRIBUCION_EXAMEN) as [Materia, number][]).map(([m, n]) => {
                                const pct = Math.round((n / 128) * 100);
                                return (
                                    <div key={m}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                                            <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                                                {EMOJIS_MATERIAS[m]} {NOMBRES_MATERIAS[m]}
                                            </span>
                                            <span style={{ fontWeight: 700, color: "#f87171", fontSize: "0.875rem" }}>{n} preguntas</span>
                                        </div>
                                        <div className="xp-bar">
                                            <div className="xp-bar-fill" style={{ width: `${pct * 2.5}%`, background: "linear-gradient(90deg, #9b1c1c, #f87171)" }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}>
                        ⏱️ Hacer Simulacro Completo
                    </Link>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginTop: "1.25rem" }}>
                        El módulo de diagnóstico rápido (40 preguntas) estará disponible próximamente.
                    </p>

                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.5rem", flexWrap: "wrap" }}>
                        <Link href="/ipn/calculadora" className="btn btn-ghost">🧮 Calculadora CECyT</Link>
                        <Link href="/ipn/temario" className="btn btn-ghost">📚 Ver Temario</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
