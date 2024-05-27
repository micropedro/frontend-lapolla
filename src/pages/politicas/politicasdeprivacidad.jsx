import { Link } from "react-router-dom"
import images from '../../images/images'
const Politicasdeprivacidad = () => {
    return (
        <div className="bg-dark min-h-100 p-5">
            <div className="card p-4">

                <div className='flex-between'>
                    <h2>
                        Politicas de Privacidad
                    </h2>
                    <Link to={'/'}>
                        <img height={'100px'} src={images.logoPng} alt="" />
                    </Link>
                </div>
                <hr />

                <p className="text-lg">Introducción</p>
                <span className="pb-4">
                    En Apuestas La Polla, nos tomamos muy en serio la privacidad de nuestros usuarios.
                    Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la
                    información personal de nuestros usuarios. Al utilizar nuestra aplicación, aceptas
                    los términos y condiciones de esta política de privacidad.
                </span>

                <p className="text-lg">Información que recopilamos</p>
                <span className="pb-4">
                    Recopilamos información personal de nuestros usuarios cuando se registran en nuestra
                    aplicación, como nombres, direcciones de correo electrónico y números de teléfono.
                    También podemos recopilar información no personal, como datos de uso y preferencias.
                </span>

                <p className="text-lg"> Uso de la información</p>
                <span className="pb-4">
                    Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios,
                    personalizar la experiencia del usuario, enviar comunicaciones relacionadas con la aplicación
                    y cumplir con las obligaciones legales.
                </span>

                <p className="text-lg">  Divulgación de la información</p>
                <span className="pb-4">
                    No compartimos información personal con terceros, excepto en los casos en que sea
                    necesario para proporcionar nuestros servicios o cuando estemos legalmente obligados
                    a hacerlo.
                </span>

                <p className="text-lg">Seguridad de la información</p>
                <span className="pb-4">
                    Implementamos medidas de seguridad para proteger la información personal de nuestros
                    usuarios contra el acceso no autorizado, la alteración o la destrucción.
                </span>

                <p className="text-lg"> Cambios en la política de privacidad</p>
                <span className="pb-4">
                    Nos reservamos el derecho de modificar esta política de privacidad en cualquier
                    momento. Te recomendamos que revises periódicamente esta página para estar al tanto
                    de cualquier cambio.
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

export default Politicasdeprivacidad