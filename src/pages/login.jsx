import images from "../images/images"
import useLoadingStore from "../store/loadingStore"
import Spinner from "../components/Spinner"
import useLogin from "../hooks/useLogin"
const Login = () => {
    const { loading } = useLoadingStore()
    const { login } = useLogin()
   
    return (
        <>
            <div className="container-fluid bg-dark text-light min-vh-100">
                <div className="row wrap-login">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4 offset-1 offset-sm-2 offset-md-3 offset-lg-4 login-body p-4">
                        <div className="text-center">
                            <img src={images.logoPng} className="logo-login mb-2" alt="" />
                        </div>
                        <div className="mb-4">
                            <form onSubmit={e => { login(e) }}>
                                <span>Correo</span>
                                <input defaultValue={'manuelperez.0000@gmail.com'} name='email' type="email" className="form-control mb-3" placeholder="Ingrese su correo electronico" required />
                                <span>Contraseña</span>
                                <input defaultValue={'123456'} name="password" minLength='6' type="password" className="form-control mb-3" placeholder="Ingrese su contraseña" required />
                                <button className="btn btn-primary w-100">
                                    {loading ? <Spinner color='white' /> : 'Iniciar sesion '}
                                </button>
                            </form>
                        </div>
                        <div className="my-3">
                            <a href="">
                                Olvide mi contraseña
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login 