/* eslint-disable react/prop-types */
import { datos } from '../../services/metodos.json'
const ortographi = {
    cedula: "Cédula",
    correo: "Correo",
    cuenta: "Cuenta",
    banco: "Banco",
    tipo: "Tipo",
    nombre: "Nombre",
    telefono: "Teléfono"
}

const MethodSelected = ({ method, userMethods }) => {

    console.log(method, userMethods)

    if (userMethods && userMethods.length > 0 && method) {
        const metodo = userMethods.filter(i => i._id === method)[0]

        const A = ({ i }) => {
            if (metodo[i]) return <div key={i._id}> {ortographi[i]}: {metodo[i]} </div>
        }

        if (method && userMethods) return (
            <div className='card p-3 my-3'>
                <h5>Datos</h5>
                {datos.map(i => {
                    return i && <A key={i._id} i={i} />
                })}
            </div>
        )
    }
}

export default MethodSelected