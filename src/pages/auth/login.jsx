import images from "@/images/images"
import useLoadingStore from "@/store/loadingStore"
import Spinner from "@/components/spinner"
import useLogin from "../../hooks/useLogin"
import Menu from '@/components/menu'
import { Link } from "react-router-dom"
const Login = () => {
    const { loading } = useLoadingStore()
    const { login, eye, setEye } = useLogin()

    return (
        <>
            <Menu />
            <div className="container-fluid bg-dark text-light min-vh-100 container-auth">
                <div className="row wrap-login">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4 offset-1 offset-sm-2 offset-md-3 offset-lg-4 login-body p-4">
                        <h2>Login</h2>
                        <div className="text-center">
                            <img src={images.logoPng} className="logo-login mb-2" alt="" />
                        </div>
                        <div className="mb-4">
                            <form onSubmit={e => { login(e) }}>
                                <span>Correo</span>
                                <input defaultValue={'manuelperez.0000@gmail.com'} name='email' type="email" className="form-control mb-3" placeholder="Ingrese su correo electronico" required />
                                <div className="flex-between">
                                    <span>Contraseña</span>
                                </div>
                                <div className="input-group mb-3">
                                    <input name="password" minLength='6' type={eye ? "text" : "password"} className="form-control" placeholder="Ingrese su contraseña" required />
                                    <span className="input-group-text"> <i onClick={() => setEye(!eye)} className={eye ? 'bi eye-button bi-eye-slash' : 'bi eye-button bi-eye'} /></span>
                                </div>
                                <button className="btn btn-primary w-100">
                                    {loading ? <Spinner /> : 'Iniciar sesion '}
                                </button>
                            </form>
                        </div>
                        <div className="my-3">
                            <Link to='/recuperacion' >
                                Olvide mi contraseña
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to='/register' >
                                Registrate aquí
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login 