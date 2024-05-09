export const objectEmpty = (object) => {
    if (typeof object === "undefined") return true
    if (object === null) return true
    return Object.keys(object).length === 0
}

export const convertCeroNumber = (number) => number > 0 && number < 10 ? `0${number}` : number

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

export const userType = (type) => {
    if (type === 1) return 'master'
    if (type === 2) return 'administrador'
    if (type === 3) return 'grupero'
    if (type === 4) return 'agencia'
    if (type === 5) return 'cliente'
    return 'ERROR'
}

export const restarDias = (fechaBase, dias) => {
    try {
        const date = new Date(fechaBase);
        date.setDate(date.getDate() - dias)
        return date.getFullYear() + '-' + (String(date.getMonth() + 1).padStart(2, '0')) + '-' + (String(date.getDate() + 1).padStart(2, '0'))
    } catch (error) {
        return false
    }
}

export const getTicketCode = () => {

    const digits = "23456789ACDEFGHJKLMPQRTUX"
    const randomDigit = () => digits[Math.floor((Math.random() * digits.length))]
    let ticketCode = ""
    for (let index = 1; index < 7; index++) {
        ticketCode += randomDigit()
    }
    return ticketCode

    /*let uuid = uuidv4();
    uuid = uuid.replace(/[01iy\W_]/g, '')
    uuid = uuid.slice(0, 6)
    return uuid */
}

export const validateUserType = (userLevel, levelForm) => {
    if (userLevel === 1) return true

    if (userLevel === 2 && ![1, 2].includes(levelForm)) return true

    if (userLevel === 3 && ![1, 2, 3].includes(levelForm)) return true

    if (userLevel === 4 && ![1, 2, 3, 4].includes(levelForm)) return true
    return false
}