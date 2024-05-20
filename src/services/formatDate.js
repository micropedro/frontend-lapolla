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
    const dia = String(date.getDate() + 1).padStart(2, '0')
    const mes = String(date.getMonth()).padStart(2, '0')
    const anio = date.getFullYear()
    return dia + '-' + mes + '-' + anio
}

export const getTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

export default formatDate