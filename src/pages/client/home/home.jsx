import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="bg-dark text-center p-5">
            <div className="">
                <Link to='/login' className="btn btn-primary" >
                    Iniciar sesion
                </Link>
                <Link to='/register' className="btn btn-primary" >
                    Registrarme
                </Link>
            </div>
        </div>
    )
}

export default Home