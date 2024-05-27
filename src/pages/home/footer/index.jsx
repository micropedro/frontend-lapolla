import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled linkRedes">
                            <li><a href="#"> <i className='bi bi-facebook' /> Facebook</a></li>
                            <li><a href="#"> <i className='bi bi-facebook' /> Twitter</a></li>
                            <li><a href="#"> <i className='bi bi-facebook' /> Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacto</h5>
                        <p>Dirección: Calle Principal, Ciudad, País</p>
                        <p>Teléfono: +123456789</p>
                        <p>Email: ejemplo@example.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Descarga nuestra App</h5>
                        <button className={`${styles.btnApp} btn btn-default mb-3`}>
                            <i className="bi bi-android2"></i> Descargar App
                        </button>
                        <h5>Términos y Condiciones</h5>
                        <p><Link to={'/terminos-y-condiciones'}>Términos de Servicio</Link></p>
                        <p><Link to={'/politicas-de-privacidad'}>Política de Privacidad</Link></p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="text-center">
                        <p>&copy; 2024 Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
