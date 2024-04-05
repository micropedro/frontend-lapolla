import { Link } from "react-router-dom"
import image from '../../images/images'
const Home = () => {
    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12 flex-between py-2">
                            <div className="">
                                <img height='80px' src={image.logoPng} alt="" />
                            </div>
                            <div>
                                <Link to='/login' className="btn btn-warning mx-1 btn-lg px-4" >
                                    <i className="bi bi-box-arrow-in-right mx-2" />
                                    Iniciar sesion
                                </Link>
                                <Link to='/register' className="btn btn-primary mx-1 btn-lg px-4" >
                                    <i className="bi bi-cloud-arrow-up mx-2" />
                                    <i>
                                        Registrarme
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>contenido aqui</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home