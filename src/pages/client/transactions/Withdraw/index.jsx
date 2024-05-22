import styles from '../transactions.module.css'
import { formatDate2, getTime } from '../../../../services/formatDate'
import useRetiros from '../../../../hooks/useRetiros'

const Withdraw = () => {

    const { retiros } = useRetiros()

    return (
        retiros.length > 0 ? (
            retiros.map(ret => (
                <div className="col-12 mb-2" key={ret._id}>
                    <div className='card p-2 container-fluid'>
                        <div className="row">

                            <div className={`col-12 col-sm-6 col-md-4 code-card mb-2`}>
                                <span><i className="bi bi-box-arrow-right" /> Retiro</span>
                                <span className={`${styles.itemWinText} d-flex align-items-center gap-2`}>
                                    <i className="bi bi-cash text-gray"></i>
                                    <span className='text-gray'>BS. {ret.amount}</span>
                                </span>
                            </div>

                            <div className={`col-12 col-sm-6 col-md-4 code-card mb-2`}>
                                <div className={`${styles.containerMethod} d-flex`}>
                                    <div className={`flex-between`}>
                                        <img style={{ width: '50px' }} src={ret.payMethod.imageUrl} />
                                        {/*  <span >{ret.adminMethodId.methodName}</span> */}
                                        <span >{ret.payMethod.methodName}</span>
                                    </div>
                                </div>
                                {ret.state === 1 && (<span className={`${styles.itemBadge} badge text-bg-warning`}>En proceso</span>)}
                                {ret.state === 2 && (<span className={`${styles.itemBadge} badge text-bg-success`}>Completado</span>)}
                                {ret.state === 3 && (<span className={`${styles.itemBadge} badge text-bg-danger`}>Anulado</span>)}

                                {ret.payMethod._id.banco && (
                                    <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                        <span>{ret.payMethod._id.banco}</span>
                                    </div>
                                )}

                                {ret.payMethod._id.nombre && (
                                    <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                        <span>{ret.payMethod._id.nombre}</span>
                                    </div>
                                )}
                                
                                {ret.payMethod._id.cedula && (
                                    <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                        <span>{ret.payMethod._id.cedula}</span>
                                    </div>
                                )}
                                {ret.payMethod._id.correo && (
                                    <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                        <span>{ret.payMethod._id.correo}</span>
                                    </div>
                                )}
                                {ret.payMethod._id.telefono && (
                                    <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                        <span>{ret.payMethod._id.telefono}</span>
                                    </div>
                                )}
                                {ret.payMethod._id.tipo && (
                                    <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                        <span>{ret.payMethod._id.tipo}</span>
                                    </div>
                                )}
                            </div>
                            <div className={`col-12 col-sm-6 col-md-4 code-card mb-2`}>
                                <span><i className="bi bi-calendar"></i> {formatDate2(ret.date)}</span>
                                <span><i className="bi bi-clock-history"></i> {getTime(ret.date)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))) : <p className='text-center'>No hay retiros registrados</p>
    )
}

export default Withdraw