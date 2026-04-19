"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
    TODOS_LOS_REACTIVOS,
    DISTRIBUCION_EXAMEN,
    NOMBRES_MATERIAS,
    EMOJIS_MATERIAS,
    generarSimulacro,
    type Materia,
    type Reactivo,
} from "@/data/questions";
import { calcularSemaforos } from "@/data/scores";
import { PLANTELES_CCH, PLANTELES_ENP } from "@/data/schools";
import { useGamification, EMOJIS_NIVEL } from "@/hooks/useGamification";

// Suprimir lint de TODOS_LOS_REACTIVOS (usada en el bundle para verif)
void TODOS_LOS_REACTIVOS;

const DURACION_SECS = 3 * 60 * 60; // 3 horas

function formatTime(secs: number) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ==============================
// PANTALLA DE RESULTADOS
// ==============================
function PantallaResultados({
    reactivos,
    respuestas,
    tiempoUsado,
    onReiniciar,
}: {
    reactivos: Reactivo[];
    respuestas: (number | null)[];
    tiempoUsado: number;
    onReiniciar: () => void;
}) {
    const aciertos = reactivos.filter((r, i) => respuestas[i] === r.respuesta).length;
    const semaforos = calcularSemaforos(aciertos);

    const porMateria = (Object.keys(DISTRIBUCION_EXAMEN) as Materia[]).map((m) => {
        const reactivosMat = reactivos.filter((r) => r.materia === m);
        const aciertosMat = reactivosMat.filter((r, idx) => {
            const globalIdx = reactivos.indexOf(r);
            return respuestas[globalIdx] === r.respuesta;
        }).length;
        return { materia: m, aciertos: aciertosMat, total: DISTRIBUCION_EXAMEN[m] };
    });

    const semaforoLabel = (s: string) => {
        if (s === "verde") return { text: "✅ Alta prob.", class: "badge-verde" };
        if (s === "amarillo") return { text: "⚠️ Límite", class: "badge-amarillo" };
        return { text: "❌ Insuficiente", class: "badge-rojo" };
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1.5rem" }}>
            {/* Score principal */}
            <div
                style={{
                    background: "linear-gradient(135deg, #001a38, #003e7a)",
                    border: "1px solid rgba(56,189,248,0.3)",
                    borderRadius: "var(--radius-xl)",
                    padding: "2.5rem",
                    textAlign: "center",
                    marginBottom: "2rem",
                }}
            >
                <div style={{ fontSize: "0.9375rem", color: "#93c5fd", marginBottom: "0.5rem" }}>
                    Resultado del Simulacro
                </div>
                <div
                    style={{
                        fontSize: "5rem",
                        fontWeight: 900,
                        color: "#38bdf8",
                        lineHeight: 1,
                        marginBottom: "0.5rem",
                    }}
                >
                    {aciertos}
                </div>
                <div style={{ fontSize: "1.25rem", color: "rgba(241,245,249,0.6)", marginBottom: "1.5rem" }}>
                    de 128 aciertos ({Math.round((aciertos / 128) * 100)}%)
                </div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                    ⏱️ Tiempo usado: {formatTime(tiempoUsado)}
                </div>
            </div>

            {/* Por materia */}
            <div className="card" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1.25rem" }}>📊 Resultados por materia</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {porMateria.map(({ materia, aciertos: ac, total }) => {
                        const pct = Math.round((ac / total) * 100);
                        const color = pct >= 70 ? "#34d399" : pct >= 50 ? "#fbbf24" : "#f87171";
                        return (
                            <div key={materia}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                                    <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                                        {EMOJIS_MATERIAS[materia]} {NOMBRES_MATERIAS[materia]}
                                    </span>
                                    <span style={{ fontWeight: 700, color }}>
                                        {ac}/{total}
                                    </span>
                                </div>
                                <div className="xp-bar">
                                    <div
                                        className="xp-bar-fill"
                                        style={{ width: `${pct}%`, background: color }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Semáforo CCH */}
            <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ marginBottom: "1.25rem", color: "#38bdf8" }}>
                    🏫 CCH — ¿En cuáles quedarías?
                </h3>
                <table className="semaforo-table">
                    <thead>
                        <tr>
                            <th>Plantel</th>
                            <th>Mínimo 2024</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semaforos.cch.map(({ id, semaforo, minimo }) => {
                            const plantel = PLANTELES_CCH.find((p) => p.id === id);
                            const label = semaforoLabel(semaforo);
                            return (
                                <tr key={id}>
                                    <td style={{ fontWeight: 500 }}>{plantel?.nombre}</td>
                                    <td style={{ color: "var(--color-text-muted)" }}>{minimo}/128</td>
                                    <td>
                                        <span className={label.class}>{label.text}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Semáforo ENP */}
            <div className="card" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1.25rem", color: "#f59e0b" }}>
                    🏛️ ENP — ¿En cuáles quedarías?
                </h3>
                <table className="semaforo-table">
                    <thead>
                        <tr>
                            <th>Plantel</th>
                            <th>Mínimo 2024</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semaforos.enp.map(({ id, semaforo, minimo }) => {
                            const plantel = PLANTELES_ENP.find((p) => p.id === id);
                            const label = semaforoLabel(semaforo);
                            return (
                                <tr key={id}>
                                    <td style={{ fontWeight: 500, fontSize: "0.875rem" }}>
                                        {plantel?.nombre.replace(/".*"/, "").trim()} — {plantel?.nombreHistorico}
                                    </td>
                                    <td style={{ color: "var(--color-text-muted)" }}>{minimo}/128</td>
                                    <td>
                                        <span className={label.class}>{label.text}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Botones */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={onReiniciar} className="btn btn-unam">
                    🔄 Nuevo Simulacro
                </button>
                <Link href="/unam/calculadora" className="btn btn-ghost">
                    🧮 Ver Calculadora Completa
                </Link>
                <Link href="/unam/diagnostico" className="btn btn-ghost">
                    🩺 Hacer Diagnóstico
                </Link>
            </div>
        </div>
    );
}

// ==============================
// COMPONENTE PRINCIPAL
// ==============================
export default function SimuladorUnam() {
    const [estado, setEstado] = useState<"inicio" | "examen" | "finalizado">("inicio");
    const [reactivos, setReactivos] = useState<Reactivo[]>([]);
    const [indice, setIndice] = useState(0);
    const [respuestas, setRespuestas] = useState<(number | null)[]>([]);
    const [seleccion, setSeleccion] = useState<number | null>(null);
    const [tiempo, setTiempo] = useState(DURACION_SECS);
    const [tiempoUsado, setTiempoUsado] = useState(0);
    const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const gamif = useGamification();

    const iniciar = useCallback(() => {
        const nuevos = generarSimulacro();
        setReactivos(nuevos);
        setRespuestas(new Array(nuevos.length).fill(null));
        setIndice(0);
        setSeleccion(null);
        setTiempo(DURACION_SECS);
        setTiempoUsado(0);
        setEstado("examen");
    }, []);

    const finalizar = useCallback(() => {
        if (intervaloRef.current) clearInterval(intervaloRef.current);
        const usado = DURACION_SECS - tiempo;
        setTiempoUsado(usado);
        // Calcular aciertos y otorgar XP
        const aciertos = reactivos.filter((r, i) => respuestas[i] === r.respuesta).length;
        gamif.xpPorSimulacro(aciertos, reactivos.length || 128);
        setEstado("finalizado");
    }, [tiempo, reactivos, respuestas, gamif]);

    useEffect(() => {
        if (estado === "examen") {
            intervaloRef.current = setInterval(() => {
                setTiempo((t) => {
                    if (t <= 1) {
                        finalizar();
                        return 0;
                    }
                    return t - 1;
                });
            }, 1000);
        }
        return () => {
            if (intervaloRef.current) clearInterval(intervaloRef.current);
        };
    }, [estado, finalizar]);

    const seleccionar = (opcion: number) => {
        if (seleccion !== null) return;
        setSeleccion(opcion);
        const nuevas = [...respuestas];
        nuevas[indice] = opcion;
        setRespuestas(nuevas);
    };

    const siguiente = () => {
        if (indice < reactivos.length - 1) {
            setIndice(indice + 1);
            setSeleccion(respuestas[indice + 1] ?? null);
        } else {
            finalizar();
        }
    };

    const irA = (i: number) => {
        setIndice(i);
        setSeleccion(respuestas[i] ?? null);
    };

    const timerClass = tiempo > 3600 ? "timer" : tiempo > 1800 ? "timer warning" : "timer danger";
    const respondidas = respuestas.filter((r) => r !== null).length;

    // ====== PANTALLA INICIO ======
    if (estado === "inicio") {
        return (
            <div className="page-unam" style={{ minHeight: "100vh", paddingTop: "5rem" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
                    {/* Barra de XP/Gamificación */}
                    {gamif.loaded && (
                        <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "1rem 1.25rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ fontSize: "1.25rem" }}>{EMOJIS_NIVEL[gamif.nivel]}</span>
                                <span style={{ fontWeight: 700 }}>{gamif.nivel}</span>
                                <span style={{ color: "var(--color-text-dim)", fontSize: "0.85rem" }}>·</span>
                                <span style={{ color: "#fbbf24", fontWeight: 700 }}>{gamif.xp} XP</span>
                            </div>
                            {gamif.racha > 0 && (
                                <span className="streak-badge">🔥 {gamif.racha} días</span>
                            )}
                            <div style={{ flex: 1, minWidth: "120px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-text-dim)", marginBottom: "4px" }}>
                                    <span>Progreso al siguiente nivel</span>
                                    <span>{gamif.progreso}%</span>
                                </div>
                                <div className="xp-bar">
                                    <div className="xp-bar-fill" style={{ width: `${gamif.progreso}%`, background: "linear-gradient(90deg, #38bdf8, #818cf8)" }} />
                                </div>
                            </div>
                        </div>
                    )}
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⏱️</div>
                    <h1 style={{ marginBottom: "1rem" }}>Simulacro UNAM Completo</h1>
                    <p style={{ marginBottom: "2.5rem", fontSize: "1.0625rem" }}>
                        128 preguntas · 3 horas · Distribución exacta del examen oficial
                    </p>
                    <div className="card" style={{ marginBottom: "2.5rem", textAlign: "left" }}>
                        <h3 style={{ marginBottom: "1rem" }}>📋 Distribución de preguntas</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem" }}>
                            {(Object.entries(DISTRIBUCION_EXAMEN) as [Materia, number][]).map(([m, n]) => (
                                <div key={m} style={{ display: "flex", justifyContent: "space-between", padding: "0.375rem 0", borderBottom: "1px solid var(--color-border)" }}>
                                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                                        {EMOJIS_MATERIAS[m]} {NOMBRES_MATERIAS[m]}
                                    </span>
                                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>{n}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={iniciar} className="btn btn-unam" style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}>
                        ▶️ Iniciar Simulacro
                    </button>
                    <div style={{ marginTop: "1rem" }}>
                        <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                            ← Volver a UNAM
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // ====== PANTALLA RESULTADOS ======
    if (estado === "finalizado") {
        return (
            <div className="page-unam" style={{ minHeight: "100vh", paddingTop: "1rem" }}>
                <nav className="navbar">
                    <div className="navbar-content">
                        <span style={{ fontWeight: 700, color: "#38bdf8" }}>🏛️ Resultados del Simulacro</span>
                        <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                            ← Volver a UNAM
                        </Link>
                    </div>
                </nav>
                <div style={{ paddingTop: "var(--nav-height)" }}>
                    <PantallaResultados
                        reactivos={reactivos}
                        respuestas={respuestas}
                        tiempoUsado={tiempoUsado}
                        onReiniciar={iniciar}
                    />
                </div>
            </div>
        );
    }

    // ====== PANTALLA EXAMEN ======
    const reactivo = reactivos[indice];
    const materiaActual = reactivo?.materia;

    return (
        <div className="page-unam" style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
            {/* Header del simulacro */}
            <div className="simulador-header" style={{ borderRadius: 0, borderLeft: "none", borderRight: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span className={timerClass}>{formatTime(tiempo)}</span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        {respondidas}/{reactivos.length} respondidas
                    </span>
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                    {EMOJIS_MATERIAS[materiaActual]} {NOMBRES_MATERIAS[materiaActual]}
                </div>
                <button
                    onClick={finalizar}
                    style={{
                        background: "rgba(248,113,113,0.1)",
                        border: "1px solid rgba(248,113,113,0.3)",
                        color: "#f87171",
                        padding: "0.375rem 0.875rem",
                        borderRadius: "var(--radius-sm)",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                    }}
                >
                    Terminar
                </button>
            </div>

            <div style={{ display: "flex", minHeight: "calc(100vh - 73px)" }}>
                {/* Sidebar de navegación */}
                <div
                    style={{
                        width: "220px",
                        flexShrink: 0,
                        background: "var(--color-bg-card)",
                        borderRight: "1px solid var(--color-border)",
                        padding: "1rem",
                        overflowY: "auto",
                    }}
                >
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Preguntas
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px" }}>
                        {reactivos.map((_, i) => {
                            const isActual = i === indice;
                            const isRespondida = respuestas[i] !== null;
                            return (
                                <button
                                    key={i}
                                    onClick={() => irA(i)}
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "6px",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        border: isActual ? "2px solid #38bdf8" : "1px solid transparent",
                                        background: isActual
                                            ? "rgba(56,189,248,0.2)"
                                            : isRespondida
                                                ? "rgba(52,211,153,0.2)"
                                                : "var(--color-bg)",
                                        color: isActual ? "#38bdf8" : isRespondida ? "#34d399" : "var(--color-text-muted)",
                                    }}
                                >
                                    {i + 1}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Área de pregunta */}
                <div style={{ flex: 1, padding: "2rem", maxWidth: "700px" }}>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                        Pregunta {indice + 1} de {reactivos.length} · {reactivo?.subtema}
                    </div>

                    <h2 style={{ fontSize: "1.1875rem", marginBottom: "2rem", lineHeight: 1.6, fontWeight: 500 }}>
                        {reactivo?.pregunta}
                    </h2>

                    <div>
                        {reactivo?.opciones.map((opcion, i) => {
                            let className = "opcion-btn";
                            if (seleccion !== null) {
                                if (i === reactivo.respuesta) className += " correct";
                                else if (i === seleccion && seleccion !== reactivo.respuesta) className += " wrong";
                            } else if (seleccion === i) {
                                className += " selected";
                            }
                            return (
                                <button
                                    key={i}
                                    className={className}
                                    onClick={() => seleccionar(i)}
                                    disabled={seleccion !== null}
                                >
                                    <span style={{ marginRight: "0.75rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
                                        {String.fromCharCode(65 + i)})
                                    </span>
                                    {opcion}
                                </button>
                            );
                        })}
                    </div>

                    {/* Explicación */}
                    {seleccion !== null && (
                        <div
                            style={{
                                background: "rgba(52,211,153,0.08)",
                                border: "1px solid rgba(52,211,153,0.2)",
                                borderRadius: "var(--radius-md)",
                                padding: "1rem 1.25rem",
                                marginTop: "1.5rem",
                            }}
                        >
                            <div style={{ fontWeight: 600, color: "#34d399", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                                💡 Explicación
                            </div>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem", margin: 0 }}>
                                {reactivo?.explicacion}
                            </p>
                        </div>
                    )}

                    {/* Navegación */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                        <button
                            onClick={() => irA(Math.max(0, indice - 1))}
                            className="btn btn-ghost"
                            disabled={indice === 0}
                        >
                            ← Anterior
                        </button>
                        <button onClick={siguiente} className="btn btn-unam">
                            {indice < reactivos.length - 1 ? "Siguiente →" : "Ver Resultados →"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
