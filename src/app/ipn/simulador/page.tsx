"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
    DISTRIBUCION_EXAMEN,
    NOMBRES_MATERIAS,
    EMOJIS_MATERIAS,
    generarSimulacro,
    type Materia,
    type Reactivo,
} from "@/data/questions";

const DURACION_SECS = 3 * 60 * 60;

function formatTime(secs: number) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// Puntajes orientativos IPN para la pantalla de resultados
const CECYT_REFERENCIA = [
    { nombre: "CECyT 6", ref: 92 }, { nombre: "CECyT 9", ref: 90 },
    { nombre: "CECyT 11", ref: 89 }, { nombre: "CECyT 1", ref: 87 },
    { nombre: "CECyT 7", ref: 87 }, { nombre: "CECyT 3", ref: 85 },
    { nombre: "CECyT 14", ref: 85 }, { nombre: "CECyT 2", ref: 83 },
    { nombre: "CECyT 5", ref: 83 }, { nombre: "CECyT 10", ref: 82 },
    { nombre: "CECyT 4", ref: 80 }, { nombre: "CECyT 8", ref: 80 },
    { nombre: "CECyT 12", ref: 78 }, { nombre: "CECyT 13", ref: 78 },
    { nombre: "CECyT 15", ref: 77 }, { nombre: "CECyT 16", ref: 76 },
    { nombre: "CECyT 17", ref: 76 }, { nombre: "CECyT 18", ref: 75 },
    { nombre: "CECyT 19", ref: 74 },
];

function PantallaResultados({
    reactivos, respuestas, tiempoUsado, onReiniciar,
}: {
    reactivos: Reactivo[];
    respuestas: (number | null)[];
    tiempoUsado: number;
    onReiniciar: () => void;
}) {
    const aciertos = reactivos.filter((r, i) => respuestas[i] === r.respuesta).length;
    const pct = Math.round((aciertos / 128) * 100);

    const porMateria = (Object.keys(DISTRIBUCION_EXAMEN) as Materia[]).map((m) => {
        const reactivosMat = reactivos.filter((r) => r.materia === m);
        const aciertosMat = reactivosMat.filter((r) => {
            const i = reactivos.indexOf(r);
            return respuestas[i] === r.respuesta;
        }).length;
        return { materia: m, aciertos: aciertosMat, total: DISTRIBUCION_EXAMEN[m] };
    });

    const semaforos = CECYT_REFERENCIA.map((c) => {
        const diff = aciertos - c.ref;
        return { ...c, semaforo: diff >= 3 ? "verde" : diff >= -3 ? "amarillo" : "rojo" };
    });

    return (
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "2rem 1.5rem" }}>
            {/* Score */}
            <div
                style={{
                    background: "linear-gradient(135deg, #2d0a0a, #7f1d1d)",
                    border: "1px solid rgba(248,113,113,0.3)",
                    borderRadius: "var(--radius-xl)",
                    padding: "2.5rem",
                    textAlign: "center",
                    marginBottom: "2rem",
                }}
            >
                <div style={{ fontSize: "0.9375rem", color: "#fca5a5", marginBottom: "0.5rem" }}>Resultado del Simulacro IPN</div>
                <div style={{ fontSize: "5rem", fontWeight: 900, color: "#f87171", lineHeight: 1, marginBottom: "0.5rem" }}>
                    {aciertos}
                </div>
                <div style={{ fontSize: "1.25rem", color: "rgba(241,245,249,0.6)", marginBottom: "1rem" }}>
                    de 128 aciertos ({pct}%)
                </div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                    ⏱️ Tiempo usado: {formatTime(tiempoUsado)}
                </div>
            </div>

            {/* Por materia */}
            <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ marginBottom: "1.25rem" }}>📊 Resultados por materia</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {porMateria.map(({ materia, aciertos: ac, total }) => {
                        const p = Math.round((ac / total) * 100);
                        const c = p >= 70 ? "#34d399" : p >= 50 ? "#fbbf24" : "#f87171";
                        return (
                            <div key={materia}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                                    <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                                        {EMOJIS_MATERIAS[materia]} {NOMBRES_MATERIAS[materia]}
                                    </span>
                                    <span style={{ fontWeight: 700, color: c }}>{ac}/{total}</span>
                                </div>
                                <div className="xp-bar">
                                    <div className="xp-bar-fill" style={{ width: `${p}%`, background: c }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Semáforo CECyT */}
            <div className="card" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "0.5rem", color: "#f87171" }}>⚙️ ¿En cuáles CECyT podrías quedar?</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                    Estimación orientativa — el IPN no publica puntajes mínimos oficiales por plantel.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {semaforos.map((c) => {
                        const color = c.semaforo === "verde" ? "#34d399" : c.semaforo === "amarillo" ? "#fbbf24" : "#f87171";
                        const emoji = c.semaforo === "verde" ? "✅" : c.semaforo === "amarillo" ? "⚠️" : "❌";
                        const cls = c.semaforo === "verde" ? "badge-verde" : c.semaforo === "amarillo" ? "badge-amarillo" : "badge-rojo";
                        return (
                            <div
                                key={c.nombre}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0.5rem 0.875rem",
                                    background: `${color}0d`,
                                    borderRadius: "var(--radius-sm)",
                                    border: `1px solid ${color}33`,
                                }}
                            >
                                <div>
                                    <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{c.nombre}</span>
                                    <span style={{ color: "var(--color-text-dim)", fontSize: "0.78rem", marginLeft: "0.5rem" }}>
                                        ref. ~{c.ref}
                                    </span>
                                </div>
                                <span className={cls} style={{ fontSize: "0.78rem" }}>{emoji}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={onReiniciar} className="btn btn-ipn">🔄 Nuevo Simulacro</button>
                <Link href="/ipn/calculadora" className="btn btn-ghost">🧮 Ver Calculadora</Link>
            </div>
        </div>
    );
}

export default function SimuladorIpn() {
    const [estado, setEstado] = useState<"inicio" | "examen" | "finalizado">("inicio");
    const [reactivos, setReactivos] = useState<Reactivo[]>([]);
    const [indice, setIndice] = useState(0);
    const [respuestas, setRespuestas] = useState<(number | null)[]>([]);
    const [seleccion, setSeleccion] = useState<number | null>(null);
    const [tiempo, setTiempo] = useState(DURACION_SECS);
    const [tiempoUsado, setTiempoUsado] = useState(0);
    const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
        setTiempoUsado(DURACION_SECS - tiempo);
        setEstado("finalizado");
    }, [tiempo]);

    useEffect(() => {
        if (estado !== "examen") return;
        intervaloRef.current = setInterval(() => {
            setTiempo((t) => {
                if (t <= 1) { finalizar(); return 0; }
                return t - 1;
            });
        }, 1000);
        return () => { if (intervaloRef.current) clearInterval(intervaloRef.current); };
    }, [estado, finalizar]);

    const seleccionar = (op: number) => {
        if (seleccion !== null) return;
        setSeleccion(op);
        const nuevas = [...respuestas];
        nuevas[indice] = op;
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

    const reactivo = reactivos[indice];
    const respondidas = respuestas.filter((r) => r !== null).length;
    const timerClass = tiempo > 3600 ? "timer" : tiempo > 1800 ? "timer warning" : "timer danger";

    // Inicio
    if (estado === "inicio") {
        return (
            <div className="page-ipn" style={{ minHeight: "100vh", paddingTop: "5rem" }}>
                <div style={{ maxWidth: "680px", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
                    <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>⏱️</div>
                    <h1 style={{ marginBottom: "1rem" }}>Simulacro IPN — CECyT</h1>
                    <p style={{ marginBottom: "2.5rem", fontSize: "1.0625rem" }}>
                        El examen del IPN es idéntico en estructura al COMIPEMS: 128 preguntas en 3 horas.
                    </p>
                    <div className="card" style={{ marginBottom: "2.5rem", textAlign: "left" }}>
                        <h3 style={{ marginBottom: "1rem", color: "#f87171" }}>📋 Distribución oficial</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem" }}>
                            {(Object.entries(DISTRIBUCION_EXAMEN) as [Materia, number][]).map(([m, n]) => (
                                <div key={m} style={{ display: "flex", justifyContent: "space-between", padding: "0.375rem 0", borderBottom: "1px solid var(--color-border)" }}>
                                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                                        {EMOJIS_MATERIAS[m]} {NOMBRES_MATERIAS[m]}
                                    </span>
                                    <span style={{ fontWeight: 700, color: "#f87171" }}>{n}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={iniciar} className="btn btn-ipn" style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}>
                        ▶️ Iniciar Simulacro
                    </button>
                    <div style={{ marginTop: "1rem" }}>
                        <Link href="/ipn" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>← Volver al IPN</Link>
                    </div>
                </div>
            </div>
        );
    }

    // Resultados
    if (estado === "finalizado") {
        return (
            <div className="page-ipn" style={{ minHeight: "100vh" }}>
                <nav className="navbar">
                    <div className="navbar-content">
                        <span style={{ fontWeight: 700, color: "#f87171" }}>⚙️ Resultados — Simulacro IPN</span>
                        <Link href="/ipn" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Volver al IPN</Link>
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

    // Examen
    return (
        <div className="page-ipn" style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
            {/* Header */}
            <div className="simulador-header" style={{ borderRadius: 0, borderLeft: "none", borderRight: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span className={timerClass}>{formatTime(tiempo)}</span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>{respondidas}/{reactivos.length}</span>
                </div>
                <div style={{ fontSize: "0.875rem", color: "#fca5a5", fontWeight: 600 }}>⚙️ Simulacro IPN</div>
                <button
                    onClick={finalizar}
                    style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", color: "#f87171", padding: "0.375rem 0.875rem", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}
                >
                    Terminar
                </button>
            </div>

            <div style={{ display: "flex", minHeight: "calc(100vh - 73px)" }}>
                {/* Sidebar */}
                <div style={{ width: "200px", flexShrink: 0, background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", padding: "1rem", overflowY: "auto" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Preguntas</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px" }}>
                        {reactivos.map((_, i) => {
                            const isCurrent = i === indice;
                            const isDone = respuestas[i] !== null;
                            return (
                                <button
                                    key={i}
                                    onClick={() => { setIndice(i); setSeleccion(respuestas[i] ?? null); }}
                                    style={{
                                        width: "34px", height: "34px", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
                                        border: isCurrent ? "2px solid #f87171" : "1px solid transparent",
                                        background: isCurrent ? "rgba(248,113,113,0.2)" : isDone ? "rgba(52,211,153,0.15)" : "var(--color-bg)",
                                        color: isCurrent ? "#f87171" : isDone ? "#34d399" : "var(--color-text-muted)",
                                    }}
                                >
                                    {i + 1}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Pregunta */}
                <div style={{ flex: 1, padding: "2rem", maxWidth: "680px" }}>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                        Pregunta {indice + 1} de {reactivos.length}
                    </div>
                    <h2 style={{ fontSize: "1.1875rem", marginBottom: "2rem", lineHeight: 1.6, fontWeight: 500 }}>
                        {reactivo?.pregunta}
                    </h2>
                    {reactivo?.opciones.map((op, i) => {
                        let cls = "opcion-btn";
                        if (seleccion !== null) {
                            if (i === reactivo.respuesta) cls += " correct";
                            else if (i === seleccion) cls += " wrong";
                        }
                        return (
                            <button key={i} className={cls} onClick={() => seleccionar(i)} disabled={seleccion !== null}>
                                <span style={{ marginRight: "0.75rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
                                    {String.fromCharCode(65 + i)})
                                </span>
                                {op}
                            </button>
                        );
                    })}
                    {seleccion !== null && (
                        <div style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", marginTop: "1.5rem" }}>
                            <div style={{ fontWeight: 600, color: "#34d399", marginBottom: "0.5rem", fontSize: "0.875rem" }}>💡 Explicación</div>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem", margin: 0 }}>{reactivo?.explicacion}</p>
                        </div>
                    )}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                        <button onClick={() => { setIndice(Math.max(0, indice - 1)); setSeleccion(respuestas[Math.max(0, indice - 1)] ?? null); }} className="btn btn-ghost" disabled={indice === 0}>
                            ← Anterior
                        </button>
                        <button onClick={siguiente} className="btn btn-ipn">
                            {indice < reactivos.length - 1 ? "Siguiente →" : "Ver Resultados →"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
