import MethodModal from './MethodModal/MethodModal'
import formatDate from '../../../services/formatDate'
import usePerfil from '../../../hooks/usePerfil'
import Spinner from "../../../components/spinner"
import useLoadingStore from "../../../store/loadingStore"
import ModalConfirmDelete from './modalConfirmDelete'

const Perfil = () => {

    const { user, setModalAddMethod, setIdMethod, handleShow } = usePerfil()
    const { loading } = useLoadingStore()

    return (<>
        <ModalConfirmDelete />
        <MethodModal />
        {loading && (<div className='bg-modal'><Spinner /></div>)}
        <div className='container mt-3'>
            <div className='row pb-2'>
                <h2 className="text-warning">Perfil de usuario</h2>
            </div>
        </div>
        <div className="container-fluid">
            <div className='row p-2 pt-1'>
                <div className='col-12 col-md-6 col-lg-5 mb-3'>
                    <div className="card p-3">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className='col-12 col-md-4'>
                                    <i className="bi bi-person-circle avartar-icon" />
                                </div>
                                <div className="col-12 col-md-8">
                                    <h3 className="card-text">
                                        {user && user.name}
                                    </h3>
                                    <p className="card-text"><i className="bi bi-envelope" /> {user && user.email}</p>
                                    <p className="card-text"><i className="bi bi-card-checklist" /> CI: {user && user.ci}</p>
                                    <p className="card-text"><i className="bi bi-telephone-fill" /> {user && user.phone}</p>
                                    <p className="card-text"><i className="bi bi-calendar-fill" /> Desde {user && formatDate(user.date)}</p>
                                    {/* <p className="card-text"><i className="bi bi-pin-map-fill" /> Los cocos 211, Tucupita Delta Amacuto</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-7 mb-3'>
                    <div className="card">
                        <div className="row p-3">
                            <div className="col-6 mb-3">
                                <h4>
                                    Metodos de pago
                                </h4>
                            </div>
                            <div className="col-6 mb-3">
                                <button onClick={() => setModalAddMethod(true)} className="btn btn-success w-100">
                                    <i className="bi bi-house-add" style={{ fontSize: '20px' }} /> Agregar Metodo de pago
                                </button>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    {user.userMethods && user.userMethods.filter(i => !i.deleted).map((method) => {
                                        return (<div key={method._id} className="col-12 col-md-6 mb-3">
                                            <div className='card mh-100'>
                                                <div className="card-body">
                                                    <div className='flex-between'>
                                                        <img src={method.imageUrl} height={"30px"} alt="" />
                                                        <h5 className="card-title">{method.methodName}</h5>
                                                    </div>
                                                    {/* id de este {method._id} 
                                                    <div> id del admin {method.adminMethodId._id} </div>
                                                    <div>{method.adminMethodId.methodName}</div> */}
                                                    {method.correo && <p className='mb-0'>{method.correo} </p>}
                                                    {method.telefono && <p className='mb-0'>{method.telefono} </p>}
                                                    {method.banco && <p className='mb-0'>{method.banco} </p>}
                                                    {method.cuenta && <p className='mb-0'>{method.cuenta} </p>}
                                                    {method.tipo && <p className='mb-0'>{method.tipo} </p>}
                                                    {method.cedula && <p className='mb-0'>{method.cedula} </p>}
                                                    {method.nombre && <p className='mb-0'>{method.nombre} </p>}
                                                    {method?.adminMethodId?.tipoDeCambio && <><b>Tipo de cambio:</b> {method.adminMethodId.tipoDeCambio} Bs</>}
                                                </div>
                                                <div className="position-absolute bottom-0 end-0 m-2" onClick={() => {
                                                    setIdMethod(method._id)
                                                    handleShow(true)
                                                }}>
                                                    <i className="bi bi-trash3 text-danger" style={{ cursor: 'pointer' }}></i>
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
        </div>
    </>)
}

export default Perfil