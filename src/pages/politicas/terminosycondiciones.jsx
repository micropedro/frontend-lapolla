import { Link } from 'react-router-dom'
import images from '../../images/images'
const Terminosycondiciones = () => {
    return (
        <div className="bg-dark min-h-100 p-5">
            <div className="card p-4">
                <div className='flex-between'>
                    <h2>
                        Terminos y condiciones de uso
                    </h2>
                    <Link to={'/'}>
                        <img height={'100px'} src={images.logoPng} alt="" />
                    </Link>
                </div>
                <hr />
                <p className="text-lg">Uso de la aplicación</p>
                <span className="pb-4">
                    Al utilizar la aplicación Apuestas La Polla, aceptas cumplir con los siguientes
                    términos y condiciones:
                </span>
                <div className="p-3">
                    <ul>
                        <li>Debes tener al menos 18 años de edad para utilizar nuestra aplicación.</li>
                        <li>Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</li>
                        <li>No puedes utilizar la aplicación para fines ilegales o no autorizados.</li>
                        <li>No puedes interferir con el funcionamiento normal de la aplicación.</li>
                        <li>No puedes utilizar la aplicación para difamar, acosar o violar los derechos de terceros.</li>
                        <li>Nos reservamos el derecho de suspender o cancelar tu cuenta en caso de incumplimiento de estos términos y condiciones.</li>
                    </ul>
                </div>

                <p className="text-lg">Propiedad intelectual</p>
                <span className="pb-4">Todos los derechos de propiedad intelectual relacionados con la
                    aplicación y su contenido son propiedad de Apuestas La Polla. No se permite la
                    reproducción, distribución o modificación del contenido sin nuestro consentimiento
                    previo por escrito.</span>

                <p className="text-lg">Limitación de responsabilidad</p>
                <span className="pb-4">No nos hacemos responsables de cualquier daño o pérdida causada por el uso de nuestra
                    aplicación. Utilizas la aplicación bajo tu propio riesgo.</span>

                <p className="text-lg">Jurisdicción y ley aplicable</p>
                <span className="pb-4">Estos términos y condiciones se rigen por las leyes del país en el
                    que operamos.
                    Cualquier disputa relacionada con estos términos y condiciones se someterá a la
                    jurisdicción exclusiva de los tribunales de ese país.
                </span>
            </div>
            <div className="text-center py-4">
                <Link to={'/'}>
                    <button className="btn btn-primary"> <i className='bi bi-arrow-left' /> Regresar </button>
                </Link>
            </div>
        </div>
    )
}

export default Terminosycondiciones