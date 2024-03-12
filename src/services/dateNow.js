const date = new Date()
const fecha = date.toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' })
const minutos = date.getMinutes()
const horas = date.getHours()
const periodo = horas >= 12 ? 'PM' : 'AM';
const seconds = date.getSeconds()

const dateNow = {
    fecha,
    minutos,
    periodo,
    seconds,
    horas
}

export default dateNow