const formatDate = (date, daysAgo = 0) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - daysAgo)
    return newDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}

export const formatDate2 = (_date) => {
    const date = new Date(_date)
    date.setHours(date.getHours() + 4)
    const dia = String(date.getDate()).padStart(2, '0')
    const mes = String(date.getMonth() + 1).padStart(2, '0')
    const anio = date.getFullYear()
    return dia + '-' + mes + '-' + anio
}

export const getTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export const getTime2 = (dateString) => {
    const date = new Date(dateString)
    const hours = Number(date.getHours()) > 12 ? Number(date.getHours()) - 12 : Number(date.getHours())
    const _hours = String(hours).padStart(2, '0');
    const minutes = Number(date.getMinutes())
    const _minutes = String(minutes).padStart(2, '0')
    return `${_hours}:${_minutes} ${Number(date.getHours()) < 12 ? ' AM' : ' PM'}`
}

export const getTime4 = (dateString) => {
    const date = new Date(dateString)
    date.setHours(date.getHours() + 4)
    const hours = Number(date.getHours()) > 12 ? Number(date.getHours()) - 12 : Number(date.getHours())
    const _hours = String(hours).padStart(2, '0');
    const minutes = Number(date.getMinutes())
    const _minutes = String(minutes).padStart(2, '0')
    return `${_hours}:${_minutes} ${Number(date.getHours()) < 12 ? ' AM' : ' PM'}`
}

export const time_4 = (dateString) => {
    const date = new Date(dateString)
    /*  date.setHours(date.getHours()) */
    const hours = Number(date.getHours()) > 12 ? Number(date.getHours()) - 12 : Number(date.getHours())
    const _hours = String(hours).padStart(2, '0');
    const minutes = Number(date.getMinutes())
    const _minutes = String(minutes).padStart(2, '0')
    return `${_hours}:${_minutes} ${Number(date.getHours()) < 12 ? ' AM' : ' PM'}`
}

export const nivel = {
    4: "Agencia",
    5: "Cliente"
}

export default formatDate