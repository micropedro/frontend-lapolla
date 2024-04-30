import { useState } from 'react'
import styles from './transactions.module.css';
import bdv from '../../../images/bdv.jpg'
import DepositModal from '../../../components/modals/DepositModal/DepositModal';
import WithdrawModal from '../../../components/modals/WithdrawModal/WithdrawModal';

const Transactions = () => {

    const [showDepositModal, setShowDepositModal] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);

    const handleShowDepositModal = () => {
        setShowDepositModal(true);
    };

    const handleShowWithdrawModal = () => {
        setShowWithdraw(true);
    };

    const handleHideDepositModal = () => {
        setShowDepositModal(false);
    };

    const handleHideWithdrawModal = () => {
        setShowWithdraw(false);
    };

    return (<>
        <DepositModal show={showDepositModal} onHide={handleHideDepositModal} />
        <WithdrawModal show={showWithdraw} onHide={handleHideWithdrawModal} />
        <div className='container mt-3'>
            <h2 className='text-warning'> Transacciones </h2>
            {/*  <div className='row pb-2'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/transactions">Transacciones</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav>
            </div>  */}
            <div className="row text-white">
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
                <div className="col-md-2">
                    <button onClick={handleShowDepositModal} style={{ width: '150px' }} className="btn btn-success btn-lg"><i className="bi bi-house-add"></i> Depositar</button>
                </div>
                <div className="col-md-2">
                    <button onClick={handleShowWithdrawModal} style={{ width: '150px' }} className="btn btn-warning btn-lg"><i className="bi bi-house-dash"></i> Retirar</button>
                </div>
            </div>
            <div className='row pt-5'>
                <h4 className={styles.h3}>Historial de Transacciones:</h4>
                <div className="col-12 card p-4">
                    <div className='d-flex justify-content-around align-items-center text-lg'>
                        <div className={`${styles.itemWin} d-flex flex-column align-items-center`}>
                            <span><i className="bi bi-box-arrow-right"/>Deposito</span>
                            <span className={`${styles.itemWinText} d-flex align-items-center gap-2`}>
                                <i className="bi bi-cash text-gray"></i>
                                <span className='text-gray'>BS. 3000</span>
                            </span>
                        </div>
                        <div className={`${styles.itemNum}`}>
                            <div className={`${styles.containerMethod} d-flex`}>
                                <div className={`d-flex align-items-center gap-1`}>
                                    <img style={{ width: '25px' }} src={bdv} />
                                    <span className={styles.bank}>Banco de venezuela cuenta corriente (bs)</span>
                                </div>
                                <span className={`${styles.itemBadge} badge text-bg-success`}>Completado</span>
                            </div>
                            <div className={`${styles.itemNumNumber} d-flex gap-4 align-items-center justify-content-center`}>
                                <span>00 00 00 00 00 00 00 00</span>
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
    </>)
}

export default Transactions