"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PREGUNTAS = [
    {
        id: 1,
        pregunta: "¿Cuál es tu promedio actual de secundaria?",
        opciones: [
            { label: "9.0 a 10.0 (excelente)", valor: "promedio-alto" },
            { label: "8.0 a 8.9 (bien)", valor: "promedio-medio" },
            { label: "7.0 a 7.9 (regular)", valor: "promedio-bajo" },
            { label: "Menos de 7.0 o no lo sé", valor: "promedio-muy-bajo" },
        ],
    },
    {
        id: 2,
        pregunta: "¿Estás dispuesto a presentar un examen de admisión?",
        opciones: [
            { label: "Sí, quiero prepararme y presentar examen", valor: "con-examen" },
            { label: "Preferiría no presentar examen si es posible", valor: "sin-examen" },
            { label: "No importa, lo que me dé más opciones", valor: "indiferente" },
        ],
    },
    {
        id: 3,
        pregunta: "¿Qué es más importante para ti en el bachillerato?",
        opciones: [
            { label: "Prestigio y pase automático a la universidad (UNAM)", valor: "pase-unam" },
            { label: "Título técnico para trabajar mientras estudio", valor: "tecnico" },
            { label: "Entrar de manera segura y sin tanto estrés", valor: "acceso-seguro" },
            { label: "No sé aún, explorar opciones", valor: "explorar" },
        ],
    },
    {
        id: 4,
        pregunta: "¿En qué zona vives aproximadamente?",
        opciones: [
            { label: "Ciudad de México — norte o poniente", valor: "cdmx-norte" },
            { label: "Ciudad de México — sur o oriente", valor: "cdmx-sur" },
            { label: "Estado de México (Ecatepec, Neza, Tlalnepantla, etc.)", valor: "edomex" },
            { label: "Otra ciudad o estado", valor: "otro" },
        ],
    },
    {
        id: 5,
        pregunta: "¿Cuánto tiempo quieres dedicar a prepararte para el examen?",
        opciones: [
            { label: "Mucho tiempo, quiero estudiar en serio varios meses", valor: "mucho" },
            { label: "Un mes o dos de estudio enfocado", valor: "medio" },
            { label: "Poco tiempo disponible, necesito algo accesible", valor: "poco" },
        ],
    },
];

type Respuesta = Record<number, string>;

function calcularRecomendacion(respuestas: Respuesta): { inst: string; href: string; razon: string; color: string; emoji: string }[] {
    const r = respuestas;
    const recomendaciones = [];

    // UNAM — requiere examen y buen puntaje
    if (r[2] === "con-examen" || r[3] === "pase-unam") {
        recomendaciones.push({
            inst: "UNAM — CCH o ENP",
            href: "/unam",
            razon: "Máximo prestigio y pase reglamentado a cualquier carrera de la UNAM. Requiere preparación seria.",
            color: "#38bdf8",
            emoji: "🏛️",
        });
    }
    // IPN — si quieren título técnico
    if (r[3] === "tecnico" || r[2] === "con-examen") {
        recomendaciones.push({
            inst: "IPN — CECyT",
            href: "/ipn",
            razon: "Sale con título técnico y puede continuar en el IPN. Requiere examen, pero es muy valorado.",
            color: "#f87171",
            emoji: "⚙️",
        });
    }
    // ECOEMS — si quieren acceso seguro o promedio bajo
    if (r[2] === "sin-examen" || r[3] === "acceso-seguro" || r[1] === "promedio-muy-bajo" || r[5] === "poco") {
        recomendaciones.push({
            inst: "Sin Examen — ECOEMS",
            href: "/ecoems",
            razon: "Asignación garantizada por promedio de secundaria. Sin estrés del examen.",
            color: "#34d399",
            emoji: "📚",
        });
    }

    // Si no hay recomendaciones claras, dar las tres
    if (recomendaciones.length === 0) {
        return [
            { inst: "UNAM — CCH o ENP", href: "/unam", razon: "Máximo prestigio, pase reglamentado UNAM.", color: "#38bdf8", emoji: "🏛️" },
            { inst: "IPN — CECyT", href: "/ipn", razon: "Bachillerato tecnológico + título técnico.", color: "#f87171", emoji: "⚙️" },
            { inst: "Sin Examen — ECOEMS", href: "/ecoems", razon: "Acceso garantizado por promedio.", color: "#34d399", emoji: "📚" },
        ];
    }
    return recomendaciones;
}

export default function QuizPage() {
    const [paso, setPaso] = useState(0);
    const [respuestas, setRespuestas] = useState<Respuesta>({});
    const [terminado, setTerminado] = useState(false);

    const preguntaActual = PREGUNTAS[paso];

    const responder = (valor: string) => {
        const nuevas = { ...respuestas, [preguntaActual.id]: valor };
        setRespuestas(nuevas);
        if (paso < PREGUNTAS.length - 1) {
            setPaso(paso + 1);
        } else {
            setTerminado(true);
        }
    };

    const recomendaciones = calcularRecomendacion(respuestas);

    if (terminado) {
        return (
            <div style={{ minHeight: "100vh", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
                <div style={{ maxWidth: "680px", width: "100%" }}>
                    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎯</div>
                        <h1 style={{ marginBottom: "0.75rem" }}>Tu recomendación personalizada</h1>
                        <p>Basado en tus respuestas, estas son las mejores opciones para ti:</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                        {recomendaciones.map((rec, i) => (
                            <Link key={rec.inst} href={rec.href} style={{ textDecoration: "none" }}>
                                <div
                                    style={{
                                        background: "var(--color-bg-card)",
                                        border: `2px solid ${rec.color}44`,
                                        borderRadius: "var(--radius-xl)",
                                        padding: "1.5rem",
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "center",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <div style={{ fontSize: "2.5rem" }}>{rec.emoji}</div>
                                    <div style={{ flex: 1 }}>
                                        {i === 0 && <div style={{ fontSize: "0.75rem", color: rec.color, fontWeight: 700, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>⭐ Mejor opción para ti</div>}
                                        <div style={{ fontWeight: 800, fontSize: "1.1875rem", color: rec.color, marginBottom: "0.375rem" }}>{rec.inst}</div>
                                        <p style={{ fontSize: "0.9rem", margin: 0 }}>{rec.razon}</p>
                                    </div>
                                    <span style={{ color: rec.color, fontWeight: 700 }}>Ver más →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <button
                            onClick={() => { setPaso(0); setRespuestas({}); setTerminado(false); }}
                            className="btn btn-ghost"
                        >
                            🔄 Repetir quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: "100vh", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
            <div style={{ maxWidth: "620px", width: "100%", textAlign: "center" }}>
                {/* Header */}
                <div style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "1.5rem" }}>
                        {PREGUNTAS.map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    height: "4px",
                                    flex: 1,
                                    maxWidth: "60px",
                                    borderRadius: "2px",
                                    background: i <= paso ? "#f59e0b" : "var(--color-border)",
                                    transition: "background 0.3s ease",
                                }}
                            />
                        ))}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
                        Pregunta {paso + 1} de {PREGUNTAS.length}
                    </div>
                    <h1 style={{ fontSize: "clamp(1.375rem, 3.5vw, 2rem)" }}>
                        {preguntaActual.pregunta}
                    </h1>
                </div>

                {/* Opciones */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {preguntaActual.opciones.map((op) => (
                        <button
                            key={op.valor}
                            onClick={() => responder(op.valor)}
                            style={{
                                width: "100%",
                                padding: "1rem 1.25rem",
                                background: "var(--color-bg-card)",
                                border: "2px solid var(--color-border)",
                                borderRadius: "var(--radius-md)",
                                color: "var(--color-text)",
                                fontSize: "1rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f59e0b"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,158,11,0.08)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLButtonElement).style.background = "var(--color-bg-card)"; }}
                        >
                            {op.label}
                        </button>
                    ))}
                </div>

                <div style={{ marginTop: "2rem" }}>
                    <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
