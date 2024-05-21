import styles from '../transactions.module.css'
import useDepositStore from "../../../../store/depositStore"
import { formatDate2, getTime } from '../../../../services/formatDate'
import userStore from "../../../../store/userStore"

const Deposit = () => {

    const { deposits } = useDepositStore()
    const { user } = userStore()

    const method = (idMethod) => {
        const { adminMethods } = user
        if (!adminMethods) return null
        return adminMethods.filter(method => {
            return method._id === idMethod
        })[0]
    }

    return (
        deposits.length > 0 ? (
            deposits.map(dep => (
                <div className="col-12 card p-4 mt-1" key={dep._id}>
                    <div className='d-flex justify-content-around align-items-center text-lg'>
                        <div className={`${styles.itemWin} d-flex flex-column align-items-center`}>
                            <span><i className="bi bi-box-arrow-right" /> Deposito</span>
                            <span className={`${styles.itemWinText} d-flex align-items-center gap-2`}>
                                <i className="bi bi-cash text-gray"></i>
                                <span className='text-gray'>BS. {dep.amount}</span>
                            </span>
                            <span className='text-gray fs-6'>ref: {dep.operationRef}</span>
                        </div>

                        <div className={`${styles.itemNum}`}>
                            <div className={`${styles.containerMethod} d-flex`}>
                                <div className={`d-flex align-items-center gap-1`}>
                                    <img style={{ width: '25px' }} src={method(dep.adminMethodId)?.imageUrl} />
                                    <span className={styles.bank}>{method(dep.adminMethodId)?.methodName}</span>
                                </div>
                                {dep.status === 1 && (<span className={`${styles.itemBadge} badge text-bg-warning`}>En proceso</span>)}
                                {dep.status === 2 && (<span className={`${styles.itemBadge} badge text-bg-success`}>Completado</span>)}
                                {dep.status === 3 && (<span className={`${styles.itemBadge} badge text-bg-danger`}>Anulado</span>)}

                            </div>
                            {method(dep.adminMethodId)?.banco && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(dep.adminMethodId)?.banco}</span>
                                </div>
                            )}
                            {method(dep.adminMethodId)?.nombre && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(dep.adminMethodId)?.nombre}</span>
                                </div>
                            )}
                            {method(dep.adminMethodId)?.cedula && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(dep.adminMethodId)?.cedula}</span>
                                </div>
                            )}
                            {method(dep.adminMethodId)?.correo && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(dep.adminMethodId)?.correo}</span>
                                </div>
                            )}
                            {method(dep.adminMethodId)?.telefono && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(dep.adminMethodId)?.telefono}</span>
                                </div>
                            )}
                            {method(dep.adminMethodId)?.tipo && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(dep.adminMethodId)?.tipo}</span>
                                </div>
                            )}
                        </div>
                        <div className={`${styles.itemDate} d-flex flex-column`}>
                            <span><i className="bi bi-calendar"></i> {formatDate2(dep.date)}</span>
                            <span><i className="bi bi-clock-history"></i> {getTime(dep.date)}</span>
                        </div>
                    </div>
                </div>
            ))) : <p className='text-center'>No hay depósitos registrados</p>
    )
}

export default Deposit