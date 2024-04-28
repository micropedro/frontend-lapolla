import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './menuClient.module.css'
import logo from '../../images/logo.png';

// eslint-disable-next-line react/prop-types
const MenuClient = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const [activePath, setActivePath] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggleMenu = () => {
        setExpanded(!expanded);
    };

    const handleClose = () => {
        localStorage.removeItem('user');
        navigate('/login');
        return null; 
    }

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <div className='container-fluid'>
            <Navbar bg="light" expand="md" className="d-block d-md-none">
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleMenu} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/lobby">Lobby</Nav.Link>
                        <Nav.Link as={Link} to="/history">Historial de Jugadas</Nav.Link>
                        <Nav.Link as={Link} to="/transactions">Transacciones</Nav.Link>
                        <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
                        <Nav.Link as={Link} to="/support">Soporte</Nav.Link>
                        <button onClick={handleClose}>Cerrar Sesion</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      
            <div className={`${styles.containerRow} row`}>
                <div className={`d-none d-md-block sidebar ${styles.bgSidebar}`}>
                    <div className={styles.sidebarSticky}>
                        <div className="row position-relative">             
                            <img src={logo} alt="Logo" className="mt-4" style={{ position: 'absolute', width: '100%', maxWidth: '150px'}} />
                        </div>
                        <Nav className={`${styles.sidebar} flex-column`}>
                            <Nav.Link as={Link} to="/lobby">
                                <i className={`bi bi-house-door-fill ${activePath === '/lobby' && 'active'}`}></i>
                            </Nav.Link> 
                            <Nav.Link as={Link} to="/history">
                                <i className={`bi bi-file-earmark-text-fill ${activePath === '/history' && 'active'}`}></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/transactions">
                                <i className={`bi bi-currency-exchange ${activePath === '/transactions' && 'active'}`}></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/perfil">
                                <i className={`bi bi-person-fill ${activePath === '/perfil' && 'active'}`}></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/support">
                                <i className={`bi bi-headphones ${activePath === '/support' && 'active'}`}></i>
                            </Nav.Link>
                            <Nav.Link onClick={handleClose}>
                                <i className="bi bi-door-open"></i>
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MenuClient;
