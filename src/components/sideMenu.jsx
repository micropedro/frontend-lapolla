import { menu } from '../services/menuLateral.json'
import { Link } from 'react-router-dom';
import { devEnvironmet } from '../../config.json'
const SideMenu = () => (menu.map((i, index) => {
    return (<li key={index} >
        <Link to={i.link} className='link'>
            <div className='sidebar-button text-center text-md-start'>
                <i className={i.icon} />
                <span className='d-none d-md-inline'> {i.name} </span>
                {devEnvironmet && i.status ? <i className='bi bi-check text-success'> </i> : <i className='text-danger'> x </i>}
            </div>
        </Link>
    </li>)
})
)


export default SideMenu