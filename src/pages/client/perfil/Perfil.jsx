import { Link } from 'react-router-dom';
import styles from './perfil.module.css'
import BancoModal from '../../../components/modals/BancoModal/BancoModal'
import { useState } from 'react'

const Perfil = () => {
    const [ showBank, setShowBank ] = useState(false) 
    return (<>
        {<BancoModal show={showBank} handleClose={setShowBank} />}
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
        <div className={`row gap-5 p-5`}>  
            <div className='col-12 pt-5'><h3 className={styles.h3}>Perfil de Usuario:</h3></div>
        </div>
        <div className='row p-5 pt-1'>
            <div className='col-md-12 col-lg-6'>
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
            <div className='col-md-12 col-lg-6'>
                <div className={`${styles.card} card mb-3`}>
                    <div className="row g-0">
                        <div className={`${styles.avatar} col-md-12 d-grid text-center p-4`}>
                            <div className='row d-flex align-items-center'>
                                <h4 className="col-md-6">Bancos registrardos:</h4>
                                <div className="col-md-6">
                                    <button onClick={() => setShowBank(true)} className="btn btn-success"><i className="bi bi-house-add" style={{ fontSize: '20px' }}></i> Agregar banco</button>
                                </div>
                            </div>
                        </div>
                        <div className="row gap-1 d-flex justify-content-center gap-4">
                            <div className="card col-5">
                                <div className="card-body">
                                    <h5 className="card-title">Banco de Venezuela</h5>
                                    <p className="card-text">321654987</p>
                                    <p className="card-text">cuenta de ahorro</p>
                                </div>
                            </div>
                            <div className="card col-5">
                                <div className="card-body">
                                    <h5 className="card-title">Banco de Venezuela</h5>
                                    <p className="card-text">321654987</p>
                                    <p className="card-text">cuenta de ahorro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Perfil