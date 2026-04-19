"use client";

import { useState } from "react";
import Link from "next/link";
import { calcularSemaforos } from "@/data/scores";
import { PLANTELES_CCH, PLANTELES_ENP } from "@/data/schools";

export default function CalculadoraUnam() {
    const [aciertos, setAciertos] = useState(90);
    const semaforos = calcularSemaforos(aciertos);
    const pct = Math.round((aciertos / 128) * 100);

    const getEmoji = (s: string) => s === "verde" ? "✅" : s === "amarillo" ? "⚠️" : "❌";
    const getLabelColor = (s: string) => s === "verde" ? "#34d399" : s === "amarillo" ? "#fbbf24" : "#f87171";
    const getBgClass = (s: string) => s === "verde" ? "badge-verde" : s === "amarillo" ? "badge-amarillo" : "badge-rojo";

    return (
        <div className="page-unam" style={{ minHeight: "100vh" }}>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← UNAM</Link>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>🧮 Calculadora de Aciertos</span>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div style={{ paddingTop: "var(--nav-height)", maxWidth: "800px", margin: "0 auto", padding: "var(--nav-height) 1.5rem 3rem" }}>
                <div style={{ textAlign: "center", padding: "3rem 0 2rem" }}>
                    <h1>¿En qué planteles quedarías?</h1>
                    <p style={{ marginBottom: "2.5rem" }}>
                        Mueve el slider para ver en qué CCH o ENP podrías ingresar con ese puntaje
                    </p>

                    {/* Score display */}
                    <div
                        style={{
                            display: "inline-block",
                            background: "linear-gradient(135deg, #001a38, #003e7a)",
                            border: "2px solid rgba(56,189,248,0.4)",
                            borderRadius: "var(--radius-xl)",
                            padding: "2rem 3rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <div style={{ fontSize: "5rem", fontWeight: 900, color: "#38bdf8", lineHeight: 1 }}>
                            {aciertos}
                        </div>
                        <div style={{ color: "rgba(241,245,249,0.6)", fontSize: "1rem" }}>
                            de 128 aciertos ({pct}%)
                        </div>
                    </div>

                    {/* Slider */}
                    <div style={{ maxWidth: "500px", margin: "0 auto 0.75rem" }}>
                        <input
                            type="range"
                            min={0}
                            max={128}
                            value={aciertos}
                            onChange={(e) => setAciertos(Number(e.target.value))}
                            style={{
                                width: "100%",
                                height: "8px",
                                borderRadius: "4px",
                                background: `linear-gradient(to right, #0066cc ${pct}%, #1f2937 ${pct}%)`,
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
                        <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-dim)", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
                            <span>0</span>
                            <span>64</span>
                            <span>128</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    {/* CCH */}
                    <div className="card">
                        <h3 style={{ color: "#38bdf8", marginBottom: "1.25rem" }}>🏫 CCH</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {semaforos.cch
                                .slice()
                                .sort((a, b) => (b.minimo ?? 0) - (a.minimo ?? 0))
                                .map(({ id, semaforo, minimo }) => {
                                    const plantel = PLANTELES_CCH.find((p) => p.id === id);
                                    return (
                                        <div
                                            key={id}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "0.625rem 0.875rem",
                                                background: `${getLabelColor(semaforo)}11`,
                                                border: `1px solid ${getLabelColor(semaforo)}33`,
                                                borderRadius: "var(--radius-sm)",
                                            }}
                                        >
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                                                    {plantel?.nombre.replace("CCH ", "")}
                                                </div>
                                                <div style={{ color: "var(--color-text-dim)", fontSize: "0.78rem" }}>
                                                    mín. {minimo}/128
                                                </div>
                                            </div>
                                            <span className={getBgClass(semaforo)} style={{ fontSize: "0.75rem" }}>
                                                {getEmoji(semaforo)}
                                            </span>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    {/* ENP */}
                    <div className="card">
                        <h3 style={{ color: "#f59e0b", marginBottom: "1.25rem" }}>🏛️ ENP</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {semaforos.enp
                                .slice()
                                .sort((a, b) => (b.minimo ?? 0) - (a.minimo ?? 0))
                                .map(({ id, semaforo, minimo }) => {
                                    const plantel = PLANTELES_ENP.find((p) => p.id === id);
                                    return (
                                        <div
                                            key={id}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "0.625rem 0.875rem",
                                                background: `${getLabelColor(semaforo)}11`,
                                                border: `1px solid ${getLabelColor(semaforo)}33`,
                                                borderRadius: "var(--radius-sm)",
                                            }}
                                        >
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                                                    ENP {plantel?.numero} — {plantel?.nombreHistorico}
                                                </div>
                                                <div style={{ color: "var(--color-text-dim)", fontSize: "0.78rem" }}>
                                                    mín. {minimo}/128
                                                </div>
                                            </div>
                                            <span className={getBgClass(semaforo)} style={{ fontSize: "0.75rem" }}>
                                                {getEmoji(semaforo)}
                                            </span>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                        ✅ = Alta probabilidad (3+ sobre el mínimo) · ⚠️ = Límite (±2 del mínimo) · ❌ = Insuficiente
                    </p>
                    <Link href="/unam/simulador" className="btn btn-unam">
                        ⏱️ Pon a prueba tu puntaje en el Simulacro →
                    </Link>
                </div>
            </div>
        </div>
    );
}
