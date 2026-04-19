"use client";

import { useState } from "react";
import Link from "next/link";
import { TODOS_LOS_REACTIVOS, NOMBRES_MATERIAS, EMOJIS_MATERIAS, type Materia } from "@/data/questions";

export default function FlashcardsUnam() {
    const reactivos = TODOS_LOS_REACTIVOS.slice(0, 40); // primeros 40 como flashcards
    const [idx, setIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [materia, setMateria] = useState<Materia | "todas">("todas");

    const materias = [...new Set(TODOS_LOS_REACTIVOS.map((r) => r.materia))] as Materia[];

    const filtrados = materia === "todas"
        ? TODOS_LOS_REACTIVOS
        : TODOS_LOS_REACTIVOS.filter((r) => r.materia === materia);

    const actual = filtrados[idx % filtrados.length];

    const siguiente = () => { setFlipped(false); setTimeout(() => setIdx((i) => (i + 1) % filtrados.length), 100); };
    const anterior = () => { setFlipped(false); setTimeout(() => setIdx((i) => (i - 1 + filtrados.length) % filtrados.length), 100); };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← UNAM</Link>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>🧠 Flashcards</span>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-unam" style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
                <div style={{ maxWidth: "680px", margin: "0 auto", padding: "3rem 1.5rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h1 style={{ marginBottom: "0.5rem" }}>🧠 Flashcards de repaso</h1>
                        <p>Haz click en la tarjeta para ver la respuesta correcta</p>
                    </div>

                    {/* Filtro por materia */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
                        <button
                            onClick={() => { setMateria("todas"); setIdx(0); setFlipped(false); }}
                            style={{
                                padding: "0.35rem 0.875rem",
                                borderRadius: "999px",
                                fontSize: "0.8125rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                background: materia === "todas" ? "var(--unam-secondary)" : "transparent",
                                border: materia === "todas" ? "1px solid var(--unam-secondary)" : "1px solid var(--color-border)",
                                color: materia === "todas" ? "white" : "var(--color-text-muted)",
                            }}
                        >
                            Todas
                        </button>
                        {materias.map((m) => (
                            <button
                                key={m}
                                onClick={() => { setMateria(m); setIdx(0); setFlipped(false); }}
                                style={{
                                    padding: "0.35rem 0.875rem",
                                    borderRadius: "999px",
                                    fontSize: "0.8125rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    background: materia === m ? "var(--unam-secondary)" : "transparent",
                                    border: materia === m ? "1px solid var(--unam-secondary)" : "1px solid var(--color-border)",
                                    color: materia === m ? "white" : "var(--color-text-muted)",
                                }}
                            >
                                {EMOJIS_MATERIAS[m]} {NOMBRES_MATERIAS[m]}
                            </button>
                        ))}
                    </div>

                    {/* Contador */}
                    <div style={{ textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                        Tarjeta {(idx % filtrados.length) + 1} de {filtrados.length}
                    </div>

                    {/* FLASHCARD */}
                    <div
                        className="flashcard-wrapper"
                        onClick={() => setFlipped(!flipped)}
                        style={{ marginBottom: "2rem" }}
                    >
                        <div className={`flashcard-inner${flipped ? " flipped" : ""}`}>
                            {/* Frente — Pregunta */}
                            <div className="flashcard-front">
                                <div>
                                    <div style={{ fontSize: "0.8125rem", color: "#38bdf8", fontWeight: 600, marginBottom: "0.875rem" }}>
                                        {EMOJIS_MATERIAS[actual?.materia]} {NOMBRES_MATERIAS[actual?.materia]}
                                    </div>
                                    <p style={{ color: "var(--color-text)", fontSize: "1.0625rem", lineHeight: 1.6, margin: 0 }}>
                                        {actual?.pregunta}
                                    </p>
                                    <div style={{ marginTop: "1.25rem", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                                        Toca para ver la respuesta ↓
                                    </div>
                                </div>
                            </div>
                            {/* Dorso — Respuesta */}
                            <div className="flashcard-back">
                                <div>
                                    <div style={{ fontSize: "0.8125rem", color: "#38bdf8", fontWeight: 600, marginBottom: "0.875rem" }}>
                                        ✅ Respuesta correcta
                                    </div>
                                    <div style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.875rem" }}>
                                        {actual?.opciones[actual?.respuesta]}
                                    </div>
                                    <p style={{ fontSize: "0.9rem", color: "rgba(241,245,249,0.75)", lineHeight: 1.6, margin: 0 }}>
                                        {actual?.explicacion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                        <button onClick={anterior} className="btn btn-ghost">← Anterior</button>
                        <button
                            onClick={() => { setFlipped(false); setIdx(Math.floor(Math.random() * filtrados.length)); }}
                            style={{
                                background: "rgba(0,74,147,0.2)",
                                border: "1px solid rgba(56,189,248,0.3)",
                                color: "#38bdf8",
                                padding: "0.75rem 1.25rem",
                                borderRadius: "var(--radius-md)",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: "0.9375rem",
                            }}
                        >
                            🔀 Aleatoria
                        </button>
                        <button onClick={siguiente} className="btn btn-unam">Siguiente →</button>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                        <Link href="/unam/simulador" className="btn btn-ghost">
                            ⏱️ Probar en simulacro real
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
