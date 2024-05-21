const usePendientes = () => {
    const formatDate = (date) => {
        const fecha = new Date(date)
        const day = String(fecha.getDate()).padStart(2, '0')
        const month = String(fecha.getMonth() + 1).padStart(2, '0')
        const year = String(fecha.getFullYear()).padStart(2, '0')
        return day + '-' + month + '-' + year
    }

    const formatHours = (date) => {
        const hours = new Date(date)
        const hour = String(hours.getHours()).padEnd(2, '0')
        const min = String(hours.getMinutes()).padStart(2, '0')
        return hour + ':' + min
    }
    
    const depositStatus = (status) => {

        if (status === 1) return <div className="bg-warning text-light flex-center">{status}  Pendiente </div>
        if (status === 2) return <div className="bg-success text-light flex-center">{status} aprobado </div>
        if (status === 3) return <div className="bg-danger text-light flex-center">{status} Anulado </div>

    }

    return {
        formatDate, formatHours, depositStatus
    }
}

export default usePendientes