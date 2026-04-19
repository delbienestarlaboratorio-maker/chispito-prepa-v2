// ================================================
// DATOS DE ESCUELAS — prepa.chispito.mx
// Fuente: datos oficiales UNAM, IPN y ECOEMS
// ================================================

export type Plantel = {
    id: string;
    nombre: string;
    slug: string;
    institucion: "cch" | "enp" | "cecyt" | "colbach" | "conalep" | "cbtis" | "iems" | "prepa-linea" | "prepa-abierta";
    tipo: "con-examen" | "sin-examen";
    numero?: number;
    nombreHistorico?: string; // ej. "Antonio Caso"
    zona: string;
    turno: ("matutino" | "vespertino" | "nocturno")[];
    descripcion: string;
    duracion: string;
    paseReglamentado: boolean;
    carrerasTecnicas?: string[];
    enlaceOficial: string;
};

// ================================================
// CCH — Colegio de Ciencias y Humanidades (UNAM)
// ================================================
export const PLANTELES_CCH: Plantel[] = [
    {
        id: "cch-azcapotzalco",
        nombre: "CCH Azcapotzalco",
        slug: "cch-azcapotzalco",
        institucion: "cch",
        tipo: "con-examen",
        zona: "Azcapotzalco, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El Colegio de Ciencias y Humanidades plantel Azcapotzalco forma parte del sistema de bachillerato de la UNAM. Con un modelo educativo centrado en 'aprender a aprender', prepara a los estudiantes para continuar estudios universitarios con Pase Reglamentado.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.cch.unam.mx/plantelazcapotzalco",
    },
    {
        id: "cch-naucalpan",
        nombre: "CCH Naucalpan",
        slug: "cch-naucalpan",
        institucion: "cch",
        tipo: "con-examen",
        zona: "Naucalpan, Estado de México",
        turno: ["matutino", "vespertino"],
        descripcion: "El CCH Naucalpan es el plantel con el puntaje de ingreso más accesible del sistema CCH-UNAM. Ubicado en el Estado de México, es ideal para estudiantes de la zona norte del Valle de México.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.cch.unam.mx/plantelnaucalpan",
    },
    {
        id: "cch-oriente",
        nombre: "CCH Oriente",
        slug: "cch-oriente",
        institucion: "cch",
        tipo: "con-examen",
        zona: "Iztapalapa, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El CCH Oriente atiende a estudiantes de las delegaciones del oriente de la Ciudad de México. Es uno de los planteles de mayor demanda dentro del sistema CCH.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.cch.unam.mx/planteloriente",
    },
    {
        id: "cch-sur",
        nombre: "CCH Sur",
        slug: "cch-sur",
        institucion: "cch",
        tipo: "con-examen",
        zona: "Coyoacán, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El CCH Sur es históricamente el plantel más competido del sistema CCH. Ubicado en Coyoacán, cerca de Ciudad Universitaria, es la primera opción de miles de aspirantes cada año.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.cch.unam.mx/plantelsur",
    },
    {
        id: "cch-vallejo",
        nombre: "CCH Vallejo",
        slug: "cch-vallejo",
        institucion: "cch",
        tipo: "con-examen",
        zona: "Gustavo A. Madero, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El CCH Vallejo atiende principalmente a estudiantes de la zona norte de la CDMX. Su puntaje de ingreso ha ido en aumento en los últimos años.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.cch.unam.mx/plantelVallejo",
    },
];

// ================================================
// ENP — Escuela Nacional Preparatoria (UNAM)
// ================================================
export const PLANTELES_ENP: Plantel[] = [
    {
        id: "enp-1",
        nombre: 'ENP 1 "Gabino Barreda"',
        slug: "enp-1-gabino-barreda",
        institucion: "enp",
        tipo: "con-examen",
        numero: 1,
        nombreHistorico: "Gabino Barreda",
        zona: "Cuauhtémoc, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 1 de la ENP, nombrado en honor al fundador de la Preparatoria Nacional, es uno de los más antiguos del sistema UNAM.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel1",
    },
    {
        id: "enp-2",
        nombre: 'ENP 2 "Erasmo Castellanos Quinto"',
        slug: "enp-2-erasmo-castellanos",
        institucion: "enp",
        tipo: "con-examen",
        numero: 2,
        nombreHistorico: "Erasmo Castellanos Quinto",
        zona: "Coyoacán, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 2 de la ENP es uno de los más competidos del sistema, con un puntaje mínimo históricamente alto.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel2",
    },
    {
        id: "enp-3",
        nombre: 'ENP 3 "Justo Sierra"',
        slug: "enp-3-justo-sierra",
        institucion: "enp",
        tipo: "con-examen",
        numero: 3,
        nombreHistorico: "Justo Sierra",
        zona: "Tlalpan, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 3, nombrado en honor al promotor de la UNAM, atiende a estudiantes del sur de la Ciudad de México.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel3",
    },
    {
        id: "enp-4",
        nombre: 'ENP 4 "Vidal Castañeda y Nájera"',
        slug: "enp-4-vidal-castaneda",
        institucion: "enp",
        tipo: "con-examen",
        numero: 4,
        nombreHistorico: "Vidal Castañeda y Nájera",
        zona: "Xochimilco, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 4 de la ENP es el más accesible en cuanto a puntaje de ingreso dentro del sistema ENP, con un mínimo de 96-97 aciertos.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel4",
    },
    {
        id: "enp-5",
        nombre: 'ENP 5 "José Vasconcelos"',
        slug: "enp-5-jose-vasconcelos",
        institucion: "enp",
        tipo: "con-examen",
        numero: 5,
        nombreHistorico: "José Vasconcelos",
        zona: "Iztapalapa, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 5, en honor al gran impulsor de la educación en México, atiende a estudiantes del oriente de la CDMX.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel5",
    },
    {
        id: "enp-6",
        nombre: 'ENP 6 "Antonio Caso"',
        slug: "enp-6-antonio-caso",
        institucion: "enp",
        tipo: "con-examen",
        numero: 6,
        nombreHistorico: "Antonio Caso",
        zona: "Miguel Hidalgo, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 6 es históricamente el más competido de toda la ENP y de todo el bachillerato UNAM, exigiendo hasta 113 aciertos de 128 posibles.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel6",
    },
    {
        id: "enp-7",
        nombre: 'ENP 7 "Ezequiel A. Chávez"',
        slug: "enp-7-ezequiel-chavez",
        institucion: "enp",
        tipo: "con-examen",
        numero: 7,
        nombreHistorico: "Ezequiel A. Chávez",
        zona: "Iztacalco, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 7 atiende a estudiantes del área oriente de la CDMX con un puntaje de ingreso de alrededor de 100 aciertos.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel7",
    },
    {
        id: "enp-8",
        nombre: 'ENP 8 "Miguel E. Schulz"',
        slug: "enp-8-miguel-schulz",
        institucion: "enp",
        tipo: "con-examen",
        numero: 8,
        nombreHistorico: "Miguel E. Schulz",
        zona: "Cuauhtémoc, CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 8, ubicado en el centro de la ciudad, tiene un puntaje de ingreso de alrededor de 98 aciertos.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel8",
    },
    {
        id: "enp-9",
        nombre: 'ENP 9 "Pedro de Alba"',
        slug: "enp-9-pedro-de-alba",
        institucion: "enp",
        tipo: "con-examen",
        numero: 9,
        nombreHistorico: "Pedro de Alba",
        zona: "Naucalpan, Estado de México",
        turno: ["matutino", "vespertino"],
        descripcion: "El plantel 9, el más reciente de la ENP, es el segundo más competido del sistema con un puntaje mínimo de 110 aciertos.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: true,
        enlaceOficial: "https://www.enp.unam.mx/plantel9",
    },
];

// ================================================
// CECyT — IPN (19 planteles)
// ================================================
const CECYT_NOMBRES: Record<number, string> = {
    1: "González Vázquez Vela",
    2: "Miguel Bernard",
    3: "Estanislao Ramírez Ruiz",
    4: "Lázaro Cárdenas",
    5: "Benito Juárez García",
    6: "Miguel Othón de Mendizábal",
    7: "Cuauhtémoc",
    8: "Narciso Bassols García",
    9: "Juan de Dios Bátiz",
    10: "Carlos Vallejo Márquez",
    11: "Wilfrido Massieu",
    12: "José María Morelos y Pavón",
    13: "Ricardo Flores Magón",
    14: "Luis Enrique Erro",
    15: "Diódoro Antúnez Echegaray",
    16: "Hidalgo",
    17: "Río de la Loza",
    18: "Cecyt 18",
    19: "Cecyt 19",
};

export const PLANTELES_CECYT: Plantel[] = Array.from({ length: 19 }, (_, i) => {
    const num = i + 1;
    return {
        id: `cecyt-${num}`,
        nombre: `CECyT ${num} "${CECYT_NOMBRES[num]}"`,
        slug: `cecyt-${num}`,
        institucion: "cecyt" as const,
        tipo: "con-examen" as const,
        numero: num,
        nombreHistorico: CECYT_NOMBRES[num],
        zona: "CDMX / Estado de México",
        turno: ["matutino", "vespertino"],
        descripcion: `El Centro de Estudios Científicos y Tecnológicos ${num} del IPN ofrece bachillerato tecnológico con carrera técnica incluida, preparando a los estudiantes tanto para el mundo laboral como para continuar en el IPN.`,
        duracion: "3 años (6 semestres)",
        paseReglamentado: false,
        carrerasTecnicas: ["Técnico en Laboratorista Clínico", "Técnico en Informática", "Técnico en Administración", "Técnico en Enfermería General"],
        enlaceOficial: "https://www.ipn.mx/cecyt/",
    };
});

// ================================================
// ECOEMS — Sin Examen
// ================================================
export const PLANTELES_ECOEMS: Plantel[] = [
    {
        id: "colbach",
        nombre: "Colegio de Bachilleres (Colbach)",
        slug: "colbach",
        institucion: "colbach",
        tipo: "sin-examen",
        zona: "CDMX — 20 planteles",
        turno: ["matutino", "vespertino", "nocturno"],
        descripcion: "El Colegio de Bachilleres es una de las instituciones de educación media superior más grandes de la CDMX, con 20 planteles distribuidos en todas las alcaldías. Ofrece bachillerato general sin examen de admisión bajo el sistema ECOEMS.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: false,
        enlaceOficial: "https://www.colbach.edu.mx",
    },
    {
        id: "conalep",
        nombre: "CONALEP — Colegio Nacional de Educación Profesional Técnica",
        slug: "conalep",
        institucion: "conalep",
        tipo: "sin-examen",
        zona: "CDMX — 27 planteles / Nacional — 313 planteles",
        turno: ["matutino", "vespertino"],
        descripcion: "CONALEP forma Profesionales Técnicos-Bachiller con 47 carreras en 7 áreas de formación. Sus egresados obtienen título y cédula profesional de técnico, con opción de continuar estudios superiores.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: false,
        carrerasTecnicas: ["Técnico en Enfermería General", "Técnico en Computación", "Técnico en Administración", "Técnico en Contabilidad", "Técnico en Mecatrónica"],
        enlaceOficial: "https://www.conalep.edu.mx",
    },
    {
        id: "cbtis",
        nombre: "CBTis — Centro de Bachillerato Tecnológico Industrial y de Servicios",
        slug: "cbtis",
        institucion: "cbtis",
        tipo: "sin-examen",
        zona: "Nacional",
        turno: ["matutino", "vespertino"],
        descripcion: "Los CBTis son parte de la DGETI y ofrecen bachillerato tecnológico con especialidades industriales y de servicios. Sus egresados obtienen título técnico y pueden continuar estudios superiores.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: false,
        carrerasTecnicas: ["Técnico en Contabilidad", "Técnico en Enfermería General", "Técnico en Soporte y Mantenimiento de Equipo de Cómputo"],
        enlaceOficial: "https://www.dgeti.sep.gob.mx",
    },
    {
        id: "iems",
        nombre: "IEMS — Instituto de Educación Media Superior",
        slug: "iems",
        institucion: "iems",
        tipo: "sin-examen",
        zona: "CDMX",
        turno: ["matutino", "vespertino"],
        descripcion: "El IEMS es el bachillerato del Gobierno de la Ciudad de México. Ofrece educación gratuita y de calidad sin examen de admisión, con enfoque humanista y comunitario.",
        duracion: "3 años (6 semestres)",
        paseReglamentado: false,
        enlaceOficial: "https://iems.cdmx.gob.mx",
    },
    {
        id: "prepa-linea",
        nombre: "Preparatoria en Línea SEP",
        slug: "prepa-en-linea",
        institucion: "prepa-linea",
        tipo: "sin-examen",
        zona: "Nacional — 100% en línea",
        turno: ["flexible"],
        descripcion: "La Preparatoria en Línea de la SEP permite obtener el certificado de bachillerato completamente en línea, con horarios flexibles. Ideal para personas que trabajan o no pueden asistir a clases presenciales.",
        duracion: "2.5-4 años (flexible)",
        paseReglamentado: false,
        enlaceOficial: "https://www.prepaenlinea.sep.gob.mx",
    },
    {
        id: "prepa-abierta",
        nombre: "Preparatoria Abierta SEP",
        slug: "prepa-abierta",
        institucion: "prepa-abierta",
        tipo: "sin-examen",
        zona: "Nacional",
        turno: ["flexible"],
        descripcion: "El Sistema de Bachillerato Abierto de la SEP permite estudiar de forma autónoma presentando exámenes en centros evaluadores. Sin horario fijo ni clases obligatorias.",
        duracion: "Flexible (mínimo 2 años)",
        paseReglamentado: false,
        enlaceOficial: "https://www.prepabierta.sep.gob.mx",
    },
];

// Exportación unificada
export const TODOS_LOS_PLANTELES = [...PLANTELES_CCH, ...PLANTELES_ENP, ...PLANTELES_CECYT, ...PLANTELES_ECOEMS];
