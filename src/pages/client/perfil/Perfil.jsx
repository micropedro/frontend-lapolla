import BancoModal from '../../../components/modals/BancoModal/BancoModal'
import { useState } from 'react'
import formatDate from '../../../services/formatDate'
import usePerfil from '../../../hooks/usePerfil'

const Perfil = () => {

    const { userMethods, user } = usePerfil()
    const [showBank, setShowBank] = useState(false)

    return (<>
        {<BancoModal show={showBank} handleClose={setShowBank} />}
        <div className='container mt-3'>
            <div className='row pb-2'>
                <h2 className="text-warning">Perfil de usuario</h2>
            </div>
        </div>
        <div className='row p-5 pt-1'>
            <div className='col-md-12 col-lg-5 mb-3'>
                <div className="card">
                    <div className='avatar'>
                        <div className='avatar-icon-container'>
                            <i className="bi bi-person-circle avartar-icon" />
                        </div>
                        <div>
                            <div className="card-body">
                                <h3 className="card-text">
                                    {user && user.name}
                                </h3>
                                <p className="card-text"><i className="bi bi-envelope" /> {user && user.email}</p>
                                <p className="card-text"><i className="bi bi-telephone-fill" /> {user && user.phone}</p>
                                {/* <p className="card-text"><i className="bi bi-pin-map-fill" /> Los cocos 211, Tucupita Delta Amacuto</p> */}
                                <p className="card-text"><i className="bi bi-calendar-fill" /> Desde {user && formatDate(user.date)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 col-lg-7 mb-3'>
                <div className="card">
                    <div className="row p-3">
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
                                {userMethods && userMethods.map((method) => {
                                    return (<div key={method._id} className="col-6 mb-3 h-100">
                                        <div className='card'>
                                            <div className="card-body">
                                                <div className='flex-between'>
                                                    <img src={method.imageUrl} height={"30px"} alt="" />
                                                    <h5 className="card-title">{method.methodName}</h5>
                                                </div>
                                                {method.correo && <p className='mb-0'>{method.correo} </p>}
                                                {method.telefono && <p className='mb-0'>{method.telefono} </p>}
                                                {method.banco && <p className='mb-0'>{method.banco} </p>}
                                                {method.cuenta && <p className='mb-0'>{method.cuenta} </p>}
                                                {method.tipo && <p className='mb-0'>{method.tipo} </p>}
                                                {method.cedula && <p className='mb-0'>{method.cedula} </p>}
                                                {method.nombre && <p className='mb-0'>{method.nombre} </p>}
                                            </div>
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Perfil