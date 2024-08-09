/* import { Link } from 'react-router-dom'; */
import { Tab, Tabs } from '../../../components/tabs/Tabs';
import styles from './history.module.css';
import Placeholder from 'react-bootstrap/Placeholder';
import { formatDate2, getTime4 } from '../../../services/formatDate'
import useHistory from '../../../hooks/useHistory';
import { formatIf37 } from '../../../services/utils';

const PrintAnimals = ({ ticket }) => {
    const ticketAnimal = ticket?.animals?.map(i => i.id)
    const resultAnimals = ticket?.quiniela?.resultAnimals?.map(j => j.animalId)

    return ticketAnimal.map((k, index) => {
        const classAnimal = resultAnimals?.includes(k)
        return <div key={index} className={`${classAnimal ? "bg-success-animals" : "bg-default-animals"}`}> {formatIf37(k)} </div>
    })
}

const History = () => {

    const { fiteredTickets, loading, TEXTSTATUS, handleOptions, options, tab1, tab2, handle, aciertos, handleAciertos, getTicketsDate } = useHistory()

    return (<>
        <div className='container-fluid mt-3'>
            <div className='row pb-2'>
                <div className='flex-between'>
                    <h2 className='text-warning' >Historial de jugadas</h2>
                    <div>
                        <button onClick={() => handleOptions(1)} className={`btn text-light ${options === 1 && 'border'}`}>Mis tickets</button>
                        <button onClick={() => handleOptions(2)} className={`btn text-light ${options === 2 && 'border'}`}>Otros Jugadores</button>
                    </div>
                </div>
            </div>
            <div>
                <Tabs>
                    <Tab status={tab1} onClick={() => handle(true)}> Gran Quiniela </Tab>
                    <Tab status={tab2} onClick={() => handle(false)}> Mini Quiniela </Tab>
                </Tabs>
                <div className='flex-between pt-3 text-light row'>
                    <div className='col-md-6 col-sm-12 pb-2'>
                        <div>
                            Buscar:
                        </div>
                        <input type="date" className='form-control' onChange={getTicketsDate} />
                    </div>
                    <div className='col-md-6 col-sm-12 pb-2'>
                        <div>
                            Ordenar:
                        </div>
                        <button onClick={handleAciertos} className='btn btn-success'> Cantidad de aciertos {aciertos ? "↑" : "↓"} </button>
                    </div>
                </div>

                {/* <div className='d-flex flex-between mt-3'>
                    <div className='text-light'>
                        Filtrar por fecha
                    </div>
                    <div className='d-flex mb-2 gap-2'>
                        <input type="date" className='form-control filtradoFechaCliente' />
                        <input type="date" className='form-control filtradoFechaCliente' />
                        <button className='btn btn-primary'>Buscar</button>
                    </div>
                </div> */}
            </div>
            <div className="row text-white justify-content-center">
            </div>
            <div className='row text-center mb-5'>
                {loading ? (
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
                ) : fiteredTickets.length > 0 ? fiteredTickets.map((ticket, index) => {
                    return (
                        <div className='col-12 col-md-6' key={index}>
                            <div className='card mt-4'>
                                {/* Aciertos : {ticket?.numeroDeAciertos} */}
                                <div className="container-fluid">
                                    <div className='row text-center'>
                                        <div className='col-12 col-sm-6 col-md-4 code-card'>
                                            <div className='text-sm'>{ticket.user.name}</div>
                                            <div># {ticket.code}</div>
                                            <div className='flex-center'>
                                                <i className="bi bi-trophy"></i>
                                                <span className={`${styles.itemBadgestatus} badge text-bg-${TEXTSTATUS[ticket.status].color}`}>{TEXTSTATUS[ticket.status].text}</span>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-4 code-card pt-3'>

                                            <div>{ticket.quinielaType === "1" ? <> Gran </> : <> Mini </>} Quiniela</div>
                                            <span className={`${styles.itemBadge} badge text-bg-primary`}>Jugadas</span>
                                            <div className={`${styles.itemNumNumber} d-flex gap-2 align-items-center justify-content-center mb-2 mt-2`}>
                                                <PrintAnimals ticket={ticket} />
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-12 col-md-4 code-card'>
                                            <div>
                                                <span><i className="bi bi-calendar"></i> {formatDate2(ticket.date)}</span>
                                            </div>
                                            <div>
                                                <span><i className="bi bi-clock-history"></i> {getTime4(ticket.date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : !loading ? <p className='h3 mt-5 text-light'>No hay datos para mostrar</p> : null}
            </div>
        </div>
    </>)
}

export default History