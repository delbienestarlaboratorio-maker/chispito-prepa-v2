import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Diagnóstico de Conocimientos UNAM — CCH y ENP | prepa.chispito.mx",
    description: "Haz el diagnóstico de 40 preguntas y descubre tus materias más débiles para el examen de la UNAM. Completamente gratis.",
};

export default function DiagnosticoUnam() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← UNAM</Link>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>🩺 Diagnóstico</span>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Simulacro completo →
                    </Link>
                </div>
            </nav>

            <div className="page-unam" style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
                <div style={{ maxWidth: "740px", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1.25rem", animationName: "float", animationDuration: "3s", animationIterationCount: "infinite", display: "inline-block" }}>🩺</div>
                    <h1 style={{ marginBottom: "1rem" }}>Diagnóstico de conocimientos</h1>
                    <p style={{ fontSize: "1.0625rem", marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
                        40 preguntas rápidas (20 min) para identificar tus materias más débiles antes del examen.
                        Al terminar recibes un plan de estudio personalizado.
                    </p>

                    <div className="card" style={{ marginBottom: "2.5rem", textAlign: "left", maxWidth: "540px", margin: "0 auto 2.5rem" }}>
                        <h3 style={{ marginBottom: "1rem", color: "#38bdf8" }}>¿Cómo funciona?</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                            {[
                                { n: "1", t: "Responde 40 preguntas", d: "4 preguntas por materia, distribuidas de forma similar al examen real." },
                                { n: "2", t: "Ve tus áreas débiles", d: "Al terminar ves exactamente en qué materias estás más bajo." },
                                { n: "3", t: "Recibe tu plan", d: "Te recomendamos qué materias estudiar primero según tus resultados." },
                            ].map((p) => (
                                <div key={p.n} style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(0,74,147,0.2)", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        {p.n}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: "0.9375rem" }}>{p.t}</div>
                                        <p style={{ fontSize: "0.875rem", margin: 0 }}>{p.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA — por ahora redirige al simulacro principal */}
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}>
                        🩺 Empezar Diagnóstico (próximamente)
                    </Link>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginTop: "1.25rem" }}>
                        Mientras tanto, puedes usar el{" "}
                        <Link href="/unam/simulador" style={{ color: "#38bdf8" }}>simulacro completo de 128 preguntas</Link>
                        {" "}para evaluar tu nivel.
                    </p>

                    {/* Links rápidos */}
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
                        <Link href="/unam/calculadora" className="btn btn-ghost">🧮 Calculadora de puntajes</Link>
                        <Link href="/unam/temario" className="btn btn-ghost">📚 Ver el temario</Link>
                        <Link href="/unam/flashcards" className="btn btn-ghost">🧠 Flashcards</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
