import { Link } from "react-router-dom"
import image from '@/images/images'
import styles from './menu.module.css'

const Menu = () => {
    return (<div className="bg-dark p-2 border-bottom border-secondary" >
        <div className="container">
            <div className="row">
                <div className="col-12 flex-between py-2">
                    <div style={{ pointerEvents: 'none' }} className="">
                        <Link to='/' ><img height='80px' src={image.logoPng} alt="Apuestalapolla" /></Link>
                        <span className={styles.titleLogo}>ApuestaLaPolla</span>
                    </div>
                    <div>
                        <Link to='/login'  >
                            <button className="btn btn-warning mx-1 btn-lg px-4 box-shadow-btn-landing btn-land-1">
                                <i className="bi bi-box-arrow-in-right mx-2" />
                                        Iniciar sesion
                            </button>
                        </Link>
                        <Link to='/register' >
                            <button className="btn btn-warning mx-1 btn-lg px-4 box-shadow-btn-landing btn-land-2">
                                <i className="bi bi-cloud-arrow-up mx-2" />
                                        Registrarme
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Menu