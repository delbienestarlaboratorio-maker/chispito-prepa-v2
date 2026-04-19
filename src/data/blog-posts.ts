// ================================================
// BLOG POSTS — prepa.chispito.mx
// 15 artículos SEO de alto tráfico orgánico
// Temas: aciertos mínimos, diferencias de escuelas,
//        tips de estudio, fechas COMIPEMS 2025
// ================================================

export type BlogPost = {
    slug: string;
    titulo: string;
    descripcionSeo: string;
    categoria: "puntajes" | "guias" | "comparativas" | "consejos" | "fechas";
    fecha: string; // YYYY-MM-DD
    tiempoLectura: number; // minutos
    contenido: string; // HTML/Markdown simplificado
    tags: string[];
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "cuantos-aciertos-necesito-cch-naucalpan-2025",
        titulo: "¿Cuántos aciertos necesito para el CCH Naucalpan 2025?",
        descripcionSeo: "Descubre el puntaje mínimo histórico del CCH Naucalpan. Analizamos los datos 2020-2024 y te decimos qué puntaje prepararte para quedar en el examen UNAM 2025.",
        categoria: "puntajes",
        fecha: "2025-01-15",
        tiempoLectura: 5,
        tags: ["CCH Naucalpan", "puntajes UNAM", "examen UNAM 2025", "aciertos mínimos"],
        contenido: `
## ¿Cuántos aciertos necesitas para el CCH Naucalpan?

El CCH Naucalpan es uno de los planteles con **mayor demanda en la UNAM** y por lo tanto uno de los más competidos. Según los datos históricos del COMIPEMS:

| Año | Puntaje mínimo aproximado |
|-----|--------------------------|
| 2024 | 100 – 108 |
| 2023 | 98 – 105 |
| 2022 | 97 – 104 |
| 2021 | 94 – 102 |
| 2020 | 95 – 103 |

### ¿Por qué varía cada año?
El puntaje mínimo depende de:
- **Cuántos lugares disponibles** hay ese año
- **Cuántos aspirantes** eligen ese plantel como primera opción
- **El nivel general** de los examinados ese año

### ¿Qué puntaje debes buscar?
Para entrar con relativa seguridad al CCH Naucalpan, apunta a **103+ aciertos**. Si obtienes 108+, tienes una probabilidad muy alta.

### Tips para lograrlo
1. **Practica el simulacro completo** varias veces cronometrado (3 horas exactas)
2. **Enfócate en Habilidad Verbal y Matemática** (40 preguntas = 31% del examen)
3. **Repasa Matemáticas** — es donde más puntos se pueden recuperar con práctica
4. Haz el [simulacro UNAM gratuito aquí](/unam/simulador)

> Los datos son orientativos. La UNAM no publica puntajes de corte pero estos rangos son consistentes con reportes de aspirantes cada año.
        `,
    },
    {
        slug: "diferencia-cch-enp-cual-elegir-2025",
        titulo: "CCH vs ENP: ¿Cuál es la diferencia y cuál elegir?",
        descripcionSeo: "¿No sabes si elegir el CCH o la ENP de la UNAM? Te explicamos las diferencias en plan de estudios, duración, materiales y pase reglamentado para que tomes la mejor decisión.",
        categoria: "comparativas",
        fecha: "2025-01-20",
        tiempoLectura: 7,
        tags: ["CCH vs ENP", "diferencias UNAM", "pase reglamentado", "bachillerato UNAM"],
        contenido: `
## CCH vs ENP: ¿Cuál es mejor para ti?

La UNAM tiene dos sistemas de bachillerato con filosofías muy distintas. Ambos otorgan el pase reglamentado a la UNAM, pero la experiencia es completamente diferente.

### Colegio de Ciencias y Humanidades (CCH)
- **Duración**: 2 años (4 semestres)
- **Enfoque**: Aprendizaje activo y autodidacta
- **Materias**: Menos asignaturas pero más profundas
- **Ambiente**: Más libertad y responsabilidad del alumno
- **Planteles**: Azcapotzalco, Naucalpan, Oriente, Sur, Vallejo

### Escuela Nacional Preparatoria (ENP)
- **Duración**: 3 años (6 semestres)
- **Enfoque**: Estructura tradicional con más materias
- **Materias**: Más asignaturas, preparación más enciclopédica  
- **Ambiente**: Más similar a la secundaria en estructura
- **Planteles**: ENP 1 al 9

### ¿Cuál tiene puntaje de entrada más bajo?
En general, los planteles de la ENP en zonas periféricas tienen puntajes de corte ligeramente más bajos que los del CCH en zonas de alta demanda. Sin embargo, los planteles más solicitados de ambos sistemas son muy competidos.

### ¿Cuál da mejor pase a qué carrera?
Ambos dan acceso a **cualquier carrera de la UNAM** mediante el pase reglamentado. Lo que importa es tu promedio y el cupo disponible en la carrera.

| Criterio | CCH | ENP |
|----------|-----|-----|
| Duración | 2 años | 3 años |
| Libertad académica | Alta | Media |
| Estructura | Semestral flexible | Anual tradicional |
| Promedio requerido para pase | 7.0+ | 7.0+ |

→ Usa nuestra [calculadora de puntajes](/unam/calculadora) para saber a qué plantel puedes aspirar.
        `,
    },
    {
        slug: "fechas-comipems-2025-todo-lo-que-necesitas-saber",
        titulo: "Fechas COMIPEMS 2025: Todo lo que necesitas saber",
        descripcionSeo: "Calendario completo del proceso COMIPEMS 2025. Fechas de registro, aplicación del examen, publicación de resultados y períodos de inscripción al bachillerato.",
        categoria: "fechas",
        fecha: "2025-01-10",
        tiempoLectura: 4,
        tags: ["COMIPEMS 2025", "fechas registro", "examen bachillerato", "calendario UNAM IPN"],
        contenido: `
## Calendario COMIPEMS 2025

El Concurso de Ingreso a la Educación Media Superior (COMIPEMS) es el proceso unificado para ingresar a los bachilleratos de la UNAM, IPN, COLBACH y otras instituciones.

### Fechas clave 2025 (orientativas)

| Etapa | Fecha aproximada |
|-------|-----------------|
| Registro en línea | Febrero – Marzo 2025 |
| Descarga de ficha | Marzo 2025 |
| Aplicación del examen | Junio 2025 |
| Publicación de resultados | Julio 2025 |
| Período de inscripción | Julio – Agosto 2025 |
| Inicio de clases | Agosto – Septiembre 2025 |

> ⚠️ Las fechas exactas se publican en **comipems.org.mx** cada año en enero. Revisa ahí para confirmar.

### ¿Cómo registrarse?
1. Entra a **comipems.org.mx**
2. Regístrate con tu CURP y datos de secundaria
3. Elige hasta 20 opciones de escuela en orden de preferencia
4. Descarga tu ficha y preséntate al examen

### El examen
- **128 preguntas** de opción múltiple (4 opciones)
- **3 horas** para contestarlo
- Sin penalización por respuesta incorrecta
- Puedes dejarlo en blanco si no sabes

→ Practica con nuestro [simulacro gratuito](/unam/simulador) con el mismo formato y tiempo.
        `,
    },
    {
        slug: "cecyt-mas-dificiles-de-entrar-ipn-2025",
        titulo: "Los CECyT más difíciles de ingresar al IPN en 2025",
        descripcionSeo: "Descubre cuáles son los CECyT del IPN con mayor demanda y puntajes más altos. Ranking de los 19 planteles por dificultad de ingreso con datos históricos.",
        categoria: "puntajes",
        fecha: "2025-01-25",
        tiempoLectura: 5,
        tags: ["CECyT IPN", "puntajes IPN", "bachillerato IPN 2025", "aciertos IPN"],
        contenido: `
## Los CECyT más difíciles de entrar al IPN

El IPN tiene 19 planteles CECyT en la Zona Metropolitana. Aquí el ranking por dificultad de acceso basado en la demanda histórica:

### Muy alta demanda (90+ aciertos estimados)
- **CECyT 6 — Eutimio Pérez Castellanos (Mendizábal)**: El más solicitado, zona Tlatelolco
- **CECyT 9 — Juan de Dios Bátiz**: Alta demanda, especialidades tecnológicas punteras
- **CECyT 11 — Wilfrido Massieu**: Especialidades de cómputo muy cotizadas

### Alta demanda (85-90 aciertos estimados)
- CECyT 1 — González Vázquez Vela
- CECyT 7 — Cuauhtémoc
- CECyT 14 — Luis Enrique Erro

### Demanda media (80-85 aciertos estimados)
- CECyT 2, 3, 5, 10

### Acceso más sencillo (74-80 aciertos estimados)
- CECyT 15, 16, 17, 18, 19

> ⚠️ El IPN no publica puntajes mínimos oficiales. Estos datos son estimaciones basadas en la demanda histórica por zona.

### ¿Cómo prepararte?
Usa nuestra [calculadora IPN](/ipn/calculadora) para ver en qué CECyT tienes posibilidades con tu puntaje actual, y el [simulacro IPN](/ipn/simulador) para practicar.
        `,
    },
    {
        slug: "como-estudiar-para-el-comipems-en-3-meses",
        titulo: "Cómo estudiar para el COMIPEMS en 3 meses: Plan de estudio",
        descripcionSeo: "Plan de estudio de 12 semanas para preparar el examen COMIPEMS. Distribución de materias, horas de estudio recomendadas y recursos gratuitos para subir tu puntaje.",
        categoria: "consejos",
        fecha: "2025-02-01",
        tiempoLectura: 8,
        tags: ["plan de estudio COMIPEMS", "cómo estudiar para el examen", "tips COMIPEMS", "preparación bachillerato"],
        contenido: `
## Plan de 12 semanas para el COMIPEMS

Si tienes 3 meses antes del examen, puedes mejorar significativamente tu puntaje con un plan estratégico. Aquí el plan semana a semana:

### Semanas 1-3: Diagnóstico y Bases
- Haz un simulacro completo sin estudiar para ver tu nivel base
- Identifica tus 3 materias más débiles
- Repasa los conceptos fundamentales de Matemáticas y Álgebra

### Semanas 4-6: Habilidades
- Dedica 45 min diarios a **Habilidad Verbal** (analogías y antónimos)
- Dedica 45 min diarios a **Habilidad Matemática** (series y problemas)
- Compra o descarga el libro COMIPEMS oficial para estas materias

### Semanas 7-9: Ciencias y Social
- Repasa Historia de México (guerras, independencia, revolución)
- Estudia Biología (célula, sistemas del cuerpo)
- Repasa los grupos de la Tabla Periódica (Química)

### Semanas 10-11: Práctica intensiva
- 1 simulacro completo por semana (3 horas exactas, sin interrupciones)
- Analiza tus errores pregunta por pregunta
- Refuerza los temas donde más fallaste

### Semana 12: Repaso final
- No aprendas cosas nuevas (ya es tarde)
- Haz simulacros más cortos (30 min) para mantener el ritmo
- Duerme bien y cuida tu alimentación

### Distribución de tiempo recomendada

| Materia | Horas semanales |
|---------|----------------|
| Habilidad Verbal | 4h |
| Habilidad Matemática | 4h |
| Matemáticas | 3h |
| Historia | 2h |
| Español/Biología | 2h |
| Química/Física/Geografía | 1h c/u |

→ [Hacer simulacro de práctica →](/unam/simulador)
        `,
    },
    {
        slug: "ecoems-que-es-como-funciona-2025",
        titulo: "ECOEMS 2025: Qué es y cómo ingresar al bachillerato sin examen",
        descripcionSeo: "Guía completa del sistema ECOEMS 2025. Aprende cómo ingresar al bachillerato sin presentar examen de admisión, qué documentos necesitas y cuáles instituciones participan.",
        categoria: "guias",
        fecha: "2025-01-05",
        tiempoLectura: 6,
        tags: ["ECOEMS 2025", "bachillerato sin examen", "COLBACH sin examen", "miderechomilugar"],
        contenido: `
## ECOEMS: Bachillerato sin examen en 2025

Si no lograste quedar en el COMIPEMS o prefieres no presentar examen, **ECOEMS** es tu opción. Es el sistema de asignación de la SEP para estudiantes que no participaron (o no quedaron) en el concurso con examen.

### ¿Qué es ECOEMS?
ECOEMS (Espacio Común de Educación Media Superior) es la plataforma de la SEP donde puedes registrarte para recibir una asignación a bachillerato **sin necesidad de presentar un examen**.

### ¿Cómo te asignan un lugar?
La asignación considera:
1. **Tu promedio de secundaria** (mientras más alto, mejores opciones)
2. **Las escuelas que eliges** (puedes seleccionar hasta 6)
3. **Los lugares disponibles** en cada institución

### Instituciones disponibles en ECOEMS
- COLBACH (Colegio de Bachilleres) — 20 planteles en CDMX
- CONALEP — Bachillerato técnico federal
- CBTis / CETis — Bachillerato tecnológico
- IEMS — Instituto de Educación Media Superior (CDMX)
- Prepa en Línea SEP — 100% en línea, gratuita
- Prepa Abierta SEP — Sistema flexible sin horario fijo

### Proceso paso a paso
1. Entra a **miderechomilugar.sep.gob.mx**
2. Regístrate con tu CURP y datos de secundaria
3. Elige hasta 6 opciones de institución
4. Espera la publicación de resultados (generalmente en abril)
5. Acepta el lugar asignado y ve a inscribirte

→ Más detalles en nuestra [guía completa de ECOEMS](/ecoems/como-funciona)
        `,
    },
    {
        slug: "pase-reglamentado-unam-como-funciona",
        titulo: "El pase reglamentado UNAM: cómo funciona y qué carreras puedes pedir",
        descripcionSeo: "Explica exactamente cómo funciona el pase reglamentado de la UNAM desde el CCH y la ENP. Promedio mínimo requerido, carreras disponibles y diferencias con el concurso de selección.",
        categoria: "guias",
        fecha: "2025-02-10",
        tiempoLectura: 6,
        tags: ["pase reglamentado UNAM", "CCH pase a licenciatura", "ENP carreras UNAM", "ingreso UNAM sin examen"],
        contenido: `
## El pase reglamentado de la UNAM: una ventaja enorme

Si estudias en el CCH o la ENP, tendrás acceso prioritario a cualquier licenciatura de la UNAM mediante el **pase reglamentado**. Esto significa que **NO necesitas presentar el examen de selección** de la universidad.

### ¿Quién tiene derecho al pase reglamentado?
Todo alumno que:
- Estudió el bachillerato en el **CCH o la ENP** de la UNAM
- Tiene un **promedio mínimo de 7.0** en el bachillerato
- Está dentro del porcentaje de egresados que la carrera acepta por esta vía

### ¿A qué carreras puedes pedir con pase reglamentado?
A **todas las carreras de la UNAM**. Sin embargo, en carreras de alta demanda (Medicina, Derecho, Psicología) el pase reglamentado no garantiza el lugar — hay un máximo de alumnos por pase por carrera.

### Carreras donde el pase NO garantiza el lugar
- Medicina — requiere promedio mínimo de 9.0+
- Leyes / Derecho — alta demanda
- Psicología — muy solicitada

### ¿Cuándo se solicita el pase?
Al terminar el bachillerato (en diciembre o junio, según tu turno de egreso). El proceso se realiza en el portal de la UNAM y tienes que elegir tu carrera y facultad.

### Consejo clave
Si quieres una carrera muy solicitada, **mantén tu promedio lo más alto posible** desde el primer semestre del CCH/ENP. El pase reglamentado con promedio de 9.0+ prácticamente garantiza acceso a cualquier carrera.
        `,
    },
    {
        slug: "colbach-vs-conalep-diferencias",
        titulo: "COLBACH vs CONALEP: ¿Cuál es mejor opción para ti?",
        descripcionSeo: "Compara el COLBACH y el CONALEP en México: plan de estudios, duración, título técnico, costos, requisitos y posibilidades de continuar a la universidad. Te ayudamos a elegir.",
        categoria: "comparativas",
        fecha: "2025-02-15",
        tiempoLectura: 5,
        tags: ["COLBACH vs CONALEP", "bachillerato técnico", "diferencias bachillerato", "sin examen bachillerato"],
        contenido: `
## COLBACH vs CONALEP: Las diferencias clave

Ambas son opciones de bachillerato accesibles mediante el sistema ECOEMS (sin examen). Pero tienen diferencias importantes:

### Colegio de Bachilleres (COLBACH)
- **Duración**: 3 años (6 semestres)
- **Enfoque**: Bachillerato general con componente propedéutico
- **Título**: Solo el bachillerato (no da título técnico)
- **Acceso a universidad**: Puede presentar examen a cualquier universidad
- **Costo**: Gratuito (solo trámites documentales)
- **Planteles en CDMX**: 20 planteles

### CONALEP
- **Duración**: 3 años (6 semestres)
- **Enfoque**: Bachillerato tecnológico (mitad escolaridad general + mitad técnica)
- **Título**: Técnico en tu área de especialidad
- **Acceso a universidad**: Puede continuar a universidad, pero el enfoque es laboral
- **Costo**: Gratuito (cobros mínimos por materiales técnicos)
- **Ventaja**: Sales graduado con experiencia práctica en tu área

| Criterio | COLBACH | CONALEP |
|----------|---------|---------|
| Título técnico | ❌ | ✅ |
| Orientación universitaria | Alta | Media |
| Enfoque laboral | Bajo | Alto |
| Especialidades | ❌ | ✅ |

### ¿Cuál elegir?
- Si quieres ir a la universidad: **COLBACH**
- Si quieres trabajar rápido y opcionalmente continuar: **CONALEP**
        `,
    },
    {
        slug: "matematicas-comipems-temas-mas-frecuentes",
        titulo: "Matemáticas COMIPEMS: los 10 temas más frecuentes del examen",
        descripcionSeo: "Análisis de los temas de Matemáticas más repetidos en el COMIPEMS. Álgebra, geometría, probabilidad y estadística con ejemplos de preguntas y estrategias de solución.",
        categoria: "guias",
        fecha: "2025-02-20",
        tiempoLectura: 7,
        tags: ["matemáticas COMIPEMS", "temas examen UNAM", "álgebra preparatoria", "geometría bachillerato"],
        contenido: `
## Los 10 temas de Matemáticas más frecuentes en el COMIPEMS

Matemáticas tiene 20 preguntas en el examen y es donde más puntos puedes recuperar estudiando eficientemente. Estos son los temas que aparecen con más frecuencia:

### 1. Ecuaciones de primer grado (5-6 preguntas)
La mayoría de exámenes incluyen al menos 2-3 problemas con ecuaciones tipo 2x + 5 = 11.

### 2. Ecuaciones cuadráticas (3-4 preguntas)
Factorización y la fórmula general ax² + bx + c = 0.

### 3. Porcentajes y proporciones (3-4 preguntas)
"¿Cuánto es el 15% de 240?" o "Si X es el 30% de Y..."

### 4. Área y perímetro de figuras (3-4 preguntas)
Triángulos, rectángulos, círculos. Siempre viene el teorema de Pitágoras.

### 5. Estadística básica (2-3 preguntas)
Media, mediana y moda. Relativamente fácil de dominar.

### 6. Probabilidad (2-3 preguntas)
Lanzar una moneda, sacar una carta, tirar un dado.

### 7. Funciones (2-3 preguntas)
Evaluar f(x) y representar con tablas de valores.

### 8. Trigonometría básica (1-2 preguntas)
Sen, cos, tan. El triángulo 3-4-5 y sus múltiplos aparecen mucho.

### 9. Progresiones y sucesiones (1-2 preguntas)
Suma de progresiones aritméticas y geométricas.

### 10. Factorización algebraica (1-2 preguntas)
Diferencia de cuadrados, trinomio cuadrado perfecto.

### Consejo de oro
**No memorices fórmulas sin entender qué significan.** El examen COMIPEMS pone énfasis en aplicaciones, no en repetición mecánica.

→ Practica con nuestro [simulacro gratuito](/unam/simulador)
        `,
    },
    {
        slug: "historia-mexico-temas-comipems-resumen",
        titulo: "Historia de México para el COMIPEMS: resumen de los temas más importantes",
        descripcionSeo: "Resumen de Historia de México para el examen COMIPEMS 2025. Los períodos más evaluados: Independencia, Reforma, Porfiriato, y Revolución Mexicana con fechas y personajes clave.",
        categoria: "guias",
        fecha: "2025-03-01",
        tiempoLectura: 8,
        tags: ["Historia México COMIPEMS", "Independencia México examen", "Revolución Mexicana fechas", "historia bachillerato"],
        contenido: `
## Historia de México para el COMIPEMS: lo esencial

Historia tiene 13 preguntas en el examen. Aquí los períodos y temas que más aparecen:

### 1. Independencia de México (1810-1821)
**Las fechas clave que debes saber:**
- **16 de septiembre de 1810**: Grito de Dolores (Miguel Hidalgo)
- **1811**: Muerte de Hidalgo; continúa Morelos
- **1821**: Consumación de la Independencia (Agustín de Iturbide, Plan de Iguala)

**Personajes**: Hidalgo, Morelos, Guerrero, Iturbide

### 2. El Porfiriato (1876-1911)
- Gobierno de Porfirio Díaz durante 34 años
- Modernización con inversión extranjera
- Ferrocarriles, industria, pero alta desigualdad social

### 3. La Revolución Mexicana (1910-1920)
**Los actores principales:**
- **Francisco I. Madero**: Inició el movimiento (Plan de San Luis)
- **Emiliano Zapata**: Luchó por la tierra (Plan de Ayala)
- **Pancho Villa**: Norte del país
- **Venustiano Carranza**: Promulgó la Constitución de 1917

**Preguntas frecuentes:**
- ¿Qué artículo constitucional establece el reparto agrario? → **Artículo 27**
- ¿Qué artículo regula el trabajo? → **Artículo 123**
- ¿Qué artículo garantiza la educación? → **Artículo 3°**

### 4. Historia Universal: Lo más evaluado
- Primera Guerra Mundial: 1914-1918
- Segunda Guerra Mundial: 1939-1945  
- Revolución Francesa: 1789 (Libertad, Igualdad, Fraternidad)
- Guerra Fría: 1947-1991 (EE.UU. vs URSS)

→ Practica preguntas de Historia en el [simulacro gratuito](/unam/simulador)
        `,
    },
    {
        slug: "5-errores-comipems-que-bajan-tu-puntaje",
        titulo: "Los 5 errores más comunes en el COMIPEMS que bajan tu puntaje",
        descripcionSeo: "Evita los errores más comunes que cometen los aspirantes al COMIPEMS. Desde no leer bien las preguntas hasta mala administración del tiempo — cómo evitarlos.",
        categoria: "consejos",
        fecha: "2025-03-05",
        tiempoLectura: 5,
        tags: ["errores COMIPEMS", "consejos examen bachillerato", "estrategia COMIPEMS", "cómo mejorar puntaje"],
        contenido: `
## Los 5 errores que más bajan puntaje en el COMIPEMS

Muchos aspirantes pierden puntos no por no saber, sino por estos errores estratégicos:

### Error #1: No administrar el tiempo
El examen tiene 128 preguntas en 180 minutos = 1.4 minutos por pregunta. Si te quedas atascado en una pregunta difícil, pierdes tiempo de las fáciles.

**Solución**: Si tardas más de 2 minutos en una pregunta, márcala y sigue. Vuelve al final.

### Error #2: Dejar preguntas en blanco innecesariamente
El COMIPEMS **NO descuenta por respuesta incorrecta**. Nunca dejes una pregunta en blanco — aunque no sepas, tienes 25% de probabilidad marcando al azar.

**Solución**: Al final del examen, responde todo. Usa proceso de eliminación para aumentar tu probabilidad.

### Error #3: No leer bien las opciones
Muchas respuestas están diseñadas para parecer correctas a primera vista. Lee las 4 opciones siempre, incluso si la primera parece obvia.

### Error #4: No practicar con tiempo
Resolver ejercicios sin cronómetro no te prepara para la presión del examen real.

**Solución**: Haz al menos 3 simulacros completos de 3 horas antes del examen.

### Error #5: Estudiar todo por igual
Con 10 materias, no puedes dominar todo. Enfócate en las que tienen más preguntas:
- Habilidad Verbal (16 preguntas)
- Habilidad Matemática (16 preguntas)
- Matemáticas (20 preguntas)

Estas 3 materias son el 41% del examen.

→ [Hacer simulacro gratis para practicar →](/unam/simulador)
        `,
    },
    {
        slug: "enp-9-cuantos-aciertos-necesitas",
        titulo: "ENP 9 Pedro de Alba: ¿Cuántos aciertos necesitas entrar?",
        descripcionSeo: "Datos históricos de puntaje mínimo para ingresar a la ENP 9 Pedro de Alba (Satélite). Qué puntaje prepararte, ubicación, especialidad y por qué es una de las más solicitadas.",
        categoria: "puntajes",
        fecha: "2025-03-10",
        tiempoLectura: 4,
        tags: ["ENP 9 puntaje", "ENP Pedro de Alba", "preparatoria UNAM norte", "aciertos ENP"],
        contenido: `
## ENP 9 Pedro de Alba: puntaje y todo lo que necesitas saber

La Escuela Nacional Preparatoria Número 9 "Pedro de Alba" es una de las preparatorias más solicitadas de la UNAM, ubicada en Naucalpan, Estado de México.

### Datos del plantel
- **Ubicación**: Av. de los Maestros s/n, Cd. Satélite, Naucalpan de Juárez
- **Turnos**: Matutino y Vespertino
- **Capacidad**: Aproximadamente 3,000 alumnos
- **Duración**: 3 años (bachillerato ENP)

### Puntajes históricos orientativos

| Año | Rango estimado |
|-----|---------------|
| 2024 | 95 – 103 |
| 2023 | 93 – 100 |
| 2022 | 91 – 99 |
| 2021 | 88 – 97 |

### ¿Por qué es tan solicitada?
- Ubicación estratégica en Naucalpan/Satélite
- Excelente reputación académica
- Acceso directo al pase reglamentado UNAM
- Instalaciones deportivas y culturales de calidad

### ¿Qué puntaje apuntar?
Para ingresar con seguridad, busca **98+ aciertos**. Con 103+ tu probabilidad es muy alta.

→ Usa la [calculadora UNAM](/unam/calculadora) para ver tu probabilidad actual y el [simulacro gratis](/unam/simulador) para prepararte.
        `,
    },
    {
        slug: "habilidad-verbal-como-mejorar-para-el-comipems",
        titulo: "Habilidad Verbal COMIPEMS: cómo mejorarla en 4 semanas",
        descripcionSeo: "Estrategias probadas para mejorar tu Habilidad Verbal antes del COMIPEMS. Analogías, antónimos, sinónimos y comprensión de lectura con ejercicios prácticos.",
        categoria: "consejos",
        fecha: "2025-03-15",
        tiempoLectura: 6,
        tags: ["habilidad verbal COMIPEMS", "analogías verbales", "comprensión lectora examen", "cómo mejorar habilidad verbal"],
        contenido: `
## Cómo mejorar tu Habilidad Verbal en 4 semanas

La Habilidad Verbal tiene 16 preguntas en el COMIPEMS — es la materia de mayor peso junto con Habilidad Matemática. Aquí una estrategia para mejorar rápido:

### Semana 1: Domina las analogías
Las analogías son preguntas tipo "LIBRO : BIBLIOTECA :: cuadro : ___". La clave es identificar el **tipo de relación**:

- **Objeto – lugar donde se guarda/colecciona**: libro:biblioteca, cuadro:museo
- **Causa – efecto**: lluvia:inundación, sequía:hambre
- **Profesional – problema que resuelve**: médico:enfermedad, abogado:conflicto
- **Parte – todo**: pétalo:flor, eslabón:cadena

Practica identificando la relación antes de ver las opciones.

### Semana 2: Sinónimos y antónimos
Estudia por grupos:
- **Palabras positivas**: magnánimo, perspicaz, diligente, eufórico
- **Palabras negativas**: efímero, tacaño, ominoso, prolijo
- Aprende 10 palabras nuevas al día con su sinónimo y antónimo

### Semana 3: Comprensión de lectura
Para preguntas de comprensión:
1. Lee el texto completo una vez
2. Identifica la **idea principal** (generalmente en la primera o última oración)
3. Lee la pregunta y vuelve al texto para confirmar
4. Elimina opciones claramente incorrectas

### Semana 4: Práctica con tiempo
Resuelve conjuntos de 16 preguntas en 22 minutos (el tiempo proporcional del examen real).

→ Practica analogías y sinónimos en nuestro [simulacro gratuito](/unam/simulador)
        `,
    },
    {
        slug: "cch-sur-vs-cch-oriente-cual-es-mejor",
        titulo: "CCH Sur vs CCH Oriente: ¿Cuál es mejor según tu zona?",
        descripcionSeo: "Comparativa entre el CCH Sur y el CCH Oriente. Ubicación, demanda, puntaje de ingreso, instalaciones y ambiente académico para ayudarte a elegir el mejor según dónde vives.",
        categoria: "comparativas",
        fecha: "2025-03-20",
        tiempoLectura: 5,
        tags: ["CCH Sur", "CCH Oriente", "comparativa CCH", "cuál CCH elegir"],
        contenido: `
## CCH Sur vs CCH Oriente: la comparativa definitiva

Dos de los cinco planteles del CCH con características muy distintas. Aquí te ayudamos a elegir según tu zona y preferencias:

### CCH Sur
- **Ubicación**: Insurgentes Sur, Pedregal de Carrasco, Delegación Coyoacán
- **Zona que sirve**: Sur de CDMX (Tlalpan, Xochimilco, Coyoacán)
- **Demanda**: Alta — una de las más solicitadas por su ubicación y ambiente
- **Puntaje estimado**: 97-105 aciertos
- **Ambiente**: Universitario, activo políticamente, mucha oferta cultural

### CCH Oriente
- **Ubicación**: Calzada Ignacio Zaragoza, Iztapalapa
- **Zona que sirve**: Oriente de CDMX (Iztapalapa, Iztacalco, Valle de Chalco)
- **Demanda**: Media – buena opción para zona oriente
- **Puntaje estimado**: 90-98 aciertos
- **Ambiente**: Comunidad grande, diversa, buenas instalaciones deportivas

### ¿Cuál elegir?
| Criterio | CCH Sur | CCH Oriente |
|----------|---------|-------------|
| Dificultad de ingreso | Mayor | Menor |
| Transporte | Metro Copilco/Insurgentes | Metro Guelatao/Zaragoza |
| Ambiente académico | Muy activo | Activo |
| Puntaje requerido | 97-105 | 90-98 |

**Si vives en el sur**: CCH Sur es la opción natural y te ahorra tiempo de traslado.
**Si vives en el oriente**: CCH Oriente es la opción estratégica y con menor puntaje requerido.

→ Usa la [calculadora UNAM](/unam/calculadora) para ver tus posibilidades en cada plantel.
        `,
    },
    {
        slug: "que-pasa-si-no-quedo-en-el-comipems",
        titulo: "No quedé en el COMIPEMS 2025: ¿Qué hago ahora?",
        descripcionSeo: "Guía para aspirantes que no quedaron en el COMIPEMS 2025. Opciones disponibles: ECOEMS, segunda vuelta, bachilleratos privados, examen de segunda oportunidad y más.",
        categoria: "guias",
        fecha: "2025-03-25",
        tiempoLectura: 5,
        tags: ["no quedé COMIPEMS", "segunda oportunidad bachillerato", "ECOEMS alternativa", "qué hacer sin lugar en preparatoria"],
        contenido: `
## No quedé en el COMIPEMS: tus opciones

Si no obtuviste lugar en el COMIPEMS, no te desesperes. Hay varias alternativas disponibles:

### Opción 1: ECOEMS (la más recomendada)
El sistema ECOEMS asigna lugares en bachilleratos como COLBACH, CONALEP, CBTis y más, sin necesidad de examen. Solo necesitas tu promedio de secundaria.

→ [Ver guía completa de ECOEMS](/ecoems)

### Opción 2: Examen extraordinario / segunda vuelta
Algunas instituciones ofrecen una segunda oportunidad de examen en septiembre. Revisa en:
- IEMS (Instituto de Educación Media Superior CDMX)
- Algunas preparatorias estatales

### Opción 3: Bachilleratos incorporados (privados con reconocimiento SEP)
Si tu familia puede apoyar económicamente, existen preparatorias incorporadas a la UNAM o SEP que tienen proceso de admisión propio y pueden ser una opción válida.

### Opción 4: Prepa en Línea SEP
Totalmente gratuita, 100% en línea, flexible con tus horarios. Puedes estudiar y trabajar al mismo tiempo. Al terminar obtienes el mismo certificado de bachillerato.

→ [Ver más sobre Prepa en Línea](/ecoems)

### Opción 5: Prepararte para el próximo año
Si tu objetivo es quedar en la UNAM o el IPN, puedes esperar al siguiente ciclo y prepararte mejor con nuestros recursos:

- [Simulacro UNAM gratuito](/unam/simulador)
- [Plan de estudio de 12 semanas](/blog/como-estudiar-para-el-comipems-en-3-meses)
- [Calculadora de puntajes](/unam/calculadora)

### Mensaje importante
No quedarse en el COMIPEMS no determina tu futuro. Muchas personas exitosas estudiaron en COLBACH, CONALEP o preparatorias privadas. Lo que importa es que **no pierdas el año** y continúes con tu educación.
        `,
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug);
}

export const CATEGORIAS_BLOG = {
    puntajes: "📊 Puntajes y Estadísticas",
    guias: "📚 Guías Completas",
    comparativas: "⚖️ Comparativas",
    consejos: "💡 Consejos y Tips",
    fechas: "📅 Fechas y Calendario",
};
