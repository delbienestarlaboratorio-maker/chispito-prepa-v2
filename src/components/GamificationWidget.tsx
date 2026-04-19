"use client";

import { useGamification, EMOJIS_NIVEL } from "@/hooks/useGamification";
import { Flame, Trophy, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function GamificationWidget() {
    const gamif = useGamification();

    if (!gamif.loaded) return null; // Esperar a que monte localStorage para evitar mismatch hydration

    return (
        <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "1rem",
            padding: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
            flexWrap: "wrap",
            maxWidth: "600px",
            margin: "0 auto",
            backdropFilter: "blur(10px)"
        }}>
            {/* Racha Diaria */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexDirection: "column", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: gamif.racha > 0 ? "#f97316" : "var(--color-text-dim)" }}>
                    <Flame size={24} fill={gamif.racha > 0 ? "currentColor" : "none"} />
                    <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>{gamif.racha}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Racha (días)</span>
            </div>

            {/* Divisor */}
            <div style={{ width: "1px", height: "40px", background: "rgba(255, 255, 255, 0.1)" }} />

            {/* Nivel y XP */}
            <div style={{ flex: 1, minWidth: "200px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <span style={{ fontSize: "1.125rem" }}>{EMOJIS_NIVEL[gamif.nivel]}</span>
                        <span style={{ fontWeight: 700, color: "white" }}>{gamif.nivel}</span>
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#38bdf8", fontWeight: 600 }}>{gamif.xp} XP</span>
                </div>

                {/* Barra de Progreso XP */}
                <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "999px", overflow: "hidden" }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${gamif.progreso}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ height: "100%", background: "linear-gradient(90deg, #f59e0b, #fcd34d)" }}
                    />
                </div>
                <div style={{ marginTop: "0.375rem", fontSize: "0.75rem", color: "var(--color-text-dim)", textAlign: "left" }}>
                    {gamif.siguiente ? `Faltan ${gamif.xpFalta} XP para ${gamif.siguiente}` : "¡Nivel Máximo Alcanzado!"}
                </div>
            </div>

            {/* Divisor */}
            <div style={{ width: "1px", height: "40px", background: "rgba(255, 255, 255, 0.1)" }} />

            {/* Mejor Puntaje */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexDirection: "column", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: gamif.mejorPuntaje > 0 ? "#10b981" : "var(--color-text-dim)" }}>
                    <Trophy size={20} />
                    <span style={{ fontSize: "1.125rem", fontWeight: 800 }}>{gamif.mejorPuntaje}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Mejor Score</span>
            </div>
        </div>
    );
}
