const date = new Date()
const fecha = date.toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' })
const minutos = date.getMinutes()
const horas = date.getHours()
const periodo = horas >= 12 ? 'PM' : 'AM';
const seconds = date.getSeconds()
const anio = date.getFullYear()
const mes = String(date.getMonth() + 1).padStart(2, '0')
const dia = String(date.getDate()).padStart(2, '0')

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