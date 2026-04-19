import type { Metadata } from "next";
import Link from "next/link";
import { PLANTELES_CCH, PLANTELES_ENP } from "@/data/schools";
import { getPuntajeMinimo } from "@/data/scores";

export const metadata: Metadata = {
    title: "Planteles CCH y ENP UNAM — Puntajes mínimos 2024 | prepa.chispito.mx",
    description: "Los 14 planteles de la UNAM: 5 CCH y 9 ENP con puntajes mínimos históricos verificados 2022-2024. Encuentra el plantel que se ajusta a tu nivel.",
};

export default function EscuelasUnam() {
    const cchConMin = PLANTELES_CCH.map((p) => ({ ...p, minimo: getPuntajeMinimo(p.id) }))
        .sort((a, b) => (a.minimo ?? 0) - (b.minimo ?? 0));
    const enpConMin = PLANTELES_ENP.map((p) => ({ ...p, minimo: getPuntajeMinimo(p.id) }))
        .sort((a, b) => (a.minimo ?? 0) - (b.minimo ?? 0));

    const renderCard = (p: (typeof cchConMin)[0] | (typeof enpConMin)[0], esEnp = false) => {
        const pct = p.minimo ? Math.round((p.minimo / 128) * 100) : 0;
        const color = pct >= 84 ? "#f87171" : pct >= 74 ? "#fbbf24" : "#34d399";
        return (
            <Link key={p.id} href={`/unam/escuelas/${p.slug}`} style={{ textDecoration: "none" }}>
                <div
                    className="card"
                    style={{ borderColor: "rgba(0,102,204,0.2)", transition: "all 0.25s ease" }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.625rem" }}>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: "1rem", color: "#bfdbfe" }}>
                                {esEnp ? `ENP ${(p as any).numero}` : p.nombre}
                            </div>
                            {(p as any).nombreHistorico && (
                                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                                    &ldquo;{(p as any).nombreHistorico}&rdquo;
                                </div>
                            )}
                        </div>
                        {p.minimo && (
                            <span style={{ fontWeight: 800, color, fontSize: "1.125rem", whiteSpace: "nowrap" }}>
                                {p.minimo}/128
                            </span>
                        )}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
                        📍 {p.zona}
                    </div>
                    {p.minimo && (
                        <div className="xp-bar">
                            <div
                                className="xp-bar-fill"
                                style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }}
                            />
                        </div>
                    )}
                    <div style={{ marginTop: "0.75rem", color: "#38bdf8", fontSize: "0.8125rem", fontWeight: 600 }}>
                        Ver detalle completo →
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← UNAM</Link>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>🏫 Planteles CCH y ENP</span>
                    <Link href="/unam/calculadora" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        🧮 Calculadora →
                    </Link>
                </div>
            </nav>

            <div className="page-unam" style={{ paddingTop: "var(--nav-height)", padding: "var(--nav-height) 1.5rem 3rem" }}>
                <div className="container" style={{ maxWidth: "960px" }}>
                    <div style={{ textAlign: "center", padding: "3rem 0 2.5rem" }}>
                        <h1>14 Planteles UNAM</h1>
                        <p style={{ maxWidth: "520px", margin: "0.75rem auto 0" }}>
                            Ordenados de menor a mayor puntaje. Haz click en cualquiera para ver su historial completo.
                        </p>
                    </div>

                    <h2 style={{ color: "#38bdf8", marginBottom: "1.25rem", fontSize: "1.25rem" }}>
                        🏫 CCH — Colegio de Ciencias y Humanidades
                    </h2>
                    <div className="grid-3" style={{ marginBottom: "3rem" }}>
                        {cchConMin.map((p) => renderCard(p, false))}
                    </div>

                    <h2 style={{ color: "#f59e0b", marginBottom: "1.25rem", fontSize: "1.25rem" }}>
                        🏛️ ENP — Escuela Nacional Preparatoria
                    </h2>
                    <div className="grid-3">
                        {enpConMin.map((p) => renderCard(p, true))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Link href="/unam/calculadora" className="btn btn-unam">
                            🧮 ¿Con cuántos aciertos entro? Ver calculadora →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
