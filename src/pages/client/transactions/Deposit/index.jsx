import styles from '../transactions.module.css'
import useDepositStore from "../../../../store/depositStore"
import { formatDate2, getTime } from '../../../../services/formatDate'

const Deposit = () => {

    const { deposits } = useDepositStore()

    return (
        deposits.length > 0 ? (
            deposits.map(dep => (

                <div className="col-12 mb-2" key={dep._id}>
                    <div className='card'>
                        <div className="container-fluid">
                            <div className="row p-4">
                                <div className={`col-12 col-sm-6 col-md-4 code-card `}>
                                    <span><i className="bi bi-box-arrow-right" /> Deposito</span>
                                    <span className={`${styles.itemWinText} d-flex align-items-center gap-2`}>
                                        <i className="bi bi-cash text-gray"></i>
                                        <span className='text-gray'>BS. {dep.amount}</span>
                                    </span>
                                    <span className='text-gray fs-6'>ref: {dep.operationRef}</span>
                                </div>

                                <div className={`col-12 col-sm-6 col-md-4 code-card `}>
                                    <div className={`${styles.containerMethod} d-flex`}>
                                        <div className={`d-flex align-items-center gap-1`}>
                                            <img style={{ width: '25px' }} src={dep.adminMethod?.imageUrl} />
                                            <span className={styles.bank}>{dep.adminMethod?.methodName}</span>
                                        </div>
                                        {dep.status === 1 && (<span className={`${styles.itemBadge} badge text-bg-warning`}>En proceso</span>)}
                                        {dep.status === 2 && (<span className={`${styles.itemBadge} badge text-bg-success`}>Completado</span>)}
                                        {dep.status === 3 && (<span className={`${styles.itemBadge} badge text-bg-danger`}>Anulado</span>)}
                                    </div>
                                    {dep.adminMethod?.banco && (
                                        <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                            <span>{dep.adminMethod?.banco}</span>
                                        </div>
                                    )}
                                    {dep.adminMethod?.nombre && (
                                        <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                            <span>{dep.adminMethod?.nombre}</span>
                                        </div>
                                    )}
                                    {dep.adminMethod?.cedula && (
                                        <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                            <span>{dep.adminMethod?.cedula}</span>
                                        </div>
                                    )}
                                    {dep.adminMethod?.correo && (
                                        <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                            <span>{dep.adminMethod?.correo}</span>
                                        </div>
                                    )}
                                    {dep.adminMethod?.telefono && (
                                        <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                            <span>{dep.adminMethod?.telefono}</span>
                                        </div>
                                    )}
                                    {dep.adminMethod?.tipo && (
                                        <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                            <span>{dep.adminMethod?.tipo}</span>
                                        </div>
                                    )}
                                </div>

                                <div className='col-12 col-sm-6 col-md-4 code-card '>
                                    <span><i className="bi bi-calendar"></i> {formatDate2(dep.date)}</span>
                                    <span><i className="bi bi-clock-history"></i> {getTime(dep.date)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))) : <p className='text-center'>No hay depósitos registrados</p>
    )
}

export default Deposit