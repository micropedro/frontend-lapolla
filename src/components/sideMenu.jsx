import { menu } from '@/services/menuLateral.json'
import { Link } from 'react-router-dom';
import { devEnvironmet } from '@/config.json'
import { useState } from 'react';
const SideMenu = () => {

    const [selected, setSelected] = useState(0)

    return menu.map((menu, index) => {
        return (<li key={index} >
            <Link onClick={() => setSelected(index)} to={menu.link} className='link'>
                <div className={selected === index ? 'sidebar-button-active text-center text-md-start' : 'sidebar-button text-center text-md-start'}>
                    <i className={menu.icon} />
                    <span className='d-none d-md-inline'> {menu.name} </span>
                    {devEnvironmet ? menu.status ? <i className='bi bi-check text-success'> </i> : <i className='text-danger'> x </i> : ''}
                </div>
            </Link>
        </li>)
    })

}


export default SideMenu