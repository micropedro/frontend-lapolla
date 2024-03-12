import images from '../images/images'
import useRecuperacion from '../hooks/useRecuperacion'
import useLoadingStore from '../store/loadingStore'
import Spinner from '../components/spinner'
import Guard from '../components/Guard'
function Recuperacion() {
    const { loading } = useLoadingStore()
    const { verifyTemporalPass, sendTemporalPass, saveNewPassword, step } = useRecuperacion()
    return (
        <Guard>
            <div className="container-fluid bg-dark text-light min-vh-100">
                <div className="row wrap-login">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4 offset-1 offset-sm-2 offset-md-3 offset-lg-4 login-body p-4">
                        <div className="text-center">
                            <img src={images.logoPng} className="logo-login mb-2" alt="" />
                        </div>
                        <div className='text-center'>
                            <h4>Recuperacion de contraseña</h4>
                        </div>
                        {step === 1 && <>
                            <div className="mb-4">
                                <form onSubmit={e => { sendTemporalPass(e) }}>
                                    <span>Correo</span>
                                    <input defaultValue={'manuelperez.0000@gmail.com'} name='email' type="email" className="form-control mb-3" placeholder="Ingrese su correo electronico" required />
                                    <button className="btn btn-primary w-100">
                                        {loading ? <Spinner color='white' /> : 'Enviar correo'}
                                    </button>
                                </form>
                            </div>
                        </>}

                        {step === 2 && <>
                            <div className="mb-4">
                                <form onSubmit={e => { verifyTemporalPass(e) }}>
                                    <span>Ingrese su clave temporal</span>
                                    <input defaultValue={''} name='temporalPass' type="text" className="form-control mb-3" placeholder="Ingrese su clave temporal" required />
                                    <button className="btn btn-primary w-100">
                                        {loading ? <Spinner color='white' /> : 'Continuar'}
                                    </button>
                                </form>
                            </div>
                        </>}

                        {step === 3 && <>
                            <div className="mb-4">
                                <form onSubmit={e => { saveNewPassword(e) }}>
                                    <span>Ingrese su nueva clave</span>
                                    <input name='password1' minLength='6' type="text" className="form-control mb-3" placeholder="Ingrese su clave temporal" required />
                                    <span>Repita su clave</span>
                                    <input name='password2' minLength='6' type="text" className="form-control mb-3" placeholder="Ingrese su clave temporal" required />

                                    <button className="btn btn-primary w-100">
                                        {loading ? <Spinner color='white' /> : 'Continuar'}
                                    </button>
                                </form>
                            </div>
                        </>}

                        <div className='text-center'>
                            <p>Te enviaremos un correo con tu clave temporal de recuperacion</p>
                        </div>
                    </div>
                </div>
            </div>
        </Guard>
    )
}

export default Recuperacion