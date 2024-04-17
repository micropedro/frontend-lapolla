import { Link } from 'react-router-dom';
import styles from './perfil.module.css'

const Perfil = () => {
    return (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/perfil">Perfil</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div className={`row d-flex gap-5 justify-content-center p-5`}>   
            <div className='col-12 pt-5'><h3 className={styles.h3}>Perfil de Usuario:</h3></div>
            <div className={`col-12`}>
                <div className={`${styles.card} card mb-3`}>
                    <div className="row g-0">
                        <div className={`${styles.avatar} col-md-4 d-grid`}>
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text"><i className="bi bi-person"></i> Jason Hernandez</p>
                                <p className="card-text"><i className="bi bi-envelope"></i> kaltre10@gmail.com</p>
                                <p className="card-text"><i className="bi bi-telephone-fill"></i> 917545622</p>
                                <p className="card-text"><i className="bi bi-pin-map"></i> Los cocos 211, Tucupita Delta Amacuto</p>
                                <p className="card-text"><i className="bi bi-calendar-fill"></i> Desde 17/04/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Perfil