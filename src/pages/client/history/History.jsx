import { Link } from 'react-router-dom';
import styles from './history.module.css';

const History = () => {
    return (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/history">Historial</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div className='container'>   
            <div className="row">
                <div className="col-md-3 d-flex align-items-center gap-2">
                    <label htmlFor="startDate" className="form-label">Desde:</label>
                    <input type="date" className="form-control" id="startDate" placeholder="Fecha desde" />
                </div>
                <div className="col-md-3 d-flex align-items-center gap-2">
                    <label htmlFor="endDate" className="form-label">Hasta: </label>
                    <input type="date" className="form-control" id="endDate" placeholder="Fecha hasta" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary">Consultar</button>
                </div>
            </div>
            <div className='row'>
                <div className={`${styles.items} col-sm-12 p-2 mt-3 rounded `}>
                    <h4>asd</h4>
                </div>
                <div className={`${styles.items} col-sm-12 p-2 mt-3 rounded `}>
                    <h4>asd</h4>
                </div>
            </div>

        </div>
    </>)
}

export default History