import type { Metadata } from "next";
import Link from "next/link";
import { PLANTELES_CECYT } from "@/data/schools";

export const metadata: Metadata = {
    title: "19 Planteles CECyT IPN — Especialidades técnicas y admisión 2025",
    description: "Los 19 planteles del CECyT del IPN con sus especialidades técnicas, zona y proceso de admisión. Haz click para ver el detalle de cada plantel.",
};

const AREAS: Record<string, string[]> = {
    "Ciencias Médico-Biológicas": ["cecyt-1", "cecyt-4", "cecyt-6", "cecyt-8", "cecyt-12", "cecyt-15", "cecyt-17"],
    "Industrial": ["cecyt-3", "cecyt-7", "cecyt-11", "cecyt-14", "cecyt-16", "cecyt-19"],
    "Ciencias Sociales y Servicios": ["cecyt-2", "cecyt-5", "cecyt-9", "cecyt-10", "cecyt-13", "cecyt-18"],
};

export default function EscuelasIpn() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link href="/ipn" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>← IPN</Link>
                    <span style={{ fontWeight: 700, color: "#f87171" }}>⚙️ Los 19 CECyT</span>
                    <Link href="/ipn/simulador" className="btn btn-ipn" style={{ padding: "0.4rem 1rem", fontSize: "0.875rem" }}>
                        Hacer Simulacro →
                    </Link>
                </div>
            </nav>

            <div className="page-ipn" style={{ paddingTop: "var(--nav-height)", padding: "var(--nav-height) 1.5rem 3rem" }}>
                <div className="container" style={{ maxWidth: "960px" }}>
                    <div style={{ textAlign: "center", padding: "3rem 0 2.5rem" }}>
                        <h1>19 Planteles CECyT — IPN</h1>
                        <p style={{ maxWidth: "520px", margin: "0.75rem auto 0" }}>
                            Cada CECyT ofrece bachillerato tecnológico con carrera técnica incluida. El examen es el mismo para todos los planteles.
                        </p>
                    </div>

                    {/* Dato de examen */}
                    <div
                        style={{
                            background: "rgba(200,40,47,0.08)",
                            border: "1px solid rgba(200,40,47,0.2)",
                            borderRadius: "var(--radius-lg)",
                            padding: "1.25rem 1.5rem",
                            marginBottom: "2.5rem",
                            display: "flex",
                            gap: "2rem",
                            flexWrap: "wrap",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <div style={{ fontWeight: 700, color: "#f87171" }}>💰 Costo del examen</div>
                            <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>$525 MXN — registro en admision.ipn.mx</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#f87171" }}>📝 Formato del examen</div>
                            <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>128 preguntas — igual que el examen COMIPEMS</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#f87171" }}>🎓 Al terminar</div>
                            <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Título técnico + certificado de bachillerato</div>
                        </div>
                        <Link href="/ipn/simulador" className="btn btn-ipn" style={{ marginLeft: "auto" }}>
                            Practicar el examen →
                        </Link>
                    </div>

                    {/* Grid de todos los CECyT */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                        {PLANTELES_CECYT.map((p) => (
                            <Link
                                key={p.id}
                                href={`/ipn/escuelas/${p.slug}`}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="card"
                                    style={{
                                        borderColor: "rgba(200,40,47,0.15)",
                                        height: "100%",
                                    }}
                                >
                                    <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#f87171", lineHeight: 1 }}>
                                        {p.numero}
                                    </div>
                                    <div style={{ fontWeight: 600, color: "white", marginTop: "0.375rem", fontSize: "0.9375rem" }}>
                                        CECyT {p.numero}
                                    </div>
                                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginTop: "0.25rem", lineHeight: 1.4 }}>
                                        {p.nombreHistorico}
                                    </div>
                                    <div style={{ marginTop: "0.875rem", color: "#fca5a5", fontSize: "0.78rem", fontWeight: 600 }}>
                                        Ver especialidades →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Link href="/ipn/simulador" className="btn btn-ipn" style={{ fontSize: "1rem" }}>
                            ⏱️ Practicar el examen del IPN →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
