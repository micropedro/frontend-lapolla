import { Link } from 'react-router-dom';

const Support = () => {
    return (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/soporte">Soporte</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div className={`row d-flex gap-5 justify-content-center vh-100 p-5`}>   
        </div>
    </>)
}

export default Support