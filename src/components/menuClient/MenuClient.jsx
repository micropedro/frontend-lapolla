import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MenuClient = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleToggleMenu = () => {
        setExpanded(!expanded);
    };

    const handleClose = () => {
        localStorage.removeItem('user');
        navigate('/login');
        return null; 
    }

    return (
        <div className="container-fluid">
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
      
            <div className="row">
                <div className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/lobby">Lobby</Nav.Link>
                            <Nav.Link as={Link} to="/history">Historial de Jugadas</Nav.Link>
                            <Nav.Link as={Link} to="/transactions">Transacciones</Nav.Link>
                            <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
                            <Nav.Link as={Link} to="/support">Soporte</Nav.Link>
                            <button onClick={handleClose}>Cerrar Sesion</button>
                        </Nav>
                    </div>
                </div>

                <div className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MenuClient;
