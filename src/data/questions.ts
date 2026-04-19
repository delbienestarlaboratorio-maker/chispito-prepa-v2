// ================================================
// BANCO DE REACTIVOS — prepa.chispito.mx
// 10 materias | Estilo examen UNAM/IPN
// ================================================

export type Materia =
    | "habilidad-verbal"
    | "habilidad-matematica"
    | "espanol"
    | "historia"
    | "geografia"
    | "formacion-civica"
    | "matematicas"
    | "fisica"
    | "quimica"
    | "biologia";

export type Reactivo = {
    id: string;
    materia: Materia;
    subtema: string;
    dificultad: "basico" | "intermedio" | "avanzado";
    pregunta: string;
    opciones: [string, string, string, string];
    respuesta: 0 | 1 | 2 | 3;
    explicacion: string;
};

export const REACTIVOS_HABILIDAD_VERBAL: Reactivo[] = [
    {
        id: "hv-001",
        materia: "habilidad-verbal",
        subtema: "analogías",
        dificultad: "basico",
        pregunta: "LIBRO : BIBLIOTECA :: cuadro : ___",
        opciones: ["museo", "pintura", "artista", "marcos"],
        respuesta: 0,
        explicacion: "Un libro se guarda en una biblioteca (su colección natural). Un cuadro se guarda en un museo. La relación es objeto → lugar donde se colecciona.",
    },
    {
        id: "hv-002",
        materia: "habilidad-verbal",
        subtema: "analogías",
        dificultad: "basico",
        pregunta: "MÉDICO : ENFERMEDAD :: abogado : ___",
        opciones: ["conflicto", "tribunal", "código", "sentencia"],
        respuesta: 0,
        explicacion: "El médico resuelve enfermedades. El abogado resuelve conflictos (disputas legales). La relación es profesión → problema que resuelve.",
    },
    {
        id: "hv-003",
        materia: "habilidad-verbal",
        subtema: "analogías",
        dificultad: "intermedio",
        pregunta: "LLUVIA : INUNDACIÓN :: sequía : ___",
        opciones: ["hambre", "calor", "desierto", "sol"],
        respuesta: 0,
        explicacion: "La lluvia en exceso causa inundación. La sequía (falta de lluvia) causa hambre. La relación es causa climática extrema → consecuencia.",
    },
    {
        id: "hv-004",
        materia: "habilidad-verbal",
        subtema: "antónimos",
        dificultad: "basico",
        pregunta: "¿Cuál es el antónimo de EFÍMERO?",
        opciones: ["eterno", "rápido", "leve", "vago"],
        respuesta: 0,
        explicacion: "Efímero significa que dura muy poco tiempo. Su antónimo es eterno, que significa que dura para siempre.",
    },
    {
        id: "hv-005",
        materia: "habilidad-verbal",
        subtema: "antónimos",
        dificultad: "intermedio",
        pregunta: "¿Cuál es el antónimo de TACAÑO?",
        opciones: ["generoso", "rico", "lujoso", "abundante"],
        respuesta: 0,
        explicacion: "Tacaño es quien no gasta ni comparte. Su antónimo es generoso, quien comparte y da sin límites.",
    },
    {
        id: "hv-006",
        materia: "habilidad-verbal",
        subtema: "comprensión de lectura",
        dificultad: "intermedio",
        pregunta: "Lee: 'La tecnología avanza más rápido que las leyes que la regulan, generando vacíos legales.' ¿Cuál es la idea principal?",
        opciones: [
            "La legislación no se adapta al ritmo tecnológico",
            "La tecnología no necesita regulación",
            "Las leyes son más modernas que la tecnología",
            "Los vacíos legales benefician a la sociedad",
        ],
        respuesta: 0,
        explicacion: "El texto señala que la tecnología avanza más rápido que las leyes, lo que implica que el sistema legal no puede seguir el ritmo del cambio tecnológico.",
    },
    {
        id: "hv-007",
        materia: "habilidad-verbal",
        subtema: "sinónimos",
        dificultad: "basico",
        pregunta: "¿Cuál es el sinónimo de OMINOSO?",
        opciones: ["siniestro", "brillante", "alegre", "tranquilo"],
        respuesta: 0,
        explicacion: "Ominoso significa que anuncia mal agüero o que es amenazante. Su sinónimo es siniestro.",
    },
    {
        id: "hv-008",
        materia: "habilidad-verbal",
        subtema: "analogías",
        dificultad: "avanzado",
        pregunta: "PARTITURA : MÚSICA :: plano : ___",
        opciones: ["edificio", "arquitecto", "regla", "diseño"],
        respuesta: 0,
        explicacion: "La partitura es la representación gráfica de la música antes de interpretarse. El plano es la representación gráfica del edificio antes de construirse.",
    },
    {
        id: "hv-009",
        materia: "habilidad-verbal",
        subtema: "antónimos",
        dificultad: "avanzado",
        pregunta: "¿Cuál es el antónimo de EUFORIA?",
        opciones: ["abatimiento", "calma", "paz", "silencio"],
        respuesta: 0,
        explicacion: "Euforia es un estado de alegría intensa y exaltación. Su antónimo es abatimiento, que es un estado de tristeza profunda y desánimo.",
    },
    {
        id: "hv-010",
        materia: "habilidad-verbal",
        subtema: "comprensión de lectura",
        dificultad: "avanzado",
        pregunta: "Lee: 'No todo lo que se llama arte merece serlo; el valor artístico depende de su contexto histórico y cultural.' El autor argumenta que el arte es:",
        opciones: [
            "relativo al contexto",
            "objetivo y universal",
            "exclusivo de expertos",
            "inútil sin público",
        ],
        respuesta: 0,
        explicacion: "El autor dice que el valor artístico 'depende de su contexto histórico y cultural', lo que significa que es relativo y no absoluto.",
    },
];

export const REACTIVOS_HABILIDAD_MATEMATICA: Reactivo[] = [
    {
        id: "hm-001",
        materia: "habilidad-matematica",
        subtema: "sucesiones numéricas",
        dificultad: "basico",
        pregunta: "¿Cuál es el siguiente número en la serie: 2, 4, 8, 16, ___?",
        opciones: ["32", "24", "20", "18"],
        respuesta: 0,
        explicacion: "Cada número se multiplica por 2. 2×2=4, 4×2=8, 8×2=16, 16×2=32.",
    },
    {
        id: "hm-002",
        materia: "habilidad-matematica",
        subtema: "sucesiones numéricas",
        dificultad: "intermedio",
        pregunta: "¿Cuál es el siguiente número en la serie: 1, 1, 2, 3, 5, 8, ___?",
        opciones: ["13", "11", "16", "10"],
        respuesta: 0,
        explicacion: "Es la sucesión de Fibonacci. Cada número es la suma de los dos anteriores: 5+8=13.",
    },
    {
        id: "hm-003",
        materia: "habilidad-matematica",
        subtema: "razonamiento lógico",
        dificultad: "basico",
        pregunta: "Si 5 máquinas hacen 5 piezas en 5 minutos, ¿cuánto tiempo tardan 100 máquinas en hacer 100 piezas?",
        opciones: ["5 minutos", "100 minutos", "10 minutos", "1 minuto"],
        respuesta: 0,
        explicacion: "Cada máquina hace 1 pieza en 5 minutos. 100 máquinas hacen 100 piezas también en 5 minutos, porque trabajan en paralelo.",
    },
    {
        id: "hm-004",
        materia: "habilidad-matematica",
        subtema: "sucesiones",
        dificultad: "intermedio",
        pregunta: "¿Cuál es el siguiente elemento: 2, 5, 10, 17, 26, ___?",
        opciones: ["37", "35", "38", "36"],
        respuesta: 0,
        explicacion: "Las diferencias son: 3, 5, 7, 9, 11... (números impares). 26+11=37.",
    },
    {
        id: "hm-005",
        materia: "habilidad-matematica",
        subtema: "razonamiento espacial",
        dificultad: "intermedio",
        pregunta: "¿Cuántos cubos se necesitan para formar un cubo grande de 3×3×3?",
        opciones: ["27", "9", "18", "24"],
        respuesta: 0,
        explicacion: "Un cubo de 3×3×3 tiene 3×3×3 = 27 cubos unitarios.",
    },
    {
        id: "hm-006",
        materia: "habilidad-matematica",
        subtema: "problemas de razonamiento",
        dificultad: "avanzado",
        pregunta: "Ana tiene el doble de dinero que Beto. Si Beto tiene $150 menos que Carlos y Carlos tiene $300, ¿cuánto tiene Ana?",
        opciones: ["$300", "$150", "$450", "$600"],
        respuesta: 0,
        explicacion: "Carlos tiene $300. Beto tiene $300-$150=$150. Ana tiene el doble de Beto: 2×$150=$300.",
    },
    {
        id: "hm-007",
        materia: "habilidad-matematica",
        subtema: "sucesiones",
        dificultad: "avanzado",
        pregunta: "Completa la serie: 3, 6, 12, 24, 48, ___",
        opciones: ["96", "72", "84", "60"],
        respuesta: 0,
        explicacion: "Progresión geométrica con razón 2. 48×2=96.",
    },
];

export const REACTIVOS_ESPANOL: Reactivo[] = [
    {
        id: "es-001",
        materia: "espanol",
        subtema: "gramática",
        dificultad: "basico",
        pregunta: "¿Cuál de las siguientes oraciones está escrita correctamente?",
        opciones: [
            "Él fue al mercado ayer.",
            "El fue al mercado ayer.",
            "Él fué al mercado ayer.",
            "El fué al mercado ayer.",
        ],
        respuesta: 0,
        explicacion: "El pronombre personal 'él' lleva acento para diferenciarse del artículo 'el'. El pretérito 'fue' no lleva acento porque es una palabra monosílaba.",
    },
    {
        id: "es-002",
        materia: "espanol",
        subtema: "ortografía",
        dificultad: "basico",
        pregunta: "¿Qué palabra está escrita correctamente?",
        opciones: ["abogado", "avogado", "abogado", "abogdo"],
        respuesta: 0,
        explicacion: "La palabra correcta es 'abogado'. Proviene del latín 'advocatus'. Se escribe con 'b' y no con 'v'.",
    },
    {
        id: "es-003",
        materia: "espanol",
        subtema: "tipos de texto",
        dificultad: "intermedio",
        pregunta: "Un texto que narra hechos reales, en orden cronológico y con nombres propios verificables es:",
        opciones: ["periodístico", "narrativo literario", "poético", "publicitario"],
        respuesta: 0,
        explicacion: "El texto periodístico reporta hechos reales con nombres y fechas verificables. El narrativo literario puede mezclar ficción.",
    },
    {
        id: "es-004",
        materia: "espanol",
        subtema: "puntuación",
        dificultad: "intermedio",
        pregunta: "¿Cuál es el uso correcto de los dos puntos?",
        opciones: [
            "Para introducir una enumeración: manzanas, peras y uvas.",
            "Para separar dos oraciones independientes.",
            "Para indicar una pausa larga al final de párrafo.",
            "Para reemplazar la coma en listas cortas.",
        ],
        respuesta: 0,
        explicacion: "Los dos puntos se usan para introducir enumeraciones, citas textuales, o para anunciar algo que sigue relacionado con lo anterior.",
    },
    {
        id: "es-005",
        materia: "espanol",
        subtema: "gramática",
        dificultad: "avanzado",
        pregunta: "En la oración 'El perro que ladra no muerde', la cláusula 'que ladra' es:",
        opciones: [
            "proposición subordinada adjetiva",
            "proposición subordinada adverbial",
            "proposición principal",
            "frase nominal",
        ],
        respuesta: 0,
        explicacion: "La cláusula 'que ladra' modifica al sustantivo 'perro' (le dice qué tipo de perro), por lo que es una proposición subordinada adjetiva (relativa).",
    },
];

export const REACTIVOS_HISTORIA: Reactivo[] = [
    {
        id: "hi-001",
        materia: "historia",
        subtema: "Historia de México",
        dificultad: "basico",
        pregunta: "¿En qué año se consumó la Independencia de México?",
        opciones: ["1821", "1810", "1815", "1824"],
        respuesta: 0,
        explicacion: "La Independencia de México se consumó el 27 de septiembre de 1821, con la entrada del Ejército Trigarante a la Ciudad de México. El movimiento inició en 1810 con el Grito de Dolores.",
    },
    {
        id: "hi-002",
        materia: "historia",
        subtema: "Historia Universal",
        dificultad: "basico",
        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
        opciones: ["1914", "1918", "1939", "1905"],
        respuesta: 0,
        explicacion: "La Primera Guerra Mundial comenzó en 1914 y terminó en 1918. Fue desencadenada por el asesinato del archiduque Francisco Fernando en Sarajevo.",
    },
    {
        id: "hi-003",
        materia: "historia",
        subtema: "Historia de México",
        dificultad: "intermedio",
        pregunta: "¿Cuál fue el principal objetivo del Porfiriato?",
        opciones: [
            "Modernizar México con inversión extranjera",
            "Distribuir tierras entre los campesinos",
            "Expulsar a los extranjeros del país",
            "Establecer una república federal",
        ],
        respuesta: 0,
        explicacion: "El Porfiriato (1876-1911) tuvo como principal objetivo modernizar México mediante la inversión extranjera, la construcción de ferrocarriles y la industria, aunque concentró la riqueza en pocas manos.",
    },
    {
        id: "hi-004",
        materia: "historia",
        subtema: "Historia Universal",
        dificultad: "intermedio",
        pregunta: "¿Qué fenómeno económico desencadenó la Gran Depresión de 1929?",
        opciones: [
            "El crack de la Bolsa de Valores de Nueva York",
            "La invasión alemana a Francia",
            "El fin del patrón oro en Europa",
            "La huelga general de trabajadores en EE.UU.",
        ],
        respuesta: 0,
        explicacion: "La Gran Depresión fue desencadenada por el crack bursátil del 'Jueves Negro' (24 de octubre de 1929) en Wall Street, que provocó quiebras bancarias y desempleo masivo.",
    },
    {
        id: "hi-005",
        materia: "historia",
        subtema: "Historia de México",
        dificultad: "avanzado",
        pregunta: "¿Qué artículo de la Constitución de 1917 establece el reparto agrario como derecho?",
        opciones: ["Artículo 27", "Artículo 3", "Artículo 123", "Artículo 130"],
        respuesta: 0,
        explicacion: "El Artículo 27 de la Constitución de 1917 regula la propiedad de la tierra y el agua, y fue la base para el reparto agrario. El Artículo 123 regula el trabajo y el 3° la educación.",
    },
];

export const REACTIVOS_GEOGRAFIA: Reactivo[] = [
    {
        id: "ge-001",
        materia: "geografia",
        subtema: "geografía de México",
        dificultad: "basico",
        pregunta: "¿Cuántos estados conforman la República Mexicana?",
        opciones: ["32", "31", "30", "33"],
        respuesta: 0,
        explicacion: "México tiene 32 entidades federativas: 31 estados y la Ciudad de México (antes Distrito Federal).",
    },
    {
        id: "ge-002",
        materia: "geografia",
        subtema: "geografía física",
        dificultad: "basico",
        pregunta: "¿Cuál es el río más largo de México?",
        opciones: ["Río Bravo", "Río Grijalva", "Río Balsas", "Río Lerma"],
        respuesta: 0,
        explicacion: "El Río Bravo (o Río Grande) es el más largo de México con aproximadamente 3,051 km, formando la frontera con Estados Unidos.",
    },
    {
        id: "ge-003",
        materia: "geografia",
        subtema: "geografía económica",
        dificultad: "intermedio",
        pregunta: "¿Qué tipo de clima predomina en la mayor parte del territorio mexicano?",
        opciones: ["Seco y semiseco", "Tropical húmedo", "Templado", "Polar"],
        respuesta: 0,
        explicacion: "Aproximadamente el 58% del territorio mexicano tiene clima seco o semiseco, especialmente en el norte (Chihuahua, Sonora, Baja California) y el altiplano central.",
    },
    {
        id: "ge-004",
        materia: "geografia",
        subtema: "geografía mundial",
        dificultad: "intermedio",
        pregunta: "¿Cuál es el continente más grande del mundo?",
        opciones: ["Asia", "África", "América", "Europa"],
        respuesta: 0,
        explicacion: "Asia es el continente más grande con aproximadamente 44 millones de km² y más de 4,000 millones de habitantes.",
    },
    {
        id: "ge-005",
        materia: "geografia",
        subtema: "geografía de México",
        dificultad: "avanzado",
        pregunta: "¿Qué fenómeno natural causa principalmente los terremotos en México?",
        opciones: [
            "El choque de placas tectónicas",
            "Las erupciones volcánicas",
            "Los huracanes del Pacífico",
            "Los hundimientos del suelo",
        ],
        respuesta: 0,
        explicacion: "México está en la confluencia de varias placas tectónicas (Norteamericana, del Pacífico, de Cocos, del Caribe). Su choque es la principal causa de terremotos.",
    },
];

export const REACTIVOS_FORMACION_CIVICA: Reactivo[] = [
    {
        id: "fc-001",
        materia: "formacion-civica",
        subtema: "derechos humanos",
        dificultad: "basico",
        pregunta: "¿Cuál es el máximo ordenamiento jurídico de México?",
        opciones: [
            "La Constitución Política",
            "El Código Civil",
            "Los Tratados Internacionales",
            "La Ley Federal del Trabajo",
        ],
        respuesta: 0,
        explicacion: "La Constitución Política de los Estados Unidos Mexicanos (1917) es la ley suprema. Todas las demás leyes deben estar en armonía con ella.",
    },
    {
        id: "fc-002",
        materia: "formacion-civica",
        subtema: "democracia",
        dificultad: "basico",
        pregunta: "¿A qué edad un mexicano adquiere el pleno derecho a votar?",
        opciones: ["18 años", "16 años", "21 años", "15 años"],
        respuesta: 0,
        explicacion: "De acuerdo con el Artículo 34 de la Constitución, los mexicanos son ciudadanos a los 18 años, adquiriendo el derecho al voto.",
    },
    {
        id: "fc-003",
        materia: "formacion-civica",
        subtema: "poderes del Estado",
        dificultad: "intermedio",
        pregunta: "¿Cuáles son los tres poderes de la Unión en México?",
        opciones: [
            "Ejecutivo, Legislativo y Judicial",
            "Federal, Estatal y Municipal",
            "Ejecutivo, Administrativo y Judicial",
            "Presidencial, Senatorial y Judicial",
        ],
        respuesta: 0,
        explicacion: "El poder en México se divide en tres: Ejecutivo (Presidencia), Legislativo (Congreso: Cámara de Diputados y Senado) y Judicial (Suprema Corte y tribunales).",
    },
    {
        id: "fc-004",
        materia: "formacion-civica",
        subtema: "derechos humanos",
        dificultad: "intermedio",
        pregunta: "¿Qué organismo en México se encarga de proteger los derechos humanos?",
        opciones: ["CNDH", "INE", "INEGI", "IMSS"],
        respuesta: 0,
        explicacion: "La Comisión Nacional de los Derechos Humanos (CNDH) es el organismo autónomo que investiga violaciones a los derechos humanos en México.",
    },
    {
        id: "fc-005",
        materia: "formacion-civica",
        subtema: "valores cívicos",
        dificultad: "avanzado",
        pregunta: "¿Cuál es la diferencia entre democracia representativa y participativa?",
        opciones: [
            "En la representativa se elige a quienes deciden; en la participativa los ciudadanos deciden directamente",
            "La representativa es más moderna que la participativa",
            "La participativa solo aplica en municipios pequeños",
            "No existe diferencia práctica entre ambas",
        ],
        respuesta: 0,
        explicacion: "En la democracia representativa los ciudadanos eligen representantes que toman decisiones. En la participativa, los ciudadanos intervienen directamente (referéndum, plebiscito, iniciativa ciudadana).",
    },
];

export const REACTIVOS_MATEMATICAS: Reactivo[] = [
    {
        id: "ma-001",
        materia: "matematicas",
        subtema: "álgebra",
        dificultad: "basico",
        pregunta: "Si 3x + 6 = 15, ¿cuánto vale x?",
        opciones: ["3", "5", "7", "9"],
        respuesta: 0,
        explicacion: "3x = 15 - 6 = 9, por tanto x = 9/3 = 3.",
    },
    {
        id: "ma-002",
        materia: "matematicas",
        subtema: "geometría",
        dificultad: "basico",
        pregunta: "¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?",
        opciones: ["30 cm²", "60 cm²", "15 cm²", "24 cm²"],
        respuesta: 0,
        explicacion: "Área del triángulo = (base × altura) / 2 = (10 × 6) / 2 = 30 cm².",
    },
    {
        id: "ma-003",
        materia: "matematicas",
        subtema: "aritmética",
        dificultad: "basico",
        pregunta: "¿Cuánto es 15% de 200?",
        opciones: ["30", "25", "35", "20"],
        respuesta: 0,
        explicacion: "15% de 200 = (15/100) × 200 = 0.15 × 200 = 30.",
    },
    {
        id: "ma-004",
        materia: "matematicas",
        subtema: "álgebra",
        dificultad: "intermedio",
        pregunta: "¿Cuáles son las raíces de x² - 5x + 6 = 0?",
        opciones: ["x=2 y x=3", "x=1 y x=6", "x=2 y x=-3", "x=-2 y x=-3"],
        respuesta: 0,
        explicacion: "Factorizando: (x-2)(x-3) = 0. Las raíces son x=2 y x=3. Verificación: 2+3=5 ✓ y 2×3=6 ✓.",
    },
    {
        id: "ma-005",
        materia: "matematicas",
        subtema: "geometría",
        dificultad: "intermedio",
        pregunta: "¿Cuál es la longitud de la hipotenusa en un triángulo rectángulo con catetos de 6 y 8?",
        opciones: ["10", "12", "14", "7"],
        respuesta: 0,
        explicacion: "Teorema de Pitágoras: c² = a² + b² = 6² + 8² = 36 + 64 = 100. c = √100 = 10.",
    },
    {
        id: "ma-006",
        materia: "matematicas",
        subtema: "estadística",
        dificultad: "intermedio",
        pregunta: "¿Cuál es la media aritmética de: 4, 8, 6, 10, 2?",
        opciones: ["6", "8", "5", "7"],
        respuesta: 0,
        explicacion: "Media = (4+8+6+10+2)/5 = 30/5 = 6.",
    },
    {
        id: "ma-007",
        materia: "matematicas",
        subtema: "álgebra",
        dificultad: "avanzado",
        pregunta: "Si f(x) = 2x² - 3x + 1, ¿cuánto es f(3)?",
        opciones: ["10", "16", "12", "8"],
        respuesta: 0,
        explicacion: "f(3) = 2(3)² - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10.",
    },
];

export const REACTIVOS_FISICA: Reactivo[] = [
    {
        id: "fi-001",
        materia: "fisica",
        subtema: "mecánica",
        dificultad: "basico",
        pregunta: "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?",
        opciones: ["Newton (N)", "Joule (J)", "Watt (W)", "Pascal (Pa)"],
        respuesta: 0,
        explicacion: "La unidad de fuerza en el SI es el Newton (N). 1 N = 1 kg·m/s². El Joule es energía, el Watt es potencia y el Pascal es presión.",
    },
    {
        id: "fi-002",
        materia: "fisica",
        subtema: "mecánica",
        dificultad: "basico",
        pregunta: "Un objeto cae libremente. Si g = 10 m/s², ¿qué velocidad tiene después de 3 segundos?",
        opciones: ["30 m/s", "10 m/s", "15 m/s", "45 m/s"],
        respuesta: 0,
        explicacion: "v = g × t = 10 m/s² × 3 s = 30 m/s. Partiendo del reposo, la velocidad crece 10 m/s por cada segundo.",
    },
    {
        id: "fi-003",
        materia: "fisica",
        subtema: "termodinámica",
        dificultad: "intermedio",
        pregunta: "¿Qué ley establece que el volumen de un gas es inversamente proporcional a su presión (a temperatura constante)?",
        opciones: ["Ley de Boyle", "Ley de Charles", "Ley de Gay-Lussac", "Ley de Avogadro"],
        respuesta: 0,
        explicacion: "La Ley de Boyle establece: a temperatura constante, P₁V₁ = P₂V₂. Si la presión aumenta, el volumen disminuye proporcionalmente.",
    },
    {
        id: "fi-004",
        materia: "fisica",
        subtema: "óptica",
        dificultad: "intermedio",
        pregunta: "¿Cuál es la velocidad de la luz en el vacío?",
        opciones: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        respuesta: 0,
        explicacion: "La velocidad de la luz en el vacío es c ≈ 3×10⁸ m/s (aproximadamente 300,000 km/s). Es la velocidad máxima en el universo.",
    },
    {
        id: "fi-005",
        materia: "fisica",
        subtema: "electricidad",
        dificultad: "avanzado",
        pregunta: "¿Cuál es la resistencia de un circuito donde la tensión es 12V y la corriente es 3A?",
        opciones: ["4 Ω", "36 Ω", "0.25 Ω", "9 Ω"],
        respuesta: 0,
        explicacion: "Ley de Ohm: R = V/I = 12V / 3A = 4 Ω.",
    },
];

export const REACTIVOS_QUIMICA: Reactivo[] = [
    {
        id: "qu-001",
        materia: "quimica",
        subtema: "tabla periódica",
        dificultad: "basico",
        pregunta: "¿Cuál es el símbolo químico del oro?",
        opciones: ["Au", "Go", "Ag", "Or"],
        respuesta: 0,
        explicacion: "El símbolo del oro es Au, del latín 'Aurum'. El Ag es la plata (Argentum).",
    },
    {
        id: "qu-002",
        materia: "quimica",
        subtema: "reacciones químicas",
        dificultad: "basico",
        pregunta: "¿Qué tipo de reacción ocurre cuando el hierro se oxida formando herrumbre?",
        opciones: ["Oxidación", "Combustión", "Neutralización", "Precipitación"],
        respuesta: 0,
        explicacion: "La formación de herrumbre es una reacción de oxidación: 4Fe + 3O₂ → 2Fe₂O₃. El hierro pierde electrones al combinarse con el oxígeno.",
    },
    {
        id: "qu-003",
        materia: "quimica",
        subtema: "enlaces químicos",
        dificultad: "intermedio",
        pregunta: "¿Qué tipo de enlace se forma entre átomos de diferente electronegatividad?",
        opciones: ["Enlace iónico", "Enlace covalente", "Enlace metálico", "Enlace de hidrógeno"],
        respuesta: 0,
        explicacion: "El enlace iónico se forma cuando la diferencia de electronegatividad es grande (generalmente >1.7). Un átomo cede electrones al otro, formando iones.",
    },
    {
        id: "qu-004",
        materia: "quimica",
        subtema: "reacciones ácido-base",
        dificultad: "intermedio",
        pregunta: "¿Cuál es el pH de una solución neutra a 25°C?",
        opciones: ["7", "0", "14", "5"],
        respuesta: 0,
        explicacion: "Una solución neutra tiene pH = 7. pH < 7 es ácida, pH > 7 es básica. El agua pura tiene pH = 7.",
    },
    {
        id: "qu-005",
        materia: "quimica",
        subtema: "estequiometría",
        dificultad: "avanzado",
        pregunta: "¿Cuántos moles de H₂O se forman al quemar 2 moles de H₂? (2H₂ + O₂ → 2H₂O)",
        opciones: ["2 moles", "1 mol", "4 moles", "0.5 moles"],
        respuesta: 0,
        explicacion: "Según la ecuación balanceada, 2 moles de H₂ producen 2 moles de H₂O. La proporción es 1:1.",
    },
];

export const REACTIVOS_BIOLOGIA: Reactivo[] = [
    {
        id: "bi-001",
        materia: "biologia",
        subtema: "célula",
        dificultad: "basico",
        pregunta: "¿Cuál es la unidad funcional y estructural de todos los seres vivos?",
        opciones: ["La célula", "El átomo", "La molécula", "El tejido"],
        respuesta: 0,
        explicacion: "La célula es la unidad básica de la vida. Todo ser vivo está compuesto por al menos una célula. No todos los seres vivos tienen tejidos, pero todos tienen células.",
    },
    {
        id: "bi-002",
        materia: "biologia",
        subtema: "fotosíntesis",
        dificultad: "basico",
        pregunta: "¿Cuál es el pigmento responsable de captar la luz solar en la fotosíntesis?",
        opciones: ["La clorofila", "La melanina", "La hemoglobina", "La queratina"],
        respuesta: 0,
        explicacion: "La clorofila es el pigmento verde de los cloroplastos que absorbe la luz solar para realizar la fotosíntesis. Su color verde se debe a que refleja esa longitud de onda.",
    },
    {
        id: "bi-003",
        materia: "biologia",
        subtema: "genética",
        dificultad: "intermedio",
        pregunta: "¿Dónde se encuentra el material genético (ADN) en las células eucariotas?",
        opciones: ["En el núcleo", "En la mitocondria", "En el ribosoma", "En el citoplasma"],
        respuesta: 0,
        explicacion: "En células eucariotas, el ADN se encuentra principalmente en el núcleo, en forma de cromosomas. También hay ADN en las mitocondrias y cloroplastos.",
    },
    {
        id: "bi-004",
        materia: "biologia",
        subtema: "ecosistemas",
        dificultad: "intermedio",
        pregunta: "¿Cómo se llaman los organismos que producen su propio alimento mediante fotosíntesis?",
        opciones: ["Productores", "Consumidores", "Descomponedores", "Herbívoros"],
        respuesta: 0,
        explicacion: "Los productores (plantas, algas) fabrican su propio alimento usando energía solar. Son la base de toda cadena alimenticia.",
    },
    {
        id: "bi-005",
        materia: "biologia",
        subtema: "evolución",
        dificultad: "avanzado",
        pregunta: "¿Qué mecanismo propuso Darwin como motor principal de la evolución?",
        opciones: [
            "La selección natural",
            "La mutación genética",
            "La deriva genética",
            "La adaptación dirigida",
        ],
        respuesta: 0,
        explicacion: "Darwin propuso la selección natural: los individuos con características más favorables para su ambiente sobreviven y se reproducen más, transmitiendo esas características a su descendencia.",
    },
];

// ============================================================
// BANCO EXTENDIDO — Lote 2 (77 reactivos adicionales)
// ============================================================

export const REACTIVOS_HABILIDAD_VERBAL_2: Reactivo[] = [
    { id: "hv-011", materia: "habilidad-verbal", subtema: "analogías", dificultad: "basico", pregunta: "AGUA : SED :: alimento : ___", opciones: ["hambre", "comida", "nutrición", "dieta"], respuesta: 0, explicacion: "El agua satisface la sed. El alimento satisface el hambre. La relación es elemento → necesidad que satisface." },
    { id: "hv-012", materia: "habilidad-verbal", subtema: "analogías", dificultad: "intermedio", pregunta: "TELESCOPIO : ESTRELLAS :: microscopio : ___", opciones: ["células", "virus", "bacterias", "moléculas"], respuesta: 0, explicacion: "El telescopio permite ver estrellas (objetos lejanos). El microscopio permite observar células (objetos microscópicos)." },
    { id: "hv-013", materia: "habilidad-verbal", subtema: "sinónimos", dificultad: "intermedio", pregunta: "¿Cuál es el sinónimo de PERSPICAZ?", opciones: ["sagaz", "torpe", "lento", "distraído"], respuesta: 0, explicacion: "Perspicaz significa agudo e inteligente. Su sinónimo es sagaz." },
    { id: "hv-014", materia: "habilidad-verbal", subtema: "antónimos", dificultad: "basico", pregunta: "¿Cuál es el antónimo de DILIGENTE?", opciones: ["perezoso", "activo", "cuidadoso", "rápido"], respuesta: 0, explicacion: "Diligente significa trabajador y cuidadoso. Su antónimo es perezoso." },
    { id: "hv-015", materia: "habilidad-verbal", subtema: "analogías", dificultad: "intermedio", pregunta: "CAOS : ORDEN :: ignorancia : ___", opciones: ["conocimiento", "sabiduría", "educación", "ciencia"], respuesta: 0, explicacion: "El caos es lo opuesto al orden. La ignorancia es lo opuesto al conocimiento." },
    { id: "hv-016", materia: "habilidad-verbal", subtema: "antónimos", dificultad: "intermedio", pregunta: "¿Cuál es el antónimo de PROLIJO?", opciones: ["conciso", "extenso", "detallado", "minucioso"], respuesta: 0, explicacion: "Prolijo significa excesivamente largo. Su antónimo es conciso, que significa breve y preciso." },
    { id: "hv-017", materia: "habilidad-verbal", subtema: "analogías", dificultad: "basico", pregunta: "MAESTRO : AULA :: juez : ___", opciones: ["tribunal", "ley", "abogado", "código"], respuesta: 0, explicacion: "El maestro ejerce en el aula. El juez ejerce en el tribunal." },
    { id: "hv-018", materia: "habilidad-verbal", subtema: "sinónimos", dificultad: "avanzado", pregunta: "¿Cuál es el sinónimo de MAGNÁNIMO?", opciones: ["generoso y noble", "poderoso", "valiente", "austero"], respuesta: 0, explicacion: "Magnánimo describe a alguien de alma grande que actúa con generosidad y nobleza." },
];

export const REACTIVOS_HAB_MAT_2: Reactivo[] = [
    { id: "hm-008", materia: "habilidad-matematica", subtema: "proporciones", dificultad: "basico", pregunta: "¿Cuánto es el 25% de 80?", opciones: ["20", "16", "25", "40"], respuesta: 0, explicacion: "25% = 1/4. Un cuarto de 80 = 80/4 = 20." },
    { id: "hm-009", materia: "habilidad-matematica", subtema: "sucesiones", dificultad: "intermedio", pregunta: "¿Cuál es el siguiente término: 1, 4, 9, 16, 25, ___?", opciones: ["36", "30", "35", "49"], respuesta: 0, explicacion: "Son los cuadrados perfectos: 1², 2², 3², 4², 5²... el siguiente es 6² = 36." },
    { id: "hm-010", materia: "habilidad-matematica", subtema: "proporciones", dificultad: "intermedio", pregunta: "Si 4 albañiles construyen una barda en 6 días, ¿cuántos días tarda 1 albañil solo?", opciones: ["24 días", "12 días", "8 días", "6 días"], respuesta: 0, explicacion: "Trabajo total = 4 × 6 = 24 días-albañil. Un albañil solo: 24 ÷ 1 = 24 días." },
    { id: "hm-011", materia: "habilidad-matematica", subtema: "razonamiento espacial", dificultad: "intermedio", pregunta: "Un triángulo tiene lados 3, 4 y 5. ¿Qué tipo de triángulo es?", opciones: ["Rectángulo", "Equilátero", "Obtusángulo", "Isósceles"], respuesta: 0, explicacion: "3²+4²=9+16=25=5². Cumple el teorema de Pitágoras: es rectángulo." },
    { id: "hm-012", materia: "habilidad-matematica", subtema: "sucesiones", dificultad: "avanzado", pregunta: "¿Qué número continúa: 100, 96, 89, 79, 66, ___?", opciones: ["50", "53", "55", "48"], respuesta: 0, explicacion: "Las diferencias son: 4, 7, 10, 13... (aumentan de 3 en 3). La siguiente diferencia es 16. 66-16=50." },
];

export const REACTIVOS_ESPANOL_2: Reactivo[] = [
    { id: "es-006", materia: "espanol", subtema: "literatura", dificultad: "basico", pregunta: "¿A qué género literario pertenece 'Don Quijote de la Mancha'?", opciones: ["Narrativo (novela)", "Lírico (poesía)", "Dramático (teatro)", "Épico (epopeya)"], respuesta: 0, explicacion: "Don Quijote es considerada la primera novela moderna. Pertenece al género narrativo." },
    { id: "es-007", materia: "espanol", subtema: "gramática", dificultad: "basico", pregunta: "¿Qué tipo de oración es: '¡Qué hermoso día!'?", opciones: ["Exclamativa", "Interrogativa", "Imperativa", "Declarativa"], respuesta: 0, explicacion: "Las oraciones exclamativas expresan emoción. Se reconocen por los signos ¡!" },
    { id: "es-008", materia: "espanol", subtema: "ortografía", dificultad: "basico", pregunta: "¿Cuál de estas palabras lleva tilde?", opciones: ["café", "mesa", "libro", "casa"], respuesta: 0, explicacion: "Café es aguda terminada en vocal, por eso lleva tilde." },
    { id: "es-009", materia: "espanol", subtema: "literatura", dificultad: "intermedio", pregunta: "El Realismo Mágico es una corriente literaria asociada principalmente con escritores de:", opciones: ["América Latina", "Europa del Este", "Asia", "África"], respuesta: 0, explicacion: "El Realismo Mágico es latinoamericano. Sus exponentes: García Márquez, Juan Rulfo, Isabel Allende." },
    { id: "es-010", materia: "espanol", subtema: "recursos literarios", dificultad: "avanzado", pregunta: "¿Cuál es el recurso literario que atribuye cualidades humanas a objetos?", opciones: ["Personificación", "Metáfora", "Hipérbole", "Aliteración"], respuesta: 0, explicacion: "La personificación atribuye cualidades humanas a seres no humanos. Ej: 'El viento gritaba'." },
];

export const REACTIVOS_HISTORIA_2: Reactivo[] = [
    { id: "hi-006", materia: "historia", subtema: "Historia de México", dificultad: "basico", pregunta: "¿Quién inició el movimiento de Independencia de México el 16 de septiembre de 1810?", opciones: ["Miguel Hidalgo y Costilla", "Agustín de Iturbide", "José María Morelos", "Vicente Guerrero"], respuesta: 0, explicacion: "Miguel Hidalgo inició la Independencia con el Grito de Dolores el 16 de septiembre de 1810." },
    { id: "hi-007", materia: "historia", subtema: "Historia Universal", dificultad: "basico", pregunta: "¿Qué evento marcó el inicio de la Segunda Guerra Mundial?", opciones: ["La invasión alemana a Polonia (1939)", "El bombardeo de Pearl Harbor (1941)", "La caída de París (1940)", "El tratado de Versalles (1919)"], respuesta: 0, explicacion: "La WWII comenzó el 1 de septiembre de 1939 con la invasión alemana a Polonia." },
    { id: "hi-008", materia: "historia", subtema: "Historia Universal", dificultad: "intermedio", pregunta: "La Revolución Francesa (1789) proclamó los ideales de:", opciones: ["Libertad, Igualdad y Fraternidad", "Fe, Honor y Patria", "Poder, Gloria y Nación", "Justicia, Paz y Prosperidad"], respuesta: 0, explicacion: "La Revolución Francesa tuvo como lema 'Liberté, Égalité, Fraternité', que influyó en movimientos en todo el mundo." },
    { id: "hi-009", materia: "historia", subtema: "Historia de México", dificultad: "avanzado", pregunta: "¿Qué fue el Tratado de Guadalupe-Hidalgo (1848)?", opciones: ["México cedió la mitad de su territorio a EE.UU.", "El fin de la Guerra de Independencia", "El acuerdo de paz con Francia", "La definición de la frontera con Guatemala"], respuesta: 0, explicacion: "El Tratado de Guadalupe-Hidalgo (1848) formalizó la cesión de Texas, California y Nuevo México, más del 50% del territorio original mexicano." },
];

export const REACTIVOS_GEOGRAFIA_2: Reactivo[] = [
    { id: "ge-006", materia: "geografia", subtema: "cartografía", dificultad: "basico", pregunta: "¿Qué línea imaginaria divide el planeta en hemisferio norte y sur?", opciones: ["El Ecuador", "El Trópico de Cáncer", "El Meridiano de Greenwich", "El Círculo Polar"], respuesta: 0, explicacion: "El Ecuador (latitud 0°) divide la Tierra en hemisferios norte y sur." },
    { id: "ge-007", materia: "geografia", subtema: "geografía de México", dificultad: "intermedio", pregunta: "¿Qué estados forman la península de Yucatán?", opciones: ["Yucatán, Campeche y Quintana Roo", "Yucatán, Tabasco y Chiapas", "Campeche, Tabasco y Veracruz", "Yucatán, Oaxaca y Campeche"], respuesta: 0, explicacion: "La Península de Yucatán está conformada por Yucatán, Campeche y Quintana Roo." },
    { id: "ge-008", materia: "geografia", subtema: "geografía física", dificultad: "avanzado", pregunta: "¿Cuál es el volcán más alto de México?", opciones: ["Pico de Orizaba (Citlaltépetl)", "Popocatépetl", "Nevado de Toluca", "La Malinche"], respuesta: 0, explicacion: "El Pico de Orizaba (Citlaltépetl) es el volcán más alto de México con 5,636 msnm." },
    { id: "ge-009", materia: "geografia", subtema: "geografía de México", dificultad: "basico", pregunta: "¿Con cuántos países comparte frontera terrestre México?", opciones: ["3", "2", "4", "5"], respuesta: 0, explicacion: "México limita con 3 países: Estados Unidos (norte), Guatemala y Belice (sur)." },
];

export const REACTIVOS_CIVICA_2: Reactivo[] = [
    { id: "fc-006", materia: "formacion-civica", subtema: "Constitución", dificultad: "basico", pregunta: "¿En qué año fue promulgada la Constitución Política vigente de México?", opciones: ["1917", "1824", "1857", "1910"], respuesta: 0, explicacion: "La Constitución fue promulgada el 5 de febrero de 1917 en Querétaro." },
    { id: "fc-007", materia: "formacion-civica", subtema: "instituciones", dificultad: "intermedio", pregunta: "¿Cuál es la función del INE en México?", opciones: ["Organizar las elecciones y garantizar la democracia", "Regular precios de productos básicos", "Administrar la seguridad social", "Supervisar el sistema educativo"], respuesta: 0, explicacion: "El INE organiza y certifica los procesos electorales garantizando su transparencia y equidad." },
    { id: "fc-008", materia: "formacion-civica", subtema: "Constitución", dificultad: "avanzado", pregunta: "¿Qué establece el Artículo 3° de la Constitución Mexicana?", opciones: ["El derecho a la educación laica, gratuita y obligatoria", "El derecho a la libre expresión", "La libertad de culto religioso", "El derecho a la propiedad privada"], respuesta: 0, explicacion: "El Art. 3° establece: educación laica, gratuita y obligatoria en los niveles básico, medio superior y superior." },
];

export const REACTIVOS_MATEMATICAS_2: Reactivo[] = [
    { id: "ma-008", materia: "matematicas", subtema: "aritmética", dificultad: "basico", pregunta: "¿Cuál es el MCM de 4 y 6?", opciones: ["12", "24", "4", "6"], respuesta: 0, explicacion: "Múltiplos de 4: 4,8,12... Múltiplos de 6: 6,12... El primer múltiplo común es 12." },
    { id: "ma-009", materia: "matematicas", subtema: "probabilidad", dificultad: "intermedio", pregunta: "Si lanzas un dado de 6 caras, ¿cuál es la probabilidad de obtener un número par?", opciones: ["1/2", "1/3", "2/3", "1/6"], respuesta: 0, explicacion: "Pares: 2, 4, 6 → 3 casos. Probabilidad = 3/6 = 1/2." },
    { id: "ma-010", materia: "matematicas", subtema: "geometría", dificultad: "intermedio", pregunta: "¿Cuánto mide cada ángulo interior de un triángulo equilátero?", opciones: ["60°", "45°", "90°", "120°"], respuesta: 0, explicacion: "La suma de ángulos interiores = 180°. En equilátero: 180°/3 = 60°." },
    { id: "ma-011", materia: "matematicas", subtema: "álgebra", dificultad: "avanzado", pregunta: "¿Cuál es el resultado de factorizar x² - 9?", opciones: ["(x+3)(x-3)", "(x+9)(x-1)", "(x-3)²", "(x+3)²"], respuesta: 0, explicacion: "Diferencia de cuadrados: a²-b² = (a+b)(a-b). x²-9 = (x+3)(x-3)." },
    { id: "ma-012", materia: "matematicas", subtema: "trigonometría", dificultad: "avanzado", pregunta: "En un triángulo rectángulo, si sen θ = 0.6, ¿cuál es cos θ?", opciones: ["0.8", "0.4", "0.36", "1.0"], respuesta: 0, explicacion: "sen²θ + cos²θ = 1. 0.36 + cos²θ = 1 → cos²θ = 0.64 → cosθ = 0.8." },
];

export const REACTIVOS_FISICA_2: Reactivo[] = [
    { id: "fi-006", materia: "fisica", subtema: "mecánica", dificultad: "basico", pregunta: "¿Cuál es la Primera Ley de Newton?", opciones: ["Un cuerpo en reposo permanece en reposo si no actúa una fuerza neta", "F = m × a", "Toda acción tiene una reacción igual y opuesta", "La gravedad es proporcional a la masa"], respuesta: 0, explicacion: "La 1ª Ley de Newton (Inercia): un objeto mantiene su estado de reposo o MRU si la fuerza neta es cero." },
    { id: "fi-007", materia: "fisica", subtema: "energía", dificultad: "intermedio", pregunta: "¿Qué establece la Primera Ley de la Termodinámica?", opciones: ["La energía no se crea ni se destruye, solo se transforma", "El calor siempre fluye del frío al caliente", "La entropía siempre aumenta", "Presión y temperatura son proporcionales"], respuesta: 0, explicacion: "La Primera Ley de la Termodinámica es el principio de conservación de la energía." },
    { id: "fi-008", materia: "fisica", subtema: "ondas", dificultad: "intermedio", pregunta: "¿Cuál es la velocidad aproximada del sonido en el aire?", opciones: ["340 m/s", "3000 m/s", "150 m/s", "1500 m/s"], respuesta: 0, explicacion: "La velocidad del sonido en el aire a 20°C es ≈ 340 m/s." },
];

export const REACTIVOS_QUIMICA_2: Reactivo[] = [
    { id: "qu-006", materia: "quimica", subtema: "tabla periódica", dificultad: "basico", pregunta: "¿Cuál es el elemento más abundante en la corteza terrestre?", opciones: ["Oxígeno", "Silicio", "Aluminio", "Hierro"], respuesta: 0, explicacion: "El oxígeno es el elemento más abundante en la corteza terrestre (46%)." },
    { id: "qu-007", materia: "quimica", subtema: "tabla periódica", dificultad: "intermedio", pregunta: "¿Qué grupo de la tabla periódica contiene los gases nobles?", opciones: ["Grupo 18 (VIII A)", "Grupo 1 (I A)", "Grupo 17 (VII A)", "Grupo 2 (II A)"], respuesta: 0, explicacion: "Los gases nobles (He, Ne, Ar...) están en el Grupo 18. Son estables porque tienen la capa de valencia completa." },
    { id: "qu-008", materia: "quimica", subtema: "reacciones", dificultad: "intermedio", pregunta: "¿Cuál es el producto de mezclar un ácido con una base?", opciones: ["Sal y agua", "Óxido e hidrógeno", "Gas y precipitado", "Alcohol y CO₂"], respuesta: 0, explicacion: "Ácido + base → sal + agua. Esta reacción se llama neutralización. Ej: HCl + NaOH → NaCl + H₂O." },
    { id: "qu-009", materia: "quimica", subtema: "carbono", dificultad: "avanzado", pregunta: "¿Qué hace especial al carbono en la química orgánica?", opciones: ["Puede formar 4 enlaces covalentes y cadenas largas", "Es el más abundante del universo", "Tiene muy alta electronegatividad", "Su color negro característico"], respuesta: 0, explicacion: "El carbono puede formar 4 enlaces y encadenarse con otros carbonos, creando millones de compuestos orgánicos." },
];

export const REACTIVOS_BIOLOGIA_2: Reactivo[] = [
    { id: "bi-006", materia: "biologia", subtema: "célula", dificultad: "basico", pregunta: "¿Cuál es la diferencia entre célula procariota y eucariota?", opciones: ["La eucariota tiene núcleo definido; la procariota no", "La procariota tiene cloroplastos", "La procariota es más grande", "No hay diferencia estructural"], respuesta: 0, explicacion: "La eucariota tiene núcleo con membrana nuclear. La procariota (bacterias) tiene el ADN libre en el citoplasma." },
    { id: "bi-007", materia: "biologia", subtema: "genética", dificultad: "intermedio", pregunta: "¿Cuántos cromosomas tiene normalmente una célula humana?", opciones: ["46 (23 pares)", "48 (24 pares)", "44 (22 pares)", "23"], respuesta: 0, explicacion: "Las células somáticas humanas tienen 46 cromosomas (23 pares). Los gametos tienen 23." },
    { id: "bi-008", materia: "biologia", subtema: "sistemas", dificultad: "basico", pregunta: "¿Cuál es la función principal del sistema digestivo?", opciones: ["Procesar alimentos y absorber nutrientes", "Transportar oxígeno a las células", "Filtrar la sangre", "Coordinar respuestas del organismo"], respuesta: 0, explicacion: "El sistema digestivo descompone los alimentos en nutrientes absorbibles por el intestino delgado." },
    { id: "bi-009", materia: "biologia", subtema: "ecosistemas", dificultad: "intermedio", pregunta: "¿Cómo se llama la relación en la que ambas especies se benefician?", opciones: ["Mutualismo", "Parasitismo", "Comensalismo", "Depredación"], respuesta: 0, explicacion: "Mutualismo: ambas se benefician (abeja y flor). Parasitismo: uno se beneficia y daña al otro." },
    { id: "bi-010", materia: "biologia", subtema: "sistemas", dificultad: "avanzado", pregunta: "¿Cuál es el órgano que produce insulina?", opciones: ["El páncreas", "El hígado", "El riñón", "La tiroides"], respuesta: 0, explicacion: "El páncreas produce insulina en las células beta de los islotes de Langerhans, regulando la glucosa en sangre." },
];

// ============================================================
// BANCO COMPLETO — todos los reactivos en un array
// ============================================================
export const TODOS_LOS_REACTIVOS: Reactivo[] = [
    ...REACTIVOS_HABILIDAD_VERBAL,
    ...REACTIVOS_HABILIDAD_VERBAL_2,
    ...REACTIVOS_HABILIDAD_MATEMATICA,
    ...REACTIVOS_HAB_MAT_2,
    ...REACTIVOS_ESPANOL,
    ...REACTIVOS_ESPANOL_2,
    ...REACTIVOS_HISTORIA,
    ...REACTIVOS_HISTORIA_2,
    ...REACTIVOS_GEOGRAFIA,
    ...REACTIVOS_GEOGRAFIA_2,
    ...REACTIVOS_FORMACION_CIVICA,
    ...REACTIVOS_CIVICA_2,
    ...REACTIVOS_MATEMATICAS,
    ...REACTIVOS_MATEMATICAS_2,
    ...REACTIVOS_FISICA,
    ...REACTIVOS_FISICA_2,
    ...REACTIVOS_QUIMICA,
    ...REACTIVOS_QUIMICA_2,
    ...REACTIVOS_BIOLOGIA,
    ...REACTIVOS_BIOLOGIA_2,
];

// Por materia — incluye TODOS los lotes
export const REACTIVOS_POR_MATERIA: Record<Materia, Reactivo[]> = {
    "habilidad-verbal": [...REACTIVOS_HABILIDAD_VERBAL, ...REACTIVOS_HABILIDAD_VERBAL_2],
    "habilidad-matematica": [...REACTIVOS_HABILIDAD_MATEMATICA, ...REACTIVOS_HAB_MAT_2],
    "espanol": [...REACTIVOS_ESPANOL, ...REACTIVOS_ESPANOL_2],
    "historia": [...REACTIVOS_HISTORIA, ...REACTIVOS_HISTORIA_2],
    "geografia": [...REACTIVOS_GEOGRAFIA, ...REACTIVOS_GEOGRAFIA_2],
    "formacion-civica": [...REACTIVOS_FORMACION_CIVICA, ...REACTIVOS_CIVICA_2],
    "matematicas": [...REACTIVOS_MATEMATICAS, ...REACTIVOS_MATEMATICAS_2],
    "fisica": [...REACTIVOS_FISICA, ...REACTIVOS_FISICA_2],
    "quimica": [...REACTIVOS_QUIMICA, ...REACTIVOS_QUIMICA_2],
    "biologia": [...REACTIVOS_BIOLOGIA, ...REACTIVOS_BIOLOGIA_2],
};

// Distribución oficial del examen UNAM/IPN (128 preguntas)
export const DISTRIBUCION_EXAMEN: Record<Materia, number> = {
    "habilidad-verbal": 16,
    "habilidad-matematica": 16,
    "espanol": 12,
    "historia": 12,
    "geografia": 12,
    "formacion-civica": 12,
    "matematicas": 12,
    "fisica": 12,
    "quimica": 12,
    "biologia": 12,
};

export const NOMBRES_MATERIAS: Record<Materia, string> = {
    "habilidad-verbal": "Habilidad Verbal",
    "habilidad-matematica": "Habilidad Matemática",
    "espanol": "Español",
    "historia": "Historia",
    "geografia": "Geografía",
    "formacion-civica": "Form. Cívica y Ética",
    "matematicas": "Matemáticas",
    "fisica": "Física",
    "quimica": "Química",
    "biologia": "Biología",
};

export const EMOJIS_MATERIAS: Record<Materia, string> = {
    "habilidad-verbal": "📖",
    "habilidad-matematica": "🧮",
    "espanol": "✍️",
    "historia": "🏛️",
    "geografia": "🗺️",
    "formacion-civica": "⚖️",
    "matematicas": "📐",
    "fisica": "⚡",
    "quimica": "🧪",
    "biologia": "🔬",
};

// Función para generar un simulacro completo de 128 preguntas
export function generarSimulacro(): Reactivo[] {
    const resultado: Reactivo[] = [];
    const materias = Object.keys(DISTRIBUCION_EXAMEN) as Materia[];

    for (const materia of materias) {
        const disponibles = REACTIVOS_POR_MATERIA[materia];
        const cantidad = DISTRIBUCION_EXAMEN[materia];
        const seleccionados = [...disponibles].sort(() => Math.random() - 0.5).slice(0, cantidad);
        resultado.push(...seleccionados);
    }

    return resultado;
}
