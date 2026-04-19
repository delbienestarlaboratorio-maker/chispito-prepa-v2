"use client";

import { useState, useEffect, useCallback } from "react";

export type NivelXP = "Principiante" | "Explorador" | "Guerrero" | "Maestro" | "Leyenda";

export interface GamificationState {
    xp: number;
    nivel: NivelXP;
    racha: number; // días consecutivos de práctica
    ultimaActividad: string | null; // ISO date string
    simulacrosTotales: number;
    mejorPuntaje: number;
    flashcardsVistas: number;
}

const NIVEL_XP: Record<NivelXP, number> = {
    Principiante: 0,
    Explorador: 100,
    Guerrero: 300,
    Maestro: 700,
    Leyenda: 1500,
};

function calcularNivel(xp: number): NivelXP {
    if (xp >= 1500) return "Leyenda";
    if (xp >= 700) return "Maestro";
    if (xp >= 300) return "Guerrero";
    if (xp >= 100) return "Explorador";
    return "Principiante";
}

function xpParaSiguienteNivel(xp: number): { siguiente: NivelXP | null; xpFalta: number; progreso: number } {
    const orden: NivelXP[] = ["Principiante", "Explorador", "Guerrero", "Maestro", "Leyenda"];
    const nivelActual = calcularNivel(xp);
    const idxActual = orden.indexOf(nivelActual);
    if (idxActual === orden.length - 1) return { siguiente: null, xpFalta: 0, progreso: 100 };
    const siguiente = orden[idxActual + 1];
    const xpActual = NIVEL_XP[nivelActual];
    const xpSig = NIVEL_XP[siguiente];
    const progreso = Math.round(((xp - xpActual) / (xpSig - xpActual)) * 100);
    return { siguiente, xpFalta: xpSig - xp, progreso };
}

const INITIAL_STATE: GamificationState = {
    xp: 0,
    nivel: "Principiante",
    racha: 0,
    ultimaActividad: null,
    simulacrosTotales: 0,
    mejorPuntaje: 0,
    flashcardsVistas: 0,
};

const STORAGE_KEY = "chispito_prepa_gamification";

export function useGamification() {
    const [state, setState] = useState<GamificationState>(INITIAL_STATE);
    const [loaded, setLoaded] = useState(false);

    // Cargar desde localStorage al montar
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as GamificationState;
                setState(parsed);
            }
        } catch {
            // Ignorar errores de parsing
        }
        setLoaded(true);
    }, []);

    // Guardar en localStorage cuando cambia el estado
    useEffect(() => {
        if (!loaded) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {
            // Ignorar errores de escritura
        }
    }, [state, loaded]);

    // Actualizar racha al dar XP
    const actualizarRacha = useCallback(() => {
        const hoy = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
        setState((prev) => {
            if (prev.ultimaActividad === hoy) return prev; // ya estudió hoy
            const ayer = new Date();
            ayer.setDate(ayer.getDate() - 1);
            const ayerStr = ayer.toISOString().split("T")[0];
            const nuevaRacha = prev.ultimaActividad === ayerStr ? prev.racha + 1 : 1;
            return { ...prev, racha: nuevaRacha, ultimaActividad: hoy };
        });
    }, []);

    // Dar XP por completar una pregunta
    const xpPorRespuesta = useCallback((correcto: boolean) => {
        const puntos = correcto ? 10 : 2; // 10 XP si correcto, 2 si incorrecto (por intentar)
        actualizarRacha();
        setState((prev) => {
            const nuevoXP = prev.xp + puntos;
            return { ...prev, xp: nuevoXP, nivel: calcularNivel(nuevoXP) };
        });
    }, [actualizarRacha]);

    // Dar XP al terminar un simulacro
    const xpPorSimulacro = useCallback((aciertos: number, total: number) => {
        const pct = aciertos / total;
        const bonus = pct >= 0.8 ? 200 : pct >= 0.6 ? 100 : 50;
        actualizarRacha();
        setState((prev) => {
            const nuevoXP = prev.xp + bonus;
            const nuevoMejor = Math.max(prev.mejorPuntaje, aciertos);
            return {
                ...prev,
                xp: nuevoXP,
                nivel: calcularNivel(nuevoXP),
                simulacrosTotales: prev.simulacrosTotales + 1,
                mejorPuntaje: nuevoMejor,
            };
        });
    }, [actualizarRacha]);

    // Dar XP por ver flashcards
    const xpPorFlashcard = useCallback(() => {
        actualizarRacha();
        setState((prev) => {
            const nuevoXP = prev.xp + 3;
            return {
                ...prev,
                xp: nuevoXP,
                nivel: calcularNivel(nuevoXP),
                flashcardsVistas: prev.flashcardsVistas + 1,
            };
        });
    }, [actualizarRacha]);

    const { siguiente, xpFalta, progreso } = xpParaSiguienteNivel(state.xp);

    return {
        ...state,
        loaded,
        siguiente,
        xpFalta,
        progreso,
        xpPorRespuesta,
        xpPorSimulacro,
        xpPorFlashcard,
        NIVEL_XP,
    };
}

export const EMOJIS_NIVEL: Record<NivelXP, string> = {
    Principiante: "🌱",
    Explorador: "⚡",
    Guerrero: "🔥",
    Maestro: "💎",
    Leyenda: "👑",
};
