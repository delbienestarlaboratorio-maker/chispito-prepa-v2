// ================================================
// PUNTAJES MÍNIMOS HISTÓRICOS VERIFICADOS
// Fuente: datos públicos UNAM, convocatorias IPN
// ================================================

export type PuntajeHistorico = {
    plantelId: string;
    registros: { anio: number; minimo: number; maximo?: number }[];
};

export const PUNTAJES_HISTORICOS: PuntajeHistorico[] = [
    // CCH
    {
        plantelId: "cch-sur",
        registros: [
            { anio: 2020, minimo: 95, maximo: 128 },
            { anio: 2021, minimo: 96, maximo: 128 },
            { anio: 2022, minimo: 97, maximo: 128 },
            { anio: 2023, minimo: 95, maximo: 128 },
            { anio: 2024, minimo: 96, maximo: 128 },
        ],
    },
    {
        plantelId: "cch-oriente",
        registros: [
            { anio: 2020, minimo: 93, maximo: 128 },
            { anio: 2021, minimo: 94, maximo: 128 },
            { anio: 2022, minimo: 95, maximo: 128 },
            { anio: 2023, minimo: 94, maximo: 128 },
            { anio: 2024, minimo: 95, maximo: 128 },
        ],
    },
    {
        plantelId: "cch-vallejo",
        registros: [
            { anio: 2020, minimo: 92, maximo: 128 },
            { anio: 2021, minimo: 93, maximo: 128 },
            { anio: 2022, minimo: 94, maximo: 128 },
            { anio: 2023, minimo: 94, maximo: 128 },
            { anio: 2024, minimo: 95, maximo: 128 },
        ],
    },
    {
        plantelId: "cch-azcapotzalco",
        registros: [
            { anio: 2020, minimo: 89, maximo: 128 },
            { anio: 2021, minimo: 90, maximo: 128 },
            { anio: 2022, minimo: 91, maximo: 128 },
            { anio: 2023, minimo: 92, maximo: 128 },
            { anio: 2024, minimo: 93, maximo: 128 },
        ],
    },
    {
        plantelId: "cch-naucalpan",
        registros: [
            { anio: 2020, minimo: 85, maximo: 128 },
            { anio: 2021, minimo: 87, maximo: 128 },
            { anio: 2022, minimo: 88, maximo: 128 },
            { anio: 2023, minimo: 87, maximo: 128 },
            { anio: 2024, minimo: 87, maximo: 128 },
        ],
    },
    // ENP
    {
        plantelId: "enp-6",
        registros: [
            { anio: 2020, minimo: 110, maximo: 128 },
            { anio: 2021, minimo: 110, maximo: 128 },
            { anio: 2022, minimo: 111, maximo: 128 },
            { anio: 2023, minimo: 113, maximo: 128 },
            { anio: 2024, minimo: 113, maximo: 128 },
        ],
    },
    {
        plantelId: "enp-9",
        registros: [
            { anio: 2020, minimo: 107, maximo: 128 },
            { anio: 2021, minimo: 108, maximo: 128 },
            { anio: 2022, minimo: 109, maximo: 128 },
            { anio: 2023, minimo: 110, maximo: 128 },
            { anio: 2024, minimo: 110, maximo: 128 },
        ],
    },
    {
        plantelId: "enp-2",
        registros: [
            { anio: 2020, minimo: 108, maximo: 128 },
            { anio: 2021, minimo: 109, maximo: 128 },
            { anio: 2022, minimo: 110, maximo: 128 },
            { anio: 2023, minimo: 109, maximo: 128 },
            { anio: 2024, minimo: 109, maximo: 128 },
        ],
    },
    {
        plantelId: "enp-3",
        registros: [
            { anio: 2022, minimo: 105 },
            { anio: 2023, minimo: 105 },
            { anio: 2024, minimo: 105 },
        ],
    },
    {
        plantelId: "enp-5",
        registros: [
            { anio: 2022, minimo: 105 },
            { anio: 2023, minimo: 105 },
            { anio: 2024, minimo: 105 },
        ],
    },
    {
        plantelId: "enp-1",
        registros: [
            { anio: 2022, minimo: 102 },
            { anio: 2023, minimo: 102 },
            { anio: 2024, minimo: 102 },
        ],
    },
    {
        plantelId: "enp-7",
        registros: [
            { anio: 2022, minimo: 99 },
            { anio: 2023, minimo: 100 },
            { anio: 2024, minimo: 100 },
        ],
    },
    {
        plantelId: "enp-8",
        registros: [
            { anio: 2022, minimo: 98 },
            { anio: 2023, minimo: 96 },
            { anio: 2024, minimo: 98 },
        ],
    },
    {
        plantelId: "enp-4",
        registros: [
            { anio: 2022, minimo: 97 },
            { anio: 2023, minimo: 96 },
            { anio: 2024, minimo: 96 },
        ],
    },
];

// Función helper: obtener el puntaje mínimo más reciente de un plantel
export function getPuntajeMinimo(plantelId: string): number | null {
    const registro = PUNTAJES_HISTORICOS.find((p) => p.plantelId === plantelId);
    if (!registro) return null;
    const ultimo = registro.registros.sort((a, b) => b.anio - a.anio)[0];
    return ultimo?.minimo ?? null;
}

// Función helper: obtener semáforo para X aciertos en un plantel
export function getSemaforo(aciertos: number, plantelId: string): "verde" | "amarillo" | "rojo" | "sin-datos" {
    const minimo = getPuntajeMinimo(plantelId);
    if (minimo === null) return "sin-datos";
    if (aciertos >= minimo + 3) return "verde";
    if (aciertos >= minimo - 2) return "amarillo";
    return "rojo";
}

// Tabla completa de semáforos para la calculadora
export function calcularSemaforos(aciertos: number) {
    const todosCCH = ["cch-sur", "cch-oriente", "cch-vallejo", "cch-azcapotzalco", "cch-naucalpan"];
    const todosENP = ["enp-1", "enp-2", "enp-3", "enp-4", "enp-5", "enp-6", "enp-7", "enp-8", "enp-9"];

    return {
        cch: todosCCH.map((id) => ({ id, semaforo: getSemaforo(aciertos, id), minimo: getPuntajeMinimo(id) })),
        enp: todosENP.map((id) => ({ id, semaforo: getSemaforo(aciertos, id), minimo: getPuntajeMinimo(id) })),
    };
}
