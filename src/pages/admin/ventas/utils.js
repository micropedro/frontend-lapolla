export const formatedDate = (_date) => {
    const date = new Date(_date)
    const dia = String(date.getDate()).padStart(2, '0')
    const anio = date.getFullYear()
    const mes = String(date.getMonth() + 1).padStart(2, '0')
    const newDateText = `${dia}-${mes}-${anio}`
    return newDateText
}

export const formatHour = (hour) => {
    if (hour === 12) return "12:00 PM"
    if (hour < 12) return String(hour).padStart(2, "0") + ":00 AM"
    if (hour > 12){
        return String(hour - 12).padStart(2,"0") + ":00 PM"
    }else{
        return "Error en hora"
    }
}

