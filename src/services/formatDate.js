const formatDate = (date, daysAgo = 0) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - daysAgo)
    return newDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}

export default formatDate