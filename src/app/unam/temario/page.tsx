import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Temario UNAM CCH y ENP 2025 — Las 10 materias del examen | prepa.chispito.mx",
    description: "Temario completo del examen de admisión a la UNAM. Las 10 materias con sus temas más frecuentes: Matemáticas, Español, Historia, Geografía, Biología, Física, Química y más.",
};

const MATERIAS = [
    {
        id: "hab-verbal",
        emoji: "📝",
        nombre: "Habilidad Verbal",
        preguntas: 20,
        temas: ["Sinónimos y antónimos", "Analogías verbales", "Comprensión de lectura", "Ortografía y redacción", "Significado de palabras en contexto"],
        tip: "Es la materia con más preguntas. Enfócate en analogías y comprensión lectora.",
    },
    {
        id: "hab-mat",
        emoji: "🔢",
        nombre: "Habilidad Matemática",
        preguntas: 20,
        temas: ["Series numéricas", "Razonamiento lógico", "Problemas de proporción", "Operaciones básicas rápidas", "Figuras y patrones geométricos"],
        tip: "Practica series y analogías numéricas con tiempo limitado.",
    },
    {
        id: "matematicas",
        emoji: "📐",
        nombre: "Matemáticas",
        preguntas: 20,
        temas: ["Álgebra: ecuaciones lineales y cuadráticas", "Geometría: áreas y perímetros", "Trigonometría básica", "Funciones y gráficas", "Estadística básica y probabilidad"],
        tip: "Repasa ecuaciones de segundo grado y resolución de triángulos.",
    },
    {
        id: "espanol",
        emoji: "📖",
        nombre: "Español",
        preguntas: 15,
        temas: ["Literatura: géneros y corrientes", "Gramática: sustantivos, verbos, adjetivos", "Ortografía: acentuación y puntuación", "Comprensión e interpretación de textos", "Redacción y coherencia textual"],
        tip: "Estudia los géneros literarios y las reglas de acentuación.",
    },
    {
        id: "historia",
        emoji: "🏛️",
        nombre: "Historia de México y Universal",
        preguntas: 13,
        temas: ["Civilizaciones mesoamericanas (Aztecas, Mayas, Olmecas)", "Conquista y Colonia", "Independencia de México (1810-1821)", "Revolución Mexicana (1910-1920)", "Historia universal: RR. Mundial, Guerra Fría"],
        tip: "Memoriza fechas clave y causas de los movimientos históricos.",
    },
    {
        id: "geografia",
        emoji: "🌎",
        nombre: "Geografía",
        preguntas: 10,
        temas: ["Regiones naturales de México", "Coordenadas geográficas", "Tipos de climas de México", "Principales ríos y montañas", "Recursos naturales y economía por región"],
        tip: "Estudia los mapas de climas y regiones de México principalmente.",
    },
    {
        id: "formacion",
        emoji: "⚖️",
        nombre: "Formación Cívica y Ética",
        preguntas: 10,
        temas: ["Derechos humanos y garantías individuales", "Constitución Política de México", "Democracia y ciudadanía", "Instituciones del Estado mexicano", "Valores y ética social"],
        tip: "Enfócate en los artículos principales de la Constitución.",
    },
    {
        id: "biologia",
        emoji: "🧬",
        nombre: "Biología",
        preguntas: 10,
        temas: ["La célula: tipos y funciones", "Sistemas del cuerpo humano", "Genética: leyes de Mendel", "Ecosistemas y cadena alimentaria", "Reproducción y evolución"],
        tip: "Los sistemas del cuerpo humano y la célula son los más frecuentes.",
    },
    {
        id: "fisica",
        emoji: "⚡",
        nombre: "Física",
        preguntas: 5,
        temas: ["Cinemática: velocidad, aceleración", "Dinámica: Leyes de Newton", "Energía y trabajo", "Ondas y sonido", "Electricidad básica"],
        tip: "Practica resolver problemas con las fórmulas de velocidad y fuerza.",
    },
    {
        id: "quimica",
        emoji: "🧪",
        nombre: "Química",
        preguntas: 5,
        temas: ["Tabla periódica: grupos y propiedades", "Reacciones químicas y balanceo", "Soluciones: concentración y pH", "Enlace químico (iónico y covalente)", "Hidrocarburos básicos"],
        tip: "Estudia la tabla periódica por grupos: metales alcalinos, halógenos, etc.",
    },
];

export default function TemarioUnam() {
    const total = MATERIAS.reduce((acc, m) => acc + m.preguntas, 0);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← UNAM</Link>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>📚 Temario del Examen</span>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-unam" style={{ paddingTop: "var(--nav-height)" }}>
                <section
                    style={{
                        background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,74,147,0.2) 0%, transparent 60%), var(--color-bg)",
                        padding: "3rem 1.5rem 2rem",
                        textAlign: "center",
                        borderBottom: "1px solid rgba(0,102,204,0.15)",
                    }}
                >
                    <div className="container">
                        <h1 style={{ marginBottom: "0.75rem" }}>Temario — Examen UNAM 2025</h1>
                        <p style={{ marginBottom: "1.5rem" }}>
                            {total} preguntas · 10 materias · 3 horas para contestarlo
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                            {MATERIAS.map((m) => (
                                <a
                                    key={m.id}
                                    href={`#${m.id}`}
                                    style={{
                                        background: "rgba(0,74,147,0.15)",
                                        border: "1px solid rgba(56,189,248,0.2)",
                                        borderRadius: "999px",
                                        padding: "0.3rem 0.875rem",
                                        fontSize: "0.8125rem",
                                        color: "#93c5fd",
                                        fontWeight: 500,
                                    }}
                                >
                                    {m.emoji} {m.nombre} ({m.preguntas})
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container" style={{ maxWidth: "860px", padding: "2.5rem 1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {MATERIAS.map((m) => (
                            <div
                                key={m.id}
                                id={m.id}
                                className="card"
                                style={{ borderColor: "rgba(0,102,204,0.15)" }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <span style={{ fontSize: "1.75rem" }}>{m.emoji}</span>
                                        <div>
                                            <h2 style={{ fontSize: "1.125rem", margin: 0 }}>{m.nombre}</h2>
                                            <span style={{ color: "#38bdf8", fontSize: "0.875rem", fontWeight: 600 }}>
                                                {m.preguntas} preguntas
                                            </span>
                                        </div>
                                    </div>
                                    {/* Barra de peso */}
                                    <div style={{ textAlign: "right", minWidth: "80px" }}>
                                        <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.375rem" }}>
                                            {Math.round((m.preguntas / total) * 100)}% del examen
                                        </div>
                                        <div className="xp-bar" style={{ width: "80px" }}>
                                            <div
                                                className="xp-bar-fill"
                                                style={{
                                                    width: `${Math.round((m.preguntas / total) * 100)}%`,
                                                    background: "linear-gradient(90deg, #0066cc, #38bdf8)",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                                    {m.temas.map((t) => (
                                        <div
                                            key={t}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "0.5rem",
                                                fontSize: "0.875rem",
                                                color: "var(--color-text-muted)",
                                            }}
                                        >
                                            <span style={{ color: "#38bdf8", marginTop: "2px", flexShrink: 0 }}>·</span>
                                            {t}
                                        </div>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        background: "rgba(251,191,36,0.08)",
                                        border: "1px solid rgba(251,191,36,0.2)",
                                        borderRadius: "var(--radius-sm)",
                                        padding: "0.625rem 0.875rem",
                                        fontSize: "0.8125rem",
                                        color: "#fbbf24",
                                    }}
                                >
                                    💡 Tip: {m.tip}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/unam/simulador" className="btn btn-unam">
                            ⏱️ Practicar con el Simulacro →
                        </Link>
                        <Link href="/unam/flashcards" className="btn btn-ghost">
                            🧠 Repasar con Flashcards
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
