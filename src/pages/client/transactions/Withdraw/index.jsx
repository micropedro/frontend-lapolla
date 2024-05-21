import styles from '../transactions.module.css'
import { formatDate2, getTime } from '../../../../services/formatDate'
import userStore from "../../../../store/userStore"
import useRetiros from '../../../../hooks/useRetiros'

const Withdraw = () => {

    const { user } = userStore()
    const { retiros } = useRetiros()
    const { userMethods } = user

    const method = (idMethod) => {
        if(!userMethods) return null
        return userMethods.filter(method => {
            return method._id === idMethod
        })[0]
    }
   
    return (
        retiros.length > 0 ? (
            retiros.map( ret => (
                <div className="col-12 card p-4 mt-1" key={ret._id}>
                    <div className='d-flex justify-content-around align-items-center text-lg'>
                        <div className={`${styles.itemWin} d-flex flex-column align-items-center`}>
                            <span><i className="bi bi-box-arrow-right"/> Retiro</span>
                            <span className={`${styles.itemWinText} d-flex align-items-center gap-2`}>
                                <i className="bi bi-cash text-gray"></i>
                                <span className='text-gray'>BS. {ret.amount}</span>
                            </span>
                        </div>
                    
                        <div className={`${styles.itemNum}`}>           
                            <div className={`${styles.containerMethod} d-flex`}>
                                <div className={`d-flex align-items-center gap-1`}>
                                    <img style={{ width: '25px' }} src={method(ret.payMethod._id)?.imageUrl} />
                                    <span className={styles.bank}>{method(ret.adminMethodId)?.methodName}</span>
                                </div>
                                {ret.status === 1 && (<span className={`${styles.itemBadge} badge text-bg-warning`}>En proceso</span>)}
                                {ret.status === 2 && (<span className={`${styles.itemBadge} badge text-bg-success`}>Completado</span>)}
                                {ret.status === 2 && (<span className={`${styles.itemBadge} badge text-bg-danger`}>Anulado</span>)}
                            </div>
                            {method(ret.payMethod._id)?.banco && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(ret.payMethod._id)?.banco}</span>
                                </div>
                            )}
                            {method(ret.payMethod._id)?.nombre && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(ret.payMethod._id)?.nombre}</span>
                                </div>
                            )}
                            {method(ret.payMethod._id)?.cedula && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(ret.payMethod._id)?.cedula}</span>
                                </div>
                            )}
                            {method(ret.payMethod._id)?.correo && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(ret.payMethod._id)?.correo}</span>
                                </div>
                            )}
                            {method(ret.payMethod._id)?.telefono && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(ret.payMethod._id)?.telefono}</span>
                                </div>
                            )}
                            {method(ret.payMethod._id)?.tipo && (
                                <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                    <span>{method(ret.payMethod._id)?.tipo}</span>
                                </div>
                            )}
                        </div>                 
                        <div className={`${styles.itemDate} d-flex flex-column`}>
                            <span><i className="bi bi-calendar"></i> {formatDate2(ret.date)}</span>
                            <span><i className="bi bi-clock-history"></i> {getTime(ret.date)}</span>
                        </div>
                    </div>
                </div>
            ))) : <p className='text-center'>No hay retiros registrados</p>
    )
}

export default Withdraw