export const objectEmpty = (object) => {
    if (typeof object === "undefined") return true
    if (object === null) return true
    return Object.keys(object).length === 0
}

export const convertCeroNumber = (number) => number > 0 && number < 10 ? `0${number}` : number

export const textMenu = ["Taquilla", "Reporte", "Ganadores", "Tickets vendidos", "Pagos"]

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
}

export const validateUserType = (userLevel, levelForm) => {
    if (userLevel === 1) return true

    if (userLevel === 2 && ![1, 2].includes(levelForm)) return true

    if (userLevel === 3 && ![1, 2, 3].includes(levelForm)) return true

    if (userLevel === 4 && ![1, 2, 3, 4].includes(levelForm)) return true
    return false
}

export const formatIf37 = (idAnimal) => idAnimal === 37 ? "00" : idAnimal === 0 ? idAnimal : String(idAnimal).padStart(2, "0")

export const am_pm_format = (hora) => {
    return hora < 12 ? hora + " AM" : hora === 12 ? hora + " PM" : (hora - 12) + " PM";
}

export const cleanMethods = (methods) => methods.filter((obj, index, self) =>
    index === self.findIndex(t => t.methodName === obj.methodName) && !obj.deleted
)

export const isertSelectedSecondaryMethodName = (method) =>
    method.banco && method.banco + " " + method.tipo ||
    method.correo || method.nombre || method.cedula ||
    method.cedula || method.tipo || method.telefono

export const dateFormated = () => {

    const date = new Date()
    const fechaAyer = new Date()
    fechaAyer.setDate(fechaAyer.getDate() - 1)

    const hoyDate = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0")

    const ayerDate = fechaAyer.getFullYear() + "-" + String(fechaAyer.getMonth() + 1).padStart(2, "0") + "-" + String(fechaAyer.getDate()).padStart(2, "0")

    const hoy = hoyDate + "/" + hoyDate

    const ayer = ayerDate + "/" + ayerDate

    return { ayer, hoy }

}

export const handleAmount = (tipoDeCambio, amount) => (Math.floor(amount * tipoDeCambio * 100)) / 100

export const jugandoPara = () => {
    const date = new Date()
    const hour = date.getHours()

    if (hour < 10) {
        return "Hoy a las 10 AM"
    } else {
        return "Mañana a las 10 AM"
    }

}

export const totalAPagar = (tickets, precio) => {
    let total = 0
    if (Array.isArray(tickets) && tickets.length > 0) {
        tickets.forEach(ticket => {
            total = total + precio - ticket.report.agencia.amount
        })
    }
    return total
}


export const fechaJuego = (type) => {
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth() + 1
    const hora = date.getHours()
    const anio = date.getFullYear()

    const hoy = (dia, mes, anio) => `${String(dia).padStart(2, "0")}-${String(mes).padStart(2, "0")}-${anio}`
    const manana = (date) => {
        const newDate = new Date(date.setDate(date.getDate() + 1))
        return `${String(newDate.getDate()).padStart(2, "0")}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${newDate.getFullYear()}`
    }
    if (type === 1 && hora > 9 || type === 2 && hora > 14) return manana(date)
    if (type === 1 && hora < 10 || type === 2 && hora < 15) return hoy(dia, mes, anio)

    /* if (type === 1) {
        if (hora > 9) {
            const newDate = new Date(date.setDate(date.getDate() + 1))
            return `${String(newDate.getDate()).padStart(2, "0")}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${newDate.getFullYear()}`
        } else {
            return `${String(dia).padStart(2, "0")}-${String(mes).padStart(2, "0")}-${anio}`
        }
    } else {
        if (hora > 14) {
            const newDate = new Date(date.setDate(date.getDate() + 1))

            return `${String(newDate.getDate()).padStart(2, "0")}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${newDate.getFullYear()}`
        } else {
            return `${String(dia).padStart(2, "0")}-${String(mes).padStart(2, "0")}-${anio}`
        }
    } */
}

export const TEXTSTATUS = {
    1: { color: 'warning', text: 'En espera' },
    2: { color: 'success', text: 'Ganador' },
    3: { color: 'danger', text: 'Perdedor' },
}

export const $last = (cant, string) => {
    return string.slice(-cant)
}

export const calcAciertos = (ticket) => {

    console.log("ticket: "+ticket)

    const ticketAnimal = ticket?.animals?.map(i => i.id)
    const resultAnimals = ticket?.quiniela?.resultAnimals?.map(j => j.animalId)

    const x = ticketAnimal?.filter(k => resultAnimals?.includes(k))
    console.log(x.length)
    return x.length

}

export const addAciertos = (tickets) => tickets.map(ticket => {
    console.log("tickets: ",tickets)
    const numeroDeAciertos = calcAciertos(ticket) || 0
    return { ...ticket, numeroDeAciertos }
})