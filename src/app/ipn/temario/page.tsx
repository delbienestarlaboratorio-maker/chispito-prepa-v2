import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Temario IPN CECyT 2025 — Las 10 materias del examen COMIPEMS | prepa.chispito.mx",
    description: "Temario completo del examen de admisión al IPN. Las mismas 10 materias que el COMIPEMS con los temas más frecuentes y tips de estudio para cada una.",
};

const MATERIAS_IPN = [
    { emoji: "📝", nombre: "Habilidad Verbal", preguntas: 20, desc: "Sinónimos, antónimos, analogías verbales y comprensión de lectura.", tip: "La materia con más peso. Practica analogías tipo A:B :: C:?" },
    { emoji: "🔢", nombre: "Habilidad Matemática", preguntas: 20, desc: "Series numéricas, razonamiento lógico y figuras geométricas.", tip: "Practica series con tiempo limitado: 30 seg por pregunta." },
    { emoji: "📐", nombre: "Matemáticas", preguntas: 20, desc: "Álgebra, geometría, trigonometría, funciones y estadística.", tip: "Estudia más álgebra que geometría (mayor frecuencia histórica)." },
    { emoji: "📖", nombre: "Español", preguntas: 15, desc: "Literatura, gramática, ortografía y comprensión de textos.", tip: "Las preguntas de literatura se centran en géneros y autores mexicanos." },
    { emoji: "🏛️", nombre: "Historia", preguntas: 13, desc: "Historia de México (Aztecas, Independencia, Revolución) y Universal.", tip: "La Revolución Mexicana (1910-1920) es el tema más frecuente." },
    { emoji: "🌎", nombre: "Geografía", preguntas: 10, desc: "Regiones naturales, climas y recursos de México.", tip: "Estudia los mapas de Mexico: ríos, regiones y climas." },
    { emoji: "⚖️", nombre: "F. Cívica y Ética", preguntas: 10, desc: "Constitución, derechos humanos e instituciones del Estado.", tip: "Enfócate en los derechos fundamentales y poderes del Estado." },
    { emoji: "🧬", nombre: "Biología", preguntas: 10, desc: "Célula, sistemas del cuerpo humano, genética y ecosistemas.", tip: "Los sistemas del cuerpo y la célula son los más frecuentes." },
    { emoji: "⚡", nombre: "Física", preguntas: 5, desc: "Cinemática, las Leyes de Newton, energía y electricidad.", tip: "Aprende bien las tres leyes de Newton y sus aplicaciones." },
    { emoji: "🧪", nombre: "Química", preguntas: 5, desc: "Tabla periódica, reacciones químicas y soluciones.", tip: "Estudia los grupos de la tabla periódica y el balanceo de ecuaciones." },
];

export default function TemarioIpn() {
    const total = MATERIAS_IPN.reduce((acc, m) => acc + m.preguntas, 0);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ipn" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← IPN</Link>
                    <span style={{ fontWeight: 700, color: "#f87171" }}>📚 Temario del Examen</span>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-ipn" style={{ paddingTop: "var(--nav-height)" }}>
                <section style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(200,40,47,0.18) 0%, transparent 60%), var(--color-bg)", padding: "3rem 1.5rem 2rem", textAlign: "center", borderBottom: "1px solid rgba(200,40,47,0.12)" }}>
                    <h1 style={{ marginBottom: "0.75rem" }}>Temario — Examen IPN 2025</h1>
                    <p>{total} preguntas · 10 materias · mismo formato que el COMIPEMS</p>
                </section>

                <div className="container" style={{ maxWidth: "820px", padding: "2.5rem 1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        {MATERIAS_IPN.map((m) => {
                            const pct = Math.round((m.preguntas / total) * 100);
                            return (
                                <div key={m.nombre} className="card" style={{ borderColor: "rgba(200,40,47,0.12)" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                            <span style={{ fontSize: "1.625rem" }}>{m.emoji}</span>
                                            <div>
                                                <h2 style={{ fontSize: "1.0625rem", margin: 0 }}>{m.nombre}</h2>
                                                <span style={{ color: "#f87171", fontSize: "0.8125rem", fontWeight: 600 }}>{m.preguntas} preguntas ({pct}%)</span>
                                            </div>
                                        </div>
                                        <div className="xp-bar" style={{ width: "80px", alignSelf: "center" }}>
                                            <div className="xp-bar-fill" style={{ width: `${pct * 2.5}%`, background: "linear-gradient(90deg, #9b1c1c, #f87171)" }} />
                                        </div>
                                    </div>
                                    <p style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>{m.desc}</p>
                                    <div style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: "var(--radius-sm)", padding: "0.5rem 0.875rem", fontSize: "0.8125rem", color: "#fbbf24" }}>
                                        💡 {m.tip}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ textAlign: "center", marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/ipn/simulador" className="btn btn-ipn">⏱️ Practicar con el Simulacro →</Link>
                        <Link href="/ipn/calculadora" className="btn btn-ghost">🧮 Calculadora de puntajes</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
