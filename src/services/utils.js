export const objectEmpty = (object) => {
    if (typeof object === "undefined") return true
    if (object === null) return true
    return Object.keys(object).length === 0
}

export const convertCeroNumber = (number) => number > 0 && number < 10 ? `0${number}` : number

export const comprobacion = ({ animals, user, type }) => animals.length === 3 || animals.length === 6 && type === 1 || type === 2 && user

export const textMenu = ["Taquilla", "Reporte", "Ganadores"]

export const getMiliseconds = (date) => {
    const [fecha, hora] = date.split(" ")
    const [dia, mes, anio] = fecha.split("-")
    const [hh, mm, ss] = hora.split(":")
    return new Date(anio, mes - 1, dia, hh, mm, ss).getTime()
}

export const convertDate = (date) => {
    const [dia, mes, anio] = date.split("-")
    return new Date(anio, mes - 1, dia).getTime()
}