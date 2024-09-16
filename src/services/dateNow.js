const date = new Date()
const fecha = date.toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' })
const horas = String(date.getHours()).padStart(2, "0")
const minutos = String(date.getMinutes()).padStart(2, "0")
const seconds = String(date.getSeconds()).padStart(2, "0")
const dia = String(date.getDate()).padStart(2, '0')
const mes = String(date.getMonth() + 1).padStart(2, '0')
const anio = date.getFullYear()
const periodo = horas >= 12 ? 'PM' : 'AM';

const dateNow = {
    fecha,
    minutos,
    periodo,
    seconds,
    horas,
    anio,
    mes,
    dia
}

export default dateNow