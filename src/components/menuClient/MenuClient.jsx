import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './menuClient.module.css'
import logo from '../../images/logo.png';
import userStore from '../../store/userStore'

// eslint-disable-next-line react/prop-types
const MenuClient = ({ children }) => {

    const [expanded, setExpanded] = useState(false)
    const [activePath, setActivePath] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = userStore()

    const handleToggleMenu = () => setExpanded(!expanded)

    const handleClose = () => {
        localStorage.removeItem('user')
        setUser({ _id: '', level: 0 })
        navigate('/login')
        return null
    }

    useEffect(() => {
        setActivePath(location.pathname)
        setExpanded(!expanded)
    }, [location])

    return (
        <div className='container-fluid bg-granja p-0' >
            <div className="row g-0">
                <div className='col-12'>
                    <Navbar expand="md" className="d-block d-md-none p-2">
                        <div className='flex-between'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' onClick={() => handleToggleMenu()} />
                            <b className='text-light' >Saldo: 3000 BS.</b>
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto text-light mt-3">
                                <Nav.Link as={Link} to="/lobby" className='text-light'> <i className='bi bi-controller px-1' /> Lobby</Nav.Link>
                                <Nav.Link as={Link} to="/history" className='text-light'><i className='bi bi-play px-1' /> Historial de Jugadas</Nav.Link>
                                <Nav.Link as={Link} to="/transactions" className='text-light'><i className='bi bi-list px-1' /> Transacciones</Nav.Link>
                                <Nav.Link as={Link} to="/perfil" className='text-light'><i className='bi bi-people px-1' /> Perfil</Nav.Link>
                                <Nav.Link as={Link} to="/support" className='text-light'><i className='bi bi-envelope px-1' /> Soporte</Nav.Link>
                                <button className='btn btn-light mt-3' onClick={() => handleClose()}>Cerrar Sesion</button>
                                <hr className='text-light' />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className={`${styles.bgSidebar} d-none d-md-block `}>
                        <div className='p-2'>
                            <Nav.Link as={Link} to="/">
                                <img src={logo} alt="Logo" className="mt-4 w-100" />
                            </Nav.Link>
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
                            <Nav.Link onClick={() => handleClose()}>
                                <i className="bi bi-door-open"></i>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuClient
