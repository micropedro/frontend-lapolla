import images from '@/images/images'
import useLoadingStore from '@/store/loadingStore'
import Spinner from '@/components/spinner'
import useRegister from '@/hooks/useRegister'
import useLogin from '@/hooks/useLogin'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {
    const { loading } = useLoadingStore()
    const { eye, setEye } = useLogin()
    const { register } = useRegister()
    const [reEye, setReEye] = useState(false)

    return (
        <>
            <div className="container-fluid bg-dark text-light min-vh-100">
                <div className="row wrap-login">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4 offset-1 offset-sm-2 offset-md-3 offset-lg-4 login-body p-4">
                        <h2>Registro</h2>
                        <div className="text-center">
                            <img src={images.logoPng} className="logo-login mb-2" alt="" />
                        </div>
                        <div className="mb-4">
                            <form onSubmit={e => { register(e) }}>
                                <span>Nombre</span>
                                <input name='name' type="text" className="form-control mb-3" placeholder="Ingrese su nombre completo" required />
                                <span>Correo</span>
                                <input name='email' type="email" className="form-control mb-3" placeholder="Ingrese su correo electrónico" required />
                                <span>Cédula de identidad</span>
                                <input name='ci' type="number" className="form-control mb-3" placeholder="Ingrese su cédula de identidad" required />
                                <span>Teléfono</span>
                                <input name='phone' type="number" className="form-control mb-3" placeholder="Ingrese su teléfono" required />
                                <div className="flex-between">
                                    <span>Contraseña</span>
                                    <i onClick={() => setEye(!eye)} className={eye ? 'bi eye-button bi-eye-slash' : 'bi eye-button bi-eye'} />
                                </div>
                                <input name="password" minLength='6' type={eye ? 'text' : 'password'} className="form-control mb-3" placeholder="Ingrese su contraseña" required />
                                <div className="flex-between">
                                    <span>Repetir Contraseña</span>
                                    <i onClick={() => setReEye(!reEye)} className={reEye ? 'bi eye-button bi-eye-slash' : 'bi eye-button bi-eye'} />
                                </div>
                                <input name="repassword" minLength='6' type={reEye ? 'text' : 'password'} className="form-control mb-3" placeholder="Repetir contraseña" required />
                                <button className="btn btn-primary w-100">
                                    {loading ? <Spinner /> : 'Registrar '}
                                </button>
                            </form>
                        </div>
                        <div className="my-3">
                            <Link to='/login' >
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register 