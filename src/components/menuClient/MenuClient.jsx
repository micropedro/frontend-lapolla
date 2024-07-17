/* eslint-disable react/prop-types */
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './menuClient.module.css'
import logo from '../../images/logo.png';
import useMenuClient from './useMenuClient';
import cash from '../../services/cash';

const MenuClient = ({ children }) => {

    const { handleClose, NavLink, user, handleToggleMenu } = useMenuClient()

    return (
        <div className='container-fluid bg-granja p-0' >
            <div className="row g-0">
                <div className='col-12'>
                    <Navbar expand="md" className="d-block d-md-none p-2">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' onClick={() => handleToggleMenu()} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto text-light mt-3">
                                <Nav.Link as={Link} to="/lobby" className='text-light'> <i className='bi bi-controller px-1' /> Lobby</Nav.Link>
                                <Nav.Link as={Link} to="/history" className='text-light'><i className='bi bi-play px-1' /> Historial de Jugadas</Nav.Link>
                                <Nav.Link as={Link} to="/transactions" className='text-light'><i className='bi bi-list px-1' /> Transacciones</Nav.Link>
                                <Nav.Link as={Link} to="/perfil" className='text-light'><i className='bi bi-people px-1' /> Perfil</Nav.Link>
                                {/* <Nav.Link as={Link} to="/support" className='text-light'><i className='bi bi-envelope px-1' /> Soporte</Nav.Link> */}
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
                            <NavLink direction={'Lobby'} to={'/lobby'} icon={'bi-house-door-fill'} />
                            <NavLink direction={'Historial'} to={'/history'} icon={'bi-file-earmark-text-fill'} />
                            <NavLink direction={'Transacciones'} to={'/transactions'} icon={'bi-currency-exchange'} />
                            <NavLink direction={'Perfil'} to={'/perfil'} icon={'bi-person-fill'} />
                            {/* <NavLink direction={'Soporte'} to={'/support'} icon={'bi-headphones'} /> */}
                            <NavLink direction={'Cerrar Sesion'} click={() => handleClose()} icon={"bi bi-door-open"}/> 
                        </Nav>
                    </div>
                    <div className={styles.content}>
                        <div className='px-4 text-light flex-between pt-2'>
                            <div className='text-lg'>
                                Bienvenido <b> {user.name}</b>
                            </div>
                            <div className='d-flex text-lg'>
                                Saldo: <h4 className='px-2'> BS. {cash(user.balance)}</h4>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuClient
