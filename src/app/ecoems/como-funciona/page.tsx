import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "¿Cómo funciona el proceso ECOEMS 2025? — Asignación sin examen | prepa.chispito.mx",
    description: "Guía completa del proceso ECOEMS 2025 para ingresar al bachillerato sin examen. Fechas clave, cómo registrarse en miderechomilugar.sep.gob.mx y qué documentos necesitas.",
};

const FECHAS = [
    { fecha: "Febrero 2025", evento: "Apertura del registro en miderechomilugar.sep.gob.mx" },
    { fecha: "Marzo 2025", evento: "Cierre del periodo de registro" },
    { fecha: "Abril 2025", evento: "Publicación de resultados de asignación" },
    { fecha: "Mayo 2025", evento: "Periodo de aceptación y trámite de inscripción" },
    { fecha: "Agosto 2025", evento: "Inicio del ciclo escolar 2025-2026" },
];

const DOCUMENTOS = [
    "CURP vigente",
    "Certificado de secundaria (o constancia de terminación de estudios)",
    "Boleta de calificaciones de 2º y 3º de secundaria",
    "Acta de nacimiento",
    "Comprobante de domicilio",
    "2 fotografías tamaño infantil",
    "Correo electrónico activo",
];

const INSTITUCIONES = [
    { nombre: "COLBACH", desc: "Colegio de Bachilleres — 20 planteles en CDMX", href: "/ecoems/escuelas/colbach" },
    { nombre: "CONALEP", desc: "Colegio Nacional de Educación Profesional Técnica", href: "/ecoems/escuelas/conalep-df" },
    { nombre: "CBTis / CETis", desc: "Bachillerato tecnológico federal", href: "/ecoems/escuelas/cbtis" },
    { nombre: "IEMS", desc: "Instituto de Educación Media Superior (CDMX)", href: "/ecoems/escuelas/iems" },
    { nombre: "Prepa en Línea SEP", desc: "Bachillerato 100% en línea gratuito", href: "/ecoems/escuelas/prepa-en-linea-sep" },
    { nombre: "Prepa Abierta SEP", desc: "Sistema Abierto de Bachillerato", href: "/ecoems/escuelas/prepa-abierta-sep" },
];

export default function ComoFuncionaEcoems() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ecoems" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← Sin Examen</Link>
                    <span style={{ fontWeight: 700, color: "#34d399" }}>📋 Cómo funciona ECOEMS</span>
                    <a href="https://miderechomilugar.sep.gob.mx" target="_blank" rel="noopener noreferrer" className="btn btn-ecoems" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Registrarme →
                    </a>
                </div>
            </nav>

            <div className="page-ecoems" style={{ paddingTop: "var(--nav-height)" }}>
                <section style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(5,150,105,0.2) 0%, transparent 60%), var(--color-bg)", padding: "3.5rem 1.5rem 2.5rem", textAlign: "center", borderBottom: "1px solid rgba(5,150,105,0.15)" }}>
                    <div className="container">
                        <h1 style={{ marginBottom: "0.75rem" }}>¿Cómo funciona el proceso ECOEMS 2025?</h1>
                        <p style={{ maxWidth: "580px", margin: "0 auto", fontSize: "1.0625rem" }}>
                            ECOEMS es el sistema de la SEP para asignar lugares en bachillerato a quienes
                            no presentaron (o no quedaron en) el concurso con examen. No es un examen de admisión
                            — es una asignación por promedio y zona.
                        </p>
                    </div>
                </section>

                <div className="container" style={{ maxWidth: "860px", padding: "2.5rem 1.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                        {/* Pasos */}
                        <div>
                            <h2 style={{ color: "#34d399", marginBottom: "1.25rem", fontSize: "1.25rem" }}>
                                📋 Proceso paso a paso
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {[
                                    { n: "1", t: "Entra a miderechomilugar.sep.gob.mx", d: "Es el portal oficial de la SEP. El registro es totalmente gratuito." },
                                    { n: "2", t: "Regístrate con tu CURP", d: "Necesitarás tu CURP, datos de tu secundaria y correo electrónico." },
                                    { n: "3", t: "Elige hasta 6 opciones de institución", d: "Puedes elegir cualquier plantel ECOEMS. Ponlos en orden de preferencia." },
                                    { n: "4", t: "El sistema te asigna un lugar", d: "La asignación considera tu promedio de secundaria y los lugares disponibles." },
                                    { n: "5", t: "Acepta tu lugar e inscríbete", d: "Tienes un plazo para aceptar. Si no aceptas, el lugar se libera." },
                                ].map((p) => (
                                    <div key={p.n} style={{ display: "flex", gap: "0.875rem" }}>
                                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(5,150,105,0.2)", border: "1px solid rgba(52,211,153,0.3)", color: "#34d399", fontWeight: 800, fontSize: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            {p.n}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.2rem" }}>{p.t}</div>
                                            <p style={{ fontSize: "0.8125rem", margin: 0 }}>{p.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Documentos y fechas */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            <div className="card" style={{ borderColor: "rgba(5,150,105,0.15)" }}>
                                <h3 style={{ color: "#34d399", marginBottom: "1rem", fontSize: "1rem" }}>📅 Fechas clave 2025</h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {FECHAS.map((f) => (
                                        <div key={f.fecha} style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 0", borderBottom: "1px solid var(--color-border)" }}>
                                            <span style={{ color: "#34d399", fontWeight: 700, fontSize: "0.8125rem", whiteSpace: "nowrap" }}>{f.fecha}</span>
                                            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem" }}>{f.evento}</span>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: "0.75rem", color: "var(--color-text-dim)", marginTop: "0.75rem" }}>
                                    * Las fechas son aproximadas. Confirma en miderechomilugar.sep.gob.mx
                                </p>
                            </div>

                            <div className="card" style={{ borderColor: "rgba(5,150,105,0.15)" }}>
                                <h3 style={{ color: "#34d399", marginBottom: "1rem", fontSize: "1rem" }}>📄 Documentos que necesitas</h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                                    {DOCUMENTOS.map((d) => (
                                        <div key={d} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                                            <span style={{ color: "#34d399" }}>✓</span>
                                            {d}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instituciones */}
                    <h2 style={{ marginBottom: "1.25rem", color: "#34d399", fontSize: "1.25rem" }}>
                        🏫 Instituciones disponibles en ECOEMS
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
                        {INSTITUCIONES.map((inst) => (
                            <Link key={inst.nombre} href={inst.href} style={{
                                background: "var(--color-bg-card)",
                                border: "1px solid rgba(5,150,105,0.15)",
                                borderRadius: "var(--radius-md)",
                                padding: "1rem 1.125rem",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                            }}>
                                <div style={{ fontWeight: 700, color: "#34d399", marginBottom: "0.375rem" }}>{inst.nombre}</div>
                                <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>{inst.desc}</div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <a href="https://miderechomilugar.sep.gob.mx" target="_blank" rel="noopener noreferrer" className="btn btn-ecoems" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                            🌐 Ir al portal oficial ECOEMS →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
