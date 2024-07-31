import { useState } from 'react'
import styles from './transactions.module.css';

import DepositModal from '../../../components/modals/DepositModal/DepositModal';
import WithdrawModal from '../../../components/modals/WithdrawModal/WithdrawModal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Placeholder from 'react-bootstrap/Placeholder';
import useHistory from '../../../hooks/useHistory';

const Transactions = () => {

    const [showDepositModal, setShowDepositModal] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);

    const { loading } = useHistory()

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
            <div className="row text-white">
                <div className='col-12 col-md-6'>
                    <h2 className='text-warning'> Transacciones </h2>
                </div>
                <div className="col-12 col-md-6 text-end">
                    <div className='d-flex gap-2 justify-content-end'>
                        <button onClick={() => handleShowDepositModal()} style={{ width: '150px' }} className="btn btn-success btn-lg"><i className="bi bi-house-add"></i> Depositar</button>
                        <button onClick={() => handleShowWithdrawModal()} style={{ width: '150px' }} className="btn btn-warning btn-lg"><i className="bi bi-house-dash"></i> Retirar</button>
                    </div>
                </div>

                {/* <div className="col-md-3 d-flex align-items-center gap-1">
                    <label htmlFor="startDate" className="form-label">Desde:</label>
                    <input type="date" className="form-control" id="startDate" placeholder="Fecha desde" />
                    </div>
                    <div className="col-md-3 d-flex align-items-center gap-1">
                    <label htmlFor="endDate" className="form-label">Hasta: </label>
                    <input type="date" className="form-control" id="endDate" placeholder="Fecha hasta" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary">Consultar</button>
                    </div> */}
            </div>
            <div className='row pt-5'>
                <div className='col-12'>
                    <h4 className={styles.h3}>Historial de Transacciones:</h4>
                    <div className='text-danger'>

                        <Tabs defaultActiveKey="deposit" id="tab" className="mb-3" justify="end" style={{ backgroundColor: 'rgba(255,255,255,0.9)',borderRadius:"5px" }}>
                            <Tab eventKey="deposit" title="Depósitos" className='text-dark'>
                                {loading ? <LoaderBar /> :
                                    <div className="container-fluid">
                                        <div className='row'>
                                            <Deposit />
                                        </div>
                                    </div>
                                }
                            </Tab>
                            <Tab eventKey="withdraw" title="Retiros" style={{ color: 'red' }}>
                                {loading ? <LoaderBar /> :
                                    <div className="container-fluid">
                                        <div className='row'>
                                            <Withdraw />
                                        </div>
                                    </div>
                                }
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const LoaderBar = () => {
    return (
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
    )
}

export default Transactions