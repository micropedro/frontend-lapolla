import styles from './lobby.module.css'
import logo from '@/images/col.jpg'
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

const Lobby = () => {
    const [show, setShow] = useState(true);
    return  (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/lobby">Lobby</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav>
            </div>
            <div className='row'>
                { show && (
                    <Alert variant="info" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>¡Bienvenido a ApuestaLaPolla, nuestra plataforma de juegos de quinielas!</Alert.Heading>
                        <p>
                            Estamos emocionados de tenerte en nuestra plataforma,
                            Aqui encontrarás los juegos de quinielas disponibles 
                            que te mantendrán entretenido mientras ganas emocionantes premios.
                        </p>
                    </Alert>
                )}
            </div>
        </div>
        <div className={`row d-flex gap-5 justify-content-center vh-100 p-5`}>
            <div className={`${styles.col} col-sm-12 col-md-6 `}>
                <img className={`${styles.imgCol} rounded`} src={logo} alt="" />
            </div>
            <div className={`${styles.col} col-sm-12 col-md-6`}>
                <img className={`${styles.imgCol} rounded`} src={logo} alt="" />
            </div>
        </div>
    </>)
}

export default Lobby
