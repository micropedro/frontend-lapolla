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
    
    const depositStatus = (state) => {

        if (state === 1) return <div className="bg-warning text-light flex-center"> Pendiente </div>
        if (state === 2) return <div className="bg-success text-light flex-center"> aprobado </div>
        if (state === 3) return <div className="bg-danger text-light flex-center"> Anulado </div>

    }

    return {
        formatDate, formatHours, depositStatus
    }
}

export default usePendientes