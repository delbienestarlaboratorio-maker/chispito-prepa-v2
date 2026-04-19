"use client";

import { useState } from "react";
import Link from "next/link";

// Referencia aproximada de puntajes IPN (el IPN no publica mínimos por plantel de forma oficial
// como UNAM, pero estos rangos son históricos orientativos por área de demanda)
const CECYT_DATOS = [
    { id: "cecyt-6", nombre: "CECyT 6 — Mendizábal", referencia: 92, demanda: "muy alta" },
    { id: "cecyt-9", nombre: "CECyT 9 — Juan de Dios Bátiz", referencia: 90, demanda: "muy alta" },
    { id: "cecyt-11", nombre: "CECyT 11 — Wilfrido Massieu", referencia: 89, demanda: "alta" },
    { id: "cecyt-1", nombre: "CECyT 1 — González Vázquez Vela", referencia: 87, demanda: "alta" },
    { id: "cecyt-7", nombre: "CECyT 7 — Cuauhtémoc", referencia: 87, demanda: "alta" },
    { id: "cecyt-3", nombre: "CECyT 3 — Estanislao Ramírez", referencia: 85, demanda: "media" },
    { id: "cecyt-14", nombre: "CECyT 14 — Luis Enrique Erro", referencia: 85, demanda: "media" },
    { id: "cecyt-2", nombre: "CECyT 2 — Miguel Bernard", referencia: 83, demanda: "media" },
    { id: "cecyt-5", nombre: "CECyT 5 — Benito Juárez", referencia: 83, demanda: "media" },
    { id: "cecyt-10", nombre: "CECyT 10 — Carlos Vallejo", referencia: 82, demanda: "media" },
    { id: "cecyt-4", nombre: "CECyT 4 — Lázaro Cárdenas", referencia: 80, demanda: "media" },
    { id: "cecyt-8", nombre: "CECyT 8 — Narciso Bassols", referencia: 80, demanda: "media" },
    { id: "cecyt-12", nombre: "CECyT 12 — José María Morelos", referencia: 78, demanda: "normal" },
    { id: "cecyt-13", nombre: "CECyT 13 — Ricardo Flores Magón", referencia: 78, demanda: "normal" },
    { id: "cecyt-15", nombre: "CECyT 15 — Diódoro Antúnez", referencia: 77, demanda: "normal" },
    { id: "cecyt-16", nombre: "CECyT 16 — Hidalgo", referencia: 76, demanda: "normal" },
    { id: "cecyt-17", nombre: "CECyT 17 — Río de la Loza", referencia: 76, demanda: "normal" },
    { id: "cecyt-18", nombre: "CECyT 18", referencia: 75, demanda: "normal" },
    { id: "cecyt-19", nombre: "CECyT 19", referencia: 74, demanda: "normal" },
];

function getSemaforo(aciertos: number, referencia: number) {
    if (aciertos >= referencia + 3) return "verde";
    if (aciertos >= referencia - 3) return "amarillo";
    return "rojo";
}

function getLabelColor(s: string) {
    return s === "verde" ? "#34d399" : s === "amarillo" ? "#fbbf24" : "#f87171";
}

function getBgClass(s: string) {
    return s === "verde" ? "badge-verde" : s === "amarillo" ? "badge-amarillo" : "badge-rojo";
}

function getEmoji(s: string) {
    return s === "verde" ? "✅" : s === "amarillo" ? "⚠️" : "❌";
}

export default function CalculadoraIpn() {
    const [aciertos, setAciertos] = useState(80);
    const pct = Math.round((aciertos / 128) * 100);

    const resultados = CECYT_DATOS.map((c) => ({
        ...c,
        semaforo: getSemaforo(aciertos, c.referencia),
    }));

    const verdes = resultados.filter((r) => r.semaforo === "verde").length;
    const amarillos = resultados.filter((r) => r.semaforo === "amarillo").length;

    return (
        <div className="page-ipn" style={{ minHeight: "100vh" }}>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ipn" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← IPN</Link>
                    <span style={{ fontWeight: 700, color: "#f87171" }}>🧮 Calculadora CECyT</span>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div style={{ paddingTop: "var(--nav-height)", maxWidth: "860px", margin: "0 auto", padding: "var(--nav-height) 1.5rem 3rem" }}>
                <div style={{ textAlign: "center", padding: "3rem 0 2rem" }}>
                    <h1>¿A cuál CECyT podrías entrar?</h1>
                    <p style={{ marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
                        Mueve el slider — los resultados son orientativos basados en la demanda histórica por plantel.
                    </p>

                    {/* Aviso */}
                    <div
                        style={{
                            background: "rgba(251,191,36,0.08)",
                            border: "1px solid rgba(251,191,36,0.2)",
                            borderRadius: "var(--radius-md)",
                            padding: "0.875rem 1.25rem",
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "0.875rem",
                            color: "#fbbf24",
                            textAlign: "left",
                        }}
                    >
                        ⚠️ El IPN no publica puntajes mínimos por plantel como la UNAM. Estos datos son
                        estimaciones basadas en la demanda histórica de cada CECyT.
                    </div>

                    {/* Score display */}
                    <div
                        style={{
                            display: "inline-block",
                            background: "linear-gradient(135deg, #2d0a0a, #7f1d1d)",
                            border: "2px solid rgba(248,113,113,0.4)",
                            borderRadius: "var(--radius-xl)",
                            padding: "2rem 3rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <div style={{ fontSize: "5rem", fontWeight: 900, color: "#f87171", lineHeight: 1 }}>
                            {aciertos}
                        </div>
                        <div style={{ color: "rgba(241,245,249,0.6)", fontSize: "1rem" }}>
                            de 128 aciertos ({pct}%)
                        </div>
                    </div>

                    {/* Mini resumen */}
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                        <span className="badge-verde">✅ {verdes} planteles con alta probabilidad</span>
                        <span className="badge-amarillo">⚠️ {amarillos} planteles en el límite</span>
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
                                background: `linear-gradient(to right, #c8282f ${pct}%, #1f2937 ${pct}%)`,
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

                {/* Tabla de resultados */}
                <div className="card">
                    <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#f87171" }}>
                        ⚙️ Los 19 planteles CECyT — estimación orientativa
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {resultados.map((r) => {
                            const color = getLabelColor(r.semaforo);
                            return (
                                <Link
                                    key={r.id}
                                    href={`/ipn/escuelas/${r.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "0.75rem 1rem",
                                            background: `${color}0d`,
                                            border: `1px solid ${color}33`,
                                            borderRadius: "var(--radius-sm)",
                                            transition: "all 0.15s ease",
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: "0.9375rem" }}>{r.nombre}</div>
                                            <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: "0.15rem" }}>
                                                Demanda {r.demanda} · ref. ~{r.referencia} aciertos
                                            </div>
                                        </div>
                                        <span className={getBgClass(r.semaforo)} style={{ fontSize: "0.8125rem", whiteSpace: "nowrap" }}>
                                            {getEmoji(r.semaforo)}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <p style={{ marginTop: "1.25rem", fontSize: "0.8rem", color: "var(--color-text-dim)", textAlign: "center" }}>
                        ✅ = +3 sobre ref. · ⚠️ = ±3 del ref. · ❌ = por debajo · Datos orientativos, no oficiales.
                    </p>
                </div>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ fontSize: "1rem" }}>
                        ⏱️ Practicar con el Simulacro del IPN →
                    </Link>
                </div>
            </div>
        </div>
    );
}
