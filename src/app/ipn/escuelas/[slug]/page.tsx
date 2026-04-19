import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLANTELES_CECYT } from "@/data/schools";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return PLANTELES_CECYT.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const plantel = PLANTELES_CECYT.find((p) => p.slug === slug);
    if (!plantel) return { title: "Plantel no encontrado" };
    return {
        title: `${plantel.nombre} — Cómo ingresar, especialidades y proceso 2025`,
        description: `Todo sobre el ${plantel.nombre} del IPN: especialidades técnicas, proceso de admisión, costo del examen y qué esperar. Gratis en prepa.chispito.mx`,
        keywords: [`CECyT ${plantel.numero} IPN`, `${plantel.nombreHistorico}`, "examen admisión IPN", "CECyT especialidades técnicas"],
    };
}

const ESPECIALIDADES: Record<string, string[]> = {
    "cecyt-1": ["Técnico en Enfermería General", "Técnico en Administración", "Técnico en Computación"],
    "cecyt-2": ["Técnico en Laboratorista Clínico", "Técnico en Programación", "Técnico en Administración"],
    "cecyt-3": ["Técnico en Mecatrónica", "Técnico en Electrónica", "Técnico en Computación", "Técnico en Administración"],
    "cecyt-4": ["Técnico en Contabilidad", "Técnico en Enfermería General", "Técnico en Computación"],
    "cecyt-5": ["Técnico en Soporte y Mantenimiento de Equipo de Cómputo", "Técnico en Administración", "Técnico en Programación"],
    "cecyt-6": ["Técnico en Laboratorista Clínico", "Técnico en Enfermería General", "Técnico en Mecatrónica", "Técnico en Computación"],
    "cecyt-7": ["Técnico en Telecomunicaciones", "Técnico en Electrónica", "Técnico en Computación"],
    "cecyt-8": ["Técnico en Administración", "Técnico en Enfermería General", "Técnico en Programación"],
    "cecyt-9": ["Técnico en Mecatrónica", "Técnico en Laboratorista Clínico", "Técnico en Computación"],
    "cecyt-10": ["Técnico en Administración", "Técnico en Contabilidad", "Técnico en Programación"],
    "cecyt-11": ["Técnico en Electrónica", "Técnico en Mecatrónica", "Técnico en Soporte y Mantenimiento de Equipo de Cómputo"],
    "cecyt-12": ["Técnico en Administración", "Técnico en Enfermería General", "Técnico en Computación"],
    "cecyt-13": ["Técnico en Programación", "Técnico en Administración", "Técnico en Laboratorista Clínico"],
    "cecyt-14": ["Técnico en Telecomunicaciones", "Técnico en Electrónica", "Técnico en Computación"],
    "cecyt-15": ["Técnico en Administración", "Técnico en Contabilidad", "Técnico en Enfermería General"],
    "cecyt-16": ["Técnico en Mecatrónica", "Técnico en Computación", "Técnico en Administración"],
    "cecyt-17": ["Técnico en Laboratorista Clínico", "Técnico en Programación", "Técnico en Administración"],
    "cecyt-18": ["Técnico en Computación", "Técnico en Administración", "Técnico en Enfermería General"],
    "cecyt-19": ["Técnico en Mecatrónica", "Técnico en Computación", "Técnico en Administración"],
};

const PROCESO_IPN = [
    { paso: "1", titulo: "Regístrate en admision.ipn.mx", desc: "Llena el formulario de pre-inscripción con tus datos de secundaria. El registro es gratuito." },
    { paso: "2", titulo: "Paga el costo del examen ($525 MXN)", desc: "El pago se realiza en bancos autorizados (Banco del Ejército, BBVA, Santander) usando la referencia que te dan al registrarte." },
    { paso: "3", titulo: "Presenta el examen COMIPEMS", desc: "128 preguntas sobre Habilidad Verbal, Habilidad Matemática, Español, Historia, Geografía, Formación Cívica, Matemáticas, Física, Química y Biología." },
    { paso: "4", titulo: "Elige tus opciones de plantel", desc: "Puedes elegir hasta 20 opciones de escuelas del Concurso de Selección (UNAM, IPN, COLBACH, etc.) en orden de preferencia." },
    { paso: "5", titulo: "Espera los resultados", desc: "Los resultados se publican en junioenlinea.mx. Te asignan el plantel más alto de tu lista en el que alcanzó tu puntaje." },
];

export default async function CecytPage({ params }: Props) {
    const { slug } = await params;
    const plantel = PLANTELES_CECYT.find((p) => p.slug === slug);
    if (!plantel) notFound();

    const especialidades = ESPECIALIDADES[plantel.id] ?? plantel.carrerasTecnicas ?? [];
    const otros = PLANTELES_CECYT.filter((p) => p.id !== plantel.id).slice(0, 4);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ipn/escuelas" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                        ← Todos los CECyT
                    </Link>
                    <span style={{ fontWeight: 700, color: "#f87171" }}>⚙️ IPN — CECyT</span>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-ipn" style={{ paddingTop: "var(--nav-height)" }}>
                {/* HERO */}
                <section
                    style={{
                        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,40,47,0.25) 0%, transparent 70%), var(--color-bg)",
                        padding: "3.5rem 1.5rem 2.5rem",
                        borderBottom: "1px solid rgba(200,40,47,0.15)",
                    }}
                >
                    <div className="container" style={{ maxWidth: "860px" }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(200,40,47,0.12)",
                                border: "1px solid rgba(248,113,113,0.25)",
                                borderRadius: "999px",
                                padding: "0.3rem 0.875rem",
                                fontSize: "0.8125rem",
                                color: "#f87171",
                                marginBottom: "1.25rem",
                                fontWeight: 500,
                            }}
                        >
                            ⚙️ IPN · CECyT {plantel.numero}
                        </div>

                        <h1 style={{ marginBottom: "0.625rem", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                            {plantel.nombre}
                        </h1>
                        <p style={{ maxWidth: "680px", fontSize: "1rem", marginBottom: "1.75rem" }}>
                            {plantel.descripcion}
                        </p>

                        {/* Datos clave */}
                        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                            {[
                                { icon: "📍", label: "Zona", value: plantel.zona },
                                { icon: "⏰", label: "Turnos", value: plantel.turno.join(" / ") },
                                { icon: "🎓", label: "Duración", value: plantel.duracion },
                                { icon: "💰", label: "Costo examen", value: "$525 MXN" },
                            ].map((d) => (
                                <div
                                    key={d.label}
                                    style={{
                                        background: "rgba(200,40,47,0.08)",
                                        border: "1px solid rgba(200,40,47,0.2)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.75rem 1rem",
                                    }}
                                >
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                                        {d.icon} {d.label}
                                    </div>
                                    <div style={{ fontWeight: 700, color: "#fca5a5", fontSize: "0.9375rem" }}>{d.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container" style={{ maxWidth: "860px", padding: "2.5rem 1.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                        {/* Especialidades técnicas */}
                        <div className="card">
                            <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#f87171" }}>
                                🛠️ Especialidades técnicas
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                {especialidades.map((e) => (
                                    <div
                                        key={e}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.625rem 0.875rem",
                                            background: "rgba(200,40,47,0.07)",
                                            borderRadius: "var(--radius-sm)",
                                            border: "1px solid rgba(200,40,47,0.15)",
                                        }}
                                    >
                                        <span style={{ color: "#f87171", fontWeight: 700, fontSize: "0.875rem" }}>✓</span>
                                        <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{e}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                                Al terminar el CECyT obtienes título y cédula profesional de técnico, además del certificado de bachillerato.
                            </p>
                        </div>

                        {/* Proceso de admisión */}
                        <div className="card">
                            <h2 style={{ fontSize: "1.125rem", marginBottom: "1.25rem", color: "#f87171" }}>
                                📋 Proceso de admisión 2025
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                {PROCESO_IPN.map((paso) => (
                                    <div key={paso.paso} style={{ display: "flex", gap: "0.875rem" }}>
                                        <div
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                background: "rgba(200,40,47,0.2)",
                                                border: "1px solid rgba(248,113,113,0.3)",
                                                color: "#f87171",
                                                fontWeight: 800,
                                                fontSize: "0.8125rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                marginTop: "2px",
                                            }}
                                        >
                                            {paso.paso}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{paso.titulo}</div>
                                            <p style={{ fontSize: "0.8125rem", margin: 0, lineHeight: 1.5 }}>{paso.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ¿Qué sigue? */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #2d0a0a, #7f1d1d)",
                            border: "1px solid rgba(200,40,47,0.3)",
                            borderRadius: "var(--radius-xl)",
                            padding: "2rem",
                            textAlign: "center",
                            marginTop: "2rem",
                        }}
                    >
                        <h2 style={{ marginBottom: "0.75rem", fontSize: "1.25rem" }}>
                            ¿Ya sabes que quieres el CECyT {plantel.numero}?
                        </h2>
                        <p style={{ marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                            Empieza a prepararte ahora. El examen es el mismo para todos los planteles CECyT.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/ipn/simulador" className="btn btn-ipn">
                                ⏱️ Hacer Simulacro Completo
                            </Link>
                            <Link href="/ipn/calculadora" className="btn btn-ghost">
                                🧮 Ver Calculadora de Puntajes
                            </Link>
                        </div>
                    </div>

                    {/* Otros planteles */}
                    <div style={{ marginTop: "2.5rem" }}>
                        <h3 style={{ marginBottom: "1rem", color: "var(--color-text-muted)", fontSize: "1rem" }}>
                            Otros planteles CECyT
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
                            {otros.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/ipn/escuelas/${p.slug}`}
                                    style={{
                                        background: "var(--color-bg-card)",
                                        border: "1px solid rgba(200,40,47,0.15)",
                                        borderRadius: "var(--radius-md)",
                                        padding: "0.875rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    <div style={{ fontWeight: 700, color: "#f87171", fontSize: "0.9375rem" }}>
                                        CECyT {p.numero}
                                    </div>
                                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                                        {p.nombreHistorico}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* JSON-LD SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: plantel.nombre,
                        description: plantel.descripcion,
                        url: `https://prepa.chispito.mx/ipn/escuelas/${plantel.slug}`,
                        parentOrganization: {
                            "@type": "EducationalOrganization",
                            name: "Instituto Politécnico Nacional",
                            url: "https://www.ipn.mx",
                        },
                    }),
                }}
            />
        </>
    );
}
