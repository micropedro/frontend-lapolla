export function getTimeUntil(targetHour, targetMinute = 0, targetSecond = 0) {
    // Obtiene la hora actual
    const now = new Date();

    // Crea una fecha para la hora objetivo del mismo día
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute, targetSecond);

    // Si la hora objetivo ya pasó hoy, ajusta para el próximo día
    if (now > targetDate) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    /*     calcula la diferencia en milisegundos */
    const difference = targetDate - now;

    // Convierte la diferencia en horas, minutos y segundos
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        hours,
        minutes,
        seconds
    };
}

export const quiniela =
    [
        {
            nombre: "Mini Quiniela",
            asiertos: "4 animalitos",
            duracion: "5",
            hora: "03:00 PM - 07:00 PM",

            btnText: "Jugar Mini Quiniela",
            type: 'mini'
        },
        {
            nombre: "Gran Quiniela",
            asiertos: "6 animalitos",
            hora: "10:00 AM - 08:00 PM",
            duracion: "11",

            btnText: "Jugar Gran Quiniela",
            type: 'quiniela'
        },

    ]