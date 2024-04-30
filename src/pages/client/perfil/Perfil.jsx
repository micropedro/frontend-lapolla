import BancoModal from '../../../components/modals/BancoModal/BancoModal'
import { useState } from 'react'

const Perfil = () => {
    const [showBank, setShowBank] = useState(false)
    return (<>
        {<BancoModal show={showBank} handleClose={setShowBank} />}
        <div className='container mt-3'>
            <div className='row pb-2'>
                <h2 className="text-warning">Perfil de usuario</h2>
            </div>
        </div>
        <div className='row p-5 pt-1'>
            <div className='col-md-12 col-lg-6'>
                <div className="card">
                    <div className='avatar'>
                        <div className='avatar-icon-container'>
                            <i className="bi bi-person-circle avartar-icon" />
                        </div>
                        <div>
                            <div className="card-body">
                                <h3 className="card-text">
                                    Jason Hernandez
                                </h3>
                                <p className="card-text"><i className="bi bi-envelope" /> kaltre10@gmail.com</p>
                                <p className="card-text"><i className="bi bi-telephone-fill" /> 917545622</p>
                                <p className="card-text"><i className="bi bi-pin-map-fill" /> Los cocos 211, Tucupita Delta Amacuto</p>
                                <p className="card-text"><i className="bi bi-calendar-fill" /> Desde 17/04/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 col-lg-6'>
                <div className="row bg-light rounded p-3">
                    <div className="col-6">
                        <h4>
                            Metodos de pago registrados
                        </h4>
                    </div>
                    <div className="col-6">
                        <button onClick={() => setShowBank(true)} className="btn btn-success w-100">
                            <i className="bi bi-house-add" style={{ fontSize: '20px' }} /> Agregar Metodo de pago
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className='card'>
                                    <div className="card-body">
                                        <h5 className="card-title">Banco de Venezuela</h5>
                                        <p className="card-text">321654987</p>
                                        <p className="card-text">cuenta de ahorro</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='card'>
                                    <div className="card-body">
                                        <h5 className="card-title">Banco de Venezuela</h5>
                                        <p className="card-text">321654987</p>
                                        <p className="card-text">cuenta de ahorro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Perfil