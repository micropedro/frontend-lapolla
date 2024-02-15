import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import SideMenu from './sideMenu';
import useUserStore from '../store/userStore';
const SideBar = () => {
    const { user } = useUserStore();
    return (<>
        <div className="bg-dark text-light col-2 col-md-4 col-lg-3 min-vh-100">
            <div className='text-center pt-3 px-1'>
                <img src={Logo} alt="apuetalapolla" className='logo' />
            </div>
            <div>
                <h5 className='welcomeSidebarText'>Bienvenido,</h5>
                <div className='text-gray'>
                    <span className='sidebarNameEmail'> {user.name} </span>
                    <span className='sidebarNameEmail'> {user.email} </span>
                </div>
            </div>
            <div className='mt-4'>
                <ul className='nav d-block'>



                    <SideMenu />
                    <li className=''>
                        <Link to='/' className='link'>
                            <div className='sidebar-button text-center text-md-start'>
                                <i className='bi bi-box-arrow-up-left' />
                                <span className='d-none d-md-inline'> Cerrar sesion </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}

export default SideBar