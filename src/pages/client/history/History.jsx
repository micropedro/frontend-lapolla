/* import { Link } from 'react-router-dom'; */

import styles from './history.module.css';
import Placeholder from 'react-bootstrap/Placeholder';
import formatDate, { getTime } from '../../../services/formatDate'
import useHistory from '../../../hooks/useHistory';
import { formatIf37 } from '../../../services/utils';

const History = () => {

    const {
        tickets,
        loading,
        TEXTSTATUS,
        /* dataLocal,
        queryTickets,
        handleDate */
    } = useHistory()

    return (<>
        <div className='container-fluid mt-3'>
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
                {/*  <div className="col-md-3 d-flex align-items-center gap-1">
                    <label htmlFor="startDate" className="form-label">Desde:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="from"
                        value={dataLocal.from}
                        onChange={handleDate}
                    />
                </div>
                <div className="col-md-3 d-flex align-items-center gap-1">
                    <label htmlFor="endDate" className="form-label">Hasta: </label>
                    <input
                        type="date"
                        className="form-control"
                        id="to"
                        value={dataLocal.to}
                        onChange={handleDate}
                    />
                </div> */}
                {/* <div className="col-md-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => queryTickets()}
                    >Consultar</button>
                </div> */}
            </div>

            <div className='row text-center mb-5'>
                {loading && (
                    <div className='mt-5'>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as="p" animation="wave">
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as="p" animation="wave">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>
                )}
                {tickets.length > 0 ? tickets.map((ticket, index) => {
                    return (
                        <div className='col-12 col-md-6' key={index}>
                            <div className='card mt-4'>
                                <div className="container-fluid">
                                    <div className='row text-center'>
                                        <div className='col-12 col-sm-6 col-md-4 code-card'>
                                            <div># {ticket.code}</div>
                                            <div className='flex-center'>
                                                <i className="bi bi-trophy"></i>
                                                <span className={`${styles.itemBadgestatus} badge text-bg-${TEXTSTATUS[ticket.status].color}`}>{TEXTSTATUS[ticket.status].text}</span>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-4 code-card pt-3'>
                                            <span className={`${styles.itemBadge} badge text-bg-primary`}>Jugadas</span>
                                            <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>

                                                {ticket.animals.map((animal, index) => (
                                                    <p key={index} className={styles.number}>{formatIf37(animal.id)}</p>
                                                ))}

                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-12 col-md-4 code-card'>
                                            <div>
                                                <span><i className="bi bi-calendar"></i> {formatDate(ticket.date)}</span>
                                            </div>
                                            <div>
                                                <span><i className="bi bi-clock-history"></i> {getTime(ticket.date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : !loading ? <p className='h3 mt-5'>No hay datos para mostrar</p> : null}
            </div>
        </div>
    </>)
}

export default History