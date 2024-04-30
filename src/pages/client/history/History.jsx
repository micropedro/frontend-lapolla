/* import { Link } from 'react-router-dom'; */
import styles from './history.module.css';

const History = () => {
    return (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <h2 className='text-warning' >Historial de jugadas</h2>
                {/* <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/history">Historial</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav> */}
            </div>
            <div className="row text-white justify-content-center">
                <div className="col-md-3 d-flex align-items-center gap-1">
                    <label htmlFor="startDate" className="form-label">Desde:</label>
                    <input type="date" className="form-control" id="startDate" placeholder="Fecha desde" />
                </div>
                <div className="col-md-3 d-flex align-items-center gap-1">
                    <label htmlFor="endDate" className="form-label">Hasta: </label>
                    <input type="date" className="form-control" id="endDate" placeholder="Fecha hasta" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary">Consultar</button>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 '>
                    <div className='card mt-4'>
                        <div className=' d-flex justify-content-around align-items-center fs-4'>
                            <div className={`${styles.itemWin} d-flex flex-column align-items-center`}>
                                <span># 1234</span>
                                <span className={`${styles.itemWinText} d-flex align-items-center gap-2`}>
                                    <i className="bi bi-trophy"></i>
                                    <span className={`${styles.itemBadgestatus} badge text-bg-success`}>Ganador</span>
                                </span>
                            </div>
                            <div className={styles.itemNum}>
                                <span className={`${styles.itemBadge} badge text-bg-primary`}>Jugadas</span>
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <p className={styles.number}>01</p>
                                    <p className={styles.number}>02</p>
                                    <p className={styles.number}>03</p>
                                    <p className={styles.number}>04</p>
                                    <p className={styles.number}>05</p>
                                    <p className={styles.number}>06</p>
                                </div>
                            </div>
                            <div className={`${styles.itemDate} d-flex flex-column`}>
                                <span><i className="bi bi-calendar"></i>16/04/2024</span>
                                <span><i className="bi bi-clock-history"></i>16:15:30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default History