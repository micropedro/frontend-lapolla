/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { menu } from '../services/menuLateral.json'
import { Link } from 'react-router-dom';
import { devEnvironmet } from '../config.json'
import useSideMenu from '../hooks/useSideMenu';
const SideMenu = () => {
    
    const {setSelected, selected, Pending} = useSideMenu()

    return menu.map((menu, index) => {
        return (<li key={index} >
            <Link onClick={() => setSelected(index)} to={menu.link} className='link'>
                <div className={selected === index ? 'sidebar-button-active text-center text-md-start' : 'sidebar-button text-center text-md-start'}>
                    <i className={menu.icon} />
                    <span className='d-none d-md-inline'> {menu.name} </span>
                    {devEnvironmet ? menu.status ? <i className='bi bi-check text-success'> </i> : <i className='text-danger'> x </i> : ''}
                    <Pending index={index} />
                </div>
            </Link>
        </li>)
    })

}


export default SideMenu