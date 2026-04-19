"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, Clock, Target, CalendarDays, BookOpen, Brain, Zap } from "lucide-react";
import { useGamification } from "@/hooks/useGamification"; // Optional, si queremos persistir tareas
import { motion } from "framer-motion";

const EXAM_DATE = new Date("2025-06-15T09:00:00"); // Fecha estimada Comipems/UNAM

interface Tarea {
    id: string;
    texto: string;
    tipo: "simulacro" | "temario" | "flashcard";
    link: string;
}

const SEMANAS = [
    {
        numero: 1,
        titulo: "Fundamentos y Diagnóstico",
        tareas: [
            { id: "w1-t1", texto: "Realiza el examen diagnóstico", tipo: "simulacro", link: "/unam/diagnostico" },
            { id: "w1-t2", texto: "Revisa el temario oficial completo", tipo: "temario", link: "/unam/temario" },
            { id: "w1-t3", texto: "Repasa las tarjetas de Español (Mín. 20)", tipo: "flashcard", link: "/unam/flashcards/espanol" },
        ] as Tarea[]
    },
    {
        numero: 2,
        titulo: "Matemáticas y Habilidad Mental",
        tareas: [
            { id: "w2-t1", texto: "Simulador por materia: Habilidad Matemática", tipo: "simulacro", link: "/unam/simulador/habilidad-matematica" },
            { id: "w2-t2", texto: "Domina ecuaciones de 1er y 2do grado", tipo: "temario", link: "/unam/temario/matematicas" },
            { id: "w2-t3", texto: "Repasa 30 flashcards de Historia Universial", tipo: "flashcard", link: "/unam/flashcards/historia" },
        ] as Tarea[]
    },
    {
        numero: 3,
        titulo: "Ciencias Exactas",
        tareas: [
            { id: "w3-t1", texto: "Simulador por materia: Física", tipo: "simulacro", link: "/unam/simulador/fisica" },
            { id: "w3-t2", texto: "Conceptos de Química: Tabla Periódica", tipo: "temario", link: "/unam/temario/quimica" },
            { id: "w3-t3", texto: "Afronta un Mini-Simulador de 64 aciertos", tipo: "simulacro", link: "/unam/simulador" },
        ] as Tarea[]
    },
    {
        numero: 4,
        titulo: "Consolidación Final",
        tareas: [
            { id: "w4-t1", texto: "Haz el Mega Simulacro Cronometrado (128 aciertos)", tipo: "simulacro", link: "/unam/simulador" },
            { id: "w4-t2", texto: "Termina tus repeticiones de Ciencias y Biología", tipo: "flashcard", link: "/unam/flashcards/biologia" },
            { id: "w4-t3", texto: "Calcula tus verdaderas probabilidades en la calculadora", tipo: "temario", link: "/unam/calculadora" },
        ] as Tarea[]
    }
];

export default function MiPlanUnam() {
    const [diasRestantes, setDiasRestantes] = useState(0);
    const [completadas, setCompletadas] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // Cargar tareas guardadas localmente
        const guardadas = localStorage.getItem("chispito_prepa_plan");
        if (guardadas) setCompletadas(JSON.parse(guardadas));

        // Calcular días
        const hoy = new Date();
        const diff = EXAM_DATE.getTime() - hoy.getTime();
        setDiasRestantes(Math.max(0, Math.ceil(diff / (1000 * 3600 * 24))));
    }, []);

    const toggleTarea = (id: string) => {
        const nuevas = { ...completadas, [id]: !completadas[id] };
        setCompletadas(nuevas);
        localStorage.setItem("chispito_prepa_plan", JSON.stringify(nuevas));
    };

    const totalTareas = SEMANAS.reduce((acc, sem) => acc + sem.tareas.length, 0);
    const tareasHechas = Object.values(completadas).filter(Boolean).length;
    const progresoPct = Math.round((tareasHechas / totalTareas) * 100);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← Volver a UNAM
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#38bdf8" }}>Mi Plan de Estudio</span>
                    </div>
                </div>
            </nav>

            <main className="page-unam" style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>

                <section style={{ padding: "3rem 1.5rem 2rem" }}>
                    <div className="container" style={{ maxWidth: "800px" }}>

                        {/* WIDGET TEMPORIZADOR */}
                        <div
                            style={{
                                background: "linear-gradient(135deg, #001a38, #003e7a)",
                                border: "1px solid rgba(56,189,248,0.3)",
                                borderRadius: "var(--radius-lg)",
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                marginBottom: "3rem",
                                boxShadow: "0 10px 30px rgba(0, 74, 147, 0.4)"
                            }}
                        >
                            <CalendarDays size={48} className="mb-4 text-blue-400" />
                            <h2 style={{ color: "white", marginBottom: "0.5rem" }}>El examen de admisión está cerca</h2>
                            <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                                Asumiendo convocatoria oficial UNAM/COMIPEMS en junio 2025.
                            </p>

                            <div style={{ display: "flex", gap: "1.5rem" }}>
                                <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem 2rem", borderRadius: "0.75rem", border: "1px solid rgba(56,189,248,0.2)" }}>
                                    <div style={{ fontSize: "3rem", fontWeight: 900, color: "#38bdf8", lineHeight: 1 }}>{diasRestantes}</div>
                                    <div style={{ fontSize: "0.875rem", color: "var(--color-text-dim)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.5rem" }}>Días restantes</div>
                                </div>
                            </div>
                        </div>

                        {/* WIDGET PROGRESO GLOBAL */}
                        <div style={{ marginBottom: "3rem" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.75rem" }}>
                                <h3 style={{ color: "white" }}>Mi Avance General</h3>
                                <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "1.25rem" }}>{progresoPct}%</span>
                            </div>
                            <div style={{ height: "12px", background: "rgba(255,255,255,0.1)", borderRadius: "999px", overflow: "hidden" }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progresoPct}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    style={{ height: "100%", background: "linear-gradient(90deg, #3b82f6, #38bdf8)" }}
                                />
                            </div>
                            <p style={{ fontSize: "0.875rem", color: "var(--color-text-dim)", marginTop: "0.75rem", textAlign: "right" }}>
                                {tareasHechas} de {totalTareas} tareas completadas
                            </p>
                        </div>

                        {/* LISTA DE TAREAS POR SEMANA */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {SEMANAS.map((semana) => {
                                const completadasEnSemana = semana.tareas.filter(t => completadas[t.id]).length;
                                const semanaHecha = completadasEnSemana === semana.tareas.length;

                                return (
                                    <div
                                        key={semana.numero}
                                        className="card"
                                        style={{
                                            padding: "1.5rem",
                                            border: semanaHecha ? "1px solid rgba(52,211,153,0.3)" : "1px solid var(--color-border)",
                                            background: semanaHecha ? "rgba(52,211,153,0.05)" : "var(--color-bg-card)",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "1rem" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                                <div style={{ background: semanaHecha ? "#34d399" : "#004a93", color: "white", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                                                    {semana.numero}
                                                </div>
                                                <h3 style={{ color: "white", fontSize: "1.125rem", margin: 0 }}>{semana.titulo}</h3>
                                            </div>
                                            <span style={{ fontSize: "0.875rem", color: semanaHecha ? "#34d399" : "var(--color-text-muted)" }}>
                                                {completadasEnSemana}/{semana.tareas.length}
                                            </span>
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                            {semana.tareas.map((tarea) => {
                                                const hecha = completadas[tarea.id];

                                                return (
                                                    <div
                                                        key={tarea.id}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between",
                                                            padding: "1rem",
                                                            borderRadius: "0.5rem",
                                                            background: hecha ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                                                            border: "1px solid transparent",
                                                            borderColor: hecha ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
                                                            opacity: hecha ? 0.6 : 1,
                                                            transition: "all 0.2s"
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                                            <button
                                                                onClick={() => toggleTarea(tarea.id)}
                                                                style={{
                                                                    background: "none",
                                                                    border: "none",
                                                                    cursor: "pointer",
                                                                    color: hecha ? "#34d399" : "var(--color-text-dim)"
                                                                }}
                                                            >
                                                                {hecha ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                                                            </button>

                                                            <div>
                                                                <p style={{ color: "white", margin: 0, fontSize: "1rem", textDecoration: hecha ? "line-through" : "none" }}>{tarea.texto}</p>
                                                                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.25rem" }}>
                                                                    {tarea.tipo === "simulacro" && <Target size={12} />}
                                                                    {tarea.tipo === "temario" && <BookOpen size={12} />}
                                                                    {tarea.tipo === "flashcard" && <Zap size={12} />}
                                                                    {tarea.tipo.toUpperCase()}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {!hecha && (
                                                            <Link href={tarea.link} className="btn-ghost" style={{ fontSize: "0.875rem", padding: "0.4rem 0.8rem", borderRadius: "6px" }}>
                                                                Ir →
                                                            </Link>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
