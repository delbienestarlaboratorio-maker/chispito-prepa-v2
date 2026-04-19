"use client";

import { useState } from "react";
import Link from "next/link";
import { PLANTELES_ECOEMS } from "@/data/schools";
import { motion, AnimatePresence } from "framer-motion";

export default function EcoemsCalculadoraPage() {
    const [promedio, setPromedio] = useState<number>(8.0);
    const [zona, setZona] = useState<string>("CDMX");
    const [calculado, setCalculado] = useState(false);

    // Simular recomendación basada en promedio y zona:
    // En la vida real ECOEMS no exige examen, pero prioriza los lugares atractivos
    // a los promedios más altos.
    const getProbabilidades = () => {
        return PLANTELES_ECOEMS.map(plantel => {
            // Asignar un "score" base de demanda por su nombre o tipo
            let demanda = 7.0;
            if (plantel.nombre.includes("Colbach")) demanda = 8.5;
            if (plantel.nombre.includes("CBTis") || plantel.nombre.includes("CETIS")) demanda = 8.0;
            if (plantel.nombre.includes("CONALEP")) demanda = 7.5;
            if (plantel.nombre.includes("IEMS")) demanda = 7.0;

            // Penalización moderada si su zona general no coindice
            const zonaMatches = plantel.zona.includes(zona) || plantel.zona === "Nacional";

            // Lógica sencilla de probabilidad
            let probabilidad = "Baja";
            let color = "#ef4444"; // rojo

            if (promedio >= demanda && zonaMatches) {
                probabilidad = "Alta";
                color = "#34d399"; // verde
            } else if (promedio >= demanda - 1.0) {
                probabilidad = "Media";
                color = "#fbbf24"; // amarillo
            } else if (!zonaMatches && promedio >= 9.0) {
                probabilidad = "Media"; // lejos pero buen promedio
                color = "#fbbf24";
            }

            return { plantel, probabilidad, color, zonaMatches };
        }).sort((a, b) => {
            // Ordenar por probabilidad (Alta primero)
            const mapOrder: Record<string, number> = { "Alta": 1, "Media": 2, "Baja": 3 };
            return mapOrder[a.probabilidad] - mapOrder[b.probabilidad];
        });
    };

    const resultados = getProbabilidades();

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ecoems" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Volver a ECOEMS</Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#34d399" }}>Calculadora Promedio</span>
                    </div>
                </div>
            </nav>

            <main className="page-ecoems" style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
                <section style={{ padding: "3rem 1.5rem" }}>
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div style={{ textAlign: "center", mb: "2rem" }}>
                            <h1 style={{ color: "white", marginBottom: "1rem" }}>
                                Asignación <span style={{ color: "#34d399" }}>ECOEMS</span>
                            </h1>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "1.0625rem", marginBottom: "3rem" }}>
                                El sistema te asignará una escuela cercana a tu zona dependiendo de tu promedio final de secundaria.
                                Descubre tus opciones más seguras.
                            </p>
                        </div>

                        {/* PANEL DE CONTROLES */}
                        <div className="card" style={{ padding: "2rem", marginBottom: "3rem", border: "1px solid rgba(5,150,105,0.3)", background: "rgba(5,150,105,0.05)" }}>

                            <div style={{ marginBottom: "2rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                    <label style={{ color: "white", fontWeight: 600 }}>Mi promedio general de secundaria:</label>
                                    <span style={{ color: "#34d399", fontWeight: 800, fontSize: "1.25rem" }}>{promedio.toFixed(1)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="6.0"
                                    max="10.0"
                                    step="0.1"
                                    value={promedio}
                                    onChange={(e) => setPromedio(parseFloat(e.target.value))}
                                    style={{ width: "100%", accentColor: "#34d399" }}
                                />
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--color-text-dim)", marginTop: "0.5rem" }}>
                                    <span>6.0</span>
                                    <span>10.0</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: "2rem" }}>
                                <label style={{ display: "block", color: "white", fontWeight: 600, marginBottom: "0.75rem" }}>
                                    Zona principal donde viviré:
                                </label>
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                    {["CDMX", "Estado de México"].map(z => (
                                        <button
                                            key={z}
                                            onClick={() => setZona(z)}
                                            style={{
                                                padding: "0.75rem 1.5rem",
                                                borderRadius: "0.5rem",
                                                border: zona === z ? "2px solid #34d399" : "2px solid var(--color-border)",
                                                background: zona === z ? "rgba(5,150,105,0.2)" : "rgba(255,255,255,0.05)",
                                                color: zona === z ? "white" : "var(--color-text-muted)",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                transition: "all 0.2s"
                                            }}
                                        >
                                            {z}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setCalculado(true)}
                                className="btn btn-ecoems"
                                style={{ width: "100%", padding: "1rem", fontSize: "1.125rem" }}
                            >
                                🔍 Ver mis posibilidades de asignación
                            </button>
                        </div>

                        {/* RESULTADOS */}
                        <AnimatePresence>
                            {calculado && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="resultados-container"
                                >
                                    <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "white" }}>
                                        Opciones para promedio <strong style={{ color: "#34d399" }}>{promedio.toFixed(1)}</strong>
                                    </h2>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        {resultados.slice(0, 10).map((r, i) => ( // Mostrar un top 10
                                            <Link key={i} href={`/ecoems/escuelas/${r.plantel.slug}`} style={{ textDecoration: "none" }}>
                                                <div
                                                    style={{
                                                        background: "var(--color-bg-card)",
                                                        border: `1px solid ${r.color}50`,
                                                        borderRadius: "0.75rem",
                                                        padding: "1.25rem",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        transition: "transform 0.2s",
                                                    }}
                                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                                    onMouseLeave={e => e.currentTarget.style.transform = "none"}
                                                >
                                                    <div>
                                                        <h3 style={{ color: "white", fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                                                            {r.plantel.nombre}
                                                        </h3>
                                                        <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", display: "flex", gap: "1rem" }}>
                                                            <span>📍 {r.plantel.zona}</span>
                                                            <span>⏱️ {r.plantel.duracion}</span>
                                                        </div>
                                                    </div>
                                                    <div style={{ textAlign: "right" }}>
                                                        <div
                                                            style={{
                                                                background: `${r.color}20`,
                                                                color: r.color,
                                                                padding: "0.25rem 0.75rem",
                                                                borderRadius: "999px",
                                                                fontSize: "0.875rem",
                                                                fontWeight: 700,
                                                                display: "inline-block",
                                                                marginBottom: "0.25rem"
                                                            }}
                                                        >
                                                            Probabilidad {r.probabilidad}
                                                        </div>
                                                        {!r.zonaMatches && (
                                                            <div style={{ fontSize: "0.75rem", color: "#fbbf24" }}>Fuera de tu zona</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </section>
            </main>
        </>
    );
}
