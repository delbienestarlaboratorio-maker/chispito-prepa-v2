import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLANTELES_CCH, PLANTELES_ENP } from "@/data/schools";
import { PUNTAJES_HISTORICOS, getPuntajeMinimo } from "@/data/scores";

type Props = { params: Promise<{ slug: string }> };

const TODOS = [...PLANTELES_CCH, ...PLANTELES_ENP];

export async function generateStaticParams() {
    return TODOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const plantel = TODOS.find((p) => p.slug === slug);
    if (!plantel) return { title: "Plantel no encontrado" };
    const minimo = getPuntajeMinimo(plantel.id);
    return {
        title: `${plantel.nombre} — Puntaje mínimo 2024 y cómo ingresar | prepa.chispito.mx`,
        description: `Guía completa para entrar al ${plantel.nombre}. Puntaje mínimo histórico ${minimo ? `de ${minimo}/128 aciertos` : ""}, plan de estudios, pase reglamentado y proceso de admisión 2025.`,
        keywords: [plantel.nombre, `${plantel.nombre} puntaje mínimo`, `${plantel.nombre} cuántos aciertos`, "examen UNAM bachillerato 2025"],
    };
}

const PLANES_ESTUDIO: Record<string, { semestre: number; materias: string[] }[]> = {
    default: [
        { semestre: 1, materias: ["Taller de Cómputo", "Matemáticas I", "Historia Universal I", "Literatura I", "Biología I", "Física I", "Química I"] },
        { semestre: 2, materias: ["Taller de Redacción I", "Matemáticas II", "Historia Universal II", "Literatura II", "Biología II", "Física II", "Química II"] },
        { semestre: 3, materias: ["Taller de Redacción II", "Matemáticas III", "Historia de México I", "Filosofía I", "Biología III", "Física III", "Química III"] },
        { semestre: 4, materias: ["Taller de Comunicación", "Matemáticas IV", "Historia de México II", "Filosofía II", "Optativa I", "Física IV", "Química IV"] },
        { semestre: 5, materias: ["Taller de Investigación I", "Álgebra o Estadística", "Ciencias Políticas", "Optativa II", "Optativa III", "Ciencias de la Salud"] },
        { semestre: 6, materias: ["Taller de Investigación II", "Probabilidad y Estadística", "Economía", "Optativa IV", "Optativa V", "Expresión y Apreciación Artística"] },
    ],
};

const CARRERAS_UNAM = ["Medicina", "Derecho", "Ingeniería", "Arquitectura", "Psicología", "Administración", "Economía", "Comunicación", "Informática", "Ciencias Políticas"];

export default async function UnamPlantelPage({ params }: Props) {
    const { slug } = await params;
    const plantel = TODOS.find((p) => p.slug === slug);
    if (!plantel) notFound();

    const esCCH = plantel.institucion === "cch";
    const minimo = getPuntajeMinimo(plantel.id);
    const historico = PUNTAJES_HISTORICOS.find((p) => p.plantelId === plantel.id);
    const planEstudio = PLANES_ESTUDIO.default;

    const otrosMismoTipo = TODOS.filter(
        (p) => p.id !== plantel.id && p.institucion === plantel.institucion
    ).slice(0, 4);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/unam/escuelas" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← {esCCH ? "Todos los CCH" : "Todos los ENP"}
                    </Link>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>🏛️ UNAM</span>
                    <Link href="/unam/simulador" className="btn btn-unam" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-unam" style={{ paddingTop: "var(--nav-height)" }}>
                {/* HERO */}
                <section
                    style={{
                        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,74,147,0.3) 0%, transparent 70%), var(--color-bg)",
                        padding: "3.5rem 1.5rem 2.5rem",
                        borderBottom: "1px solid rgba(0,102,204,0.15)",
                    }}
                >
                    <div className="container" style={{ maxWidth: "900px" }}>
                        <div
                            style={{
                                display: "inline-flex",
                                gap: "0.5rem",
                                background: "rgba(0,74,147,0.12)",
                                border: "1px solid rgba(56,189,248,0.25)",
                                borderRadius: "999px",
                                padding: "0.3rem 0.875rem",
                                fontSize: "0.8125rem",
                                color: "#38bdf8",
                                marginBottom: "1.25rem",
                                fontWeight: 500,
                            }}
                        >
                            🏛️ UNAM · {esCCH ? "CCH" : "ENP"}
                            {plantel.numero && ` · Plantel ${plantel.numero}`}
                        </div>

                        <h1 style={{ marginBottom: "0.625rem", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                            {plantel.nombre}
                            {plantel.nombreHistorico && (
                                <span style={{ display: "block", color: "#93c5fd", fontSize: "0.55em", fontWeight: 500, marginTop: "0.25rem" }}>
                                    &ldquo;{plantel.nombreHistorico}&rdquo;
                                </span>
                            )}
                        </h1>

                        <p style={{ maxWidth: "700px", fontSize: "1rem", marginBottom: "1.75rem" }}>
                            {plantel.descripcion}
                        </p>

                        {/* Datos clave */}
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            {[
                                { icon: "📍", label: "Zona", value: plantel.zona },
                                { icon: "⏰", label: "Turno", value: plantel.turno.join(" / ") },
                                { icon: "🎓", label: "Duración", value: plantel.duracion },
                                ...(minimo ? [{ icon: "🎯", label: "Mínimo 2024", value: `${minimo}/128` }] : []),
                                { icon: "✅", label: "Pase Reglamentado", value: "Incluido" },
                            ].map((d) => (
                                <div
                                    key={d.label}
                                    style={{
                                        background: "rgba(0,74,147,0.1)",
                                        border: "1px solid rgba(0,102,204,0.2)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.75rem 1rem",
                                    }}
                                >
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                                        {d.icon} {d.label}
                                    </div>
                                    <div style={{ fontWeight: 700, color: "#93c5fd", fontSize: "0.9375rem" }}>{d.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container" style={{ maxWidth: "900px", padding: "2.5rem 1.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>

                        {/* Puntajes históricos */}
                        {historico && (
                            <div className="card">
                                <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#38bdf8" }}>
                                    📊 Puntajes mínimos históricos
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                    {historico.registros
                                        .slice()
                                        .sort((a, b) => b.anio - a.anio)
                                        .map((r) => {
                                            const pct = Math.round((r.minimo / 128) * 100);
                                            const color = pct >= 84 ? "#f87171" : pct >= 78 ? "#fbbf24" : "#34d399";
                                            return (
                                                <div key={r.anio}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                                                        <span style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>{r.anio}</span>
                                                        <span style={{ fontWeight: 700, color }}>{r.minimo}/128 — {pct}%</span>
                                                    </div>
                                                    <div className="xp-bar">
                                                        <div className="xp-bar-fill" style={{ width: `${pct}%`, background: color }} />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                                <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                                    Datos de convocatorias oficiales UNAM. La tendencia puede variar cada ciclo.
                                </p>
                            </div>
                        )}

                        {/* Pase reglamentado */}
                        <div className="card">
                            <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#38bdf8" }}>
                                🎓 Pase Reglamentado UNAM
                            </h2>
                            <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                                Si egresás de este plantel con promedio ≥ 7.0 y en el tiempo reglamentario
                                (3 años), tienes derecho a Pase Reglamentado a cualquier carrera de la UNAM.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {CARRERAS_UNAM.slice(0, 6).map((c) => (
                                    <div
                                        key={c}
                                        style={{
                                            padding: "0.5rem 0.875rem",
                                            background: "rgba(0,74,147,0.08)",
                                            border: "1px solid rgba(0,102,204,0.15)",
                                            borderRadius: "var(--radius-sm)",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        🎓 {c}
                                    </div>
                                ))}
                                <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                                    + más de 100 carreras disponibles en la UNAM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Plan de estudios */}
                    <div className="card" style={{ marginTop: "1.5rem" }}>
                        <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#38bdf8" }}>
                            📚 Plan de estudios — 6 semestres
                        </h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
                            {planEstudio.map((sem) => (
                                <div
                                    key={sem.semestre}
                                    style={{
                                        background: "rgba(0,74,147,0.06)",
                                        border: "1px solid rgba(0,102,204,0.12)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.875rem",
                                    }}
                                >
                                    <div style={{ fontWeight: 700, color: "#38bdf8", fontSize: "0.875rem", marginBottom: "0.625rem" }}>
                                        Semestre {sem.semestre}
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                        {sem.materias.map((m) => (
                                            <div key={m} style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                                                · {m}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #001a38, #003e7a)",
                            border: "1px solid rgba(0,102,204,0.3)",
                            borderRadius: "var(--radius-xl)",
                            padding: "2rem",
                            textAlign: "center",
                            marginTop: "2rem",
                        }}
                    >
                        <h2 style={{ marginBottom: "0.75rem", fontSize: "1.25rem" }}>
                            ¿Ya sabes que quieres este plantel?
                        </h2>
                        {minimo && (
                            <p style={{ marginBottom: "1.5rem", color: "#93c5fd" }}>
                                Necesitas al menos <strong style={{ color: "white" }}>{minimo} aciertos</strong> de 128. Verifica tu nivel ahora.
                            </p>
                        )}
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/unam/simulador" className="btn btn-unam">
                                ⏱️ Hacer Simulacro
                            </Link>
                            <Link href="/unam/calculadora" className="btn btn-ghost">
                                🧮 Calculadora de Puntajes
                            </Link>
                        </div>
                    </div>

                    {/* Otros planteles */}
                    {otrosMismoTipo.length > 0 && (
                        <div style={{ marginTop: "2.5rem" }}>
                            <h3 style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                                Otros planteles {esCCH ? "CCH" : "ENP"}
                            </h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
                                {otrosMismoTipo.map((p) => {
                                    const min = getPuntajeMinimo(p.id);
                                    return (
                                        <Link
                                            key={p.id}
                                            href={`/unam/escuelas/${p.slug}`}
                                            style={{
                                                background: "var(--color-bg-card)",
                                                border: "1px solid rgba(0,102,204,0.15)",
                                                borderRadius: "var(--radius-md)",
                                                padding: "0.875rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <div style={{ fontWeight: 700, color: "#38bdf8", fontSize: "0.9375rem" }}>
                                                {esCCH ? p.nombre : `ENP ${p.numero}`}
                                            </div>
                                            {!esCCH && (
                                                <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                                                    {p.nombreHistorico}
                                                </div>
                                            )}
                                            {min && (
                                                <div style={{ color: "#bfdbfe", fontSize: "0.8rem", marginTop: "0.375rem", fontWeight: 600 }}>
                                                    Mín: {min}/128
                                                </div>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: plantel.nombre,
                        description: plantel.descripcion,
                        url: `https://prepa.chispito.mx/unam/escuelas/${plantel.slug}`,
                        parentOrganization: {
                            "@type": "EducationalOrganization",
                            name: "Universidad Nacional Autónoma de México",
                            url: "https://www.unam.mx",
                        },
                    }),
                }}
            />
        </>
    );
}
