import useDeposits from "../../../../hooks/useDeposits"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
import DepositModal from "../../../../components/modals/depositModal"
import useDepositStore from "../../../../store/depositStore"
const Nuevo = () => {
    const { setModal, userSelected } = useDepositStore()
    const { loading } = useLoadingStore()
    const { handleMethod, actualMethods, defaultMethod, Methods, handleForm } = useDeposits()
    return (
        <div className="p-4">
            <DepositModal />
            <h4>Nuevo deposito</h4>
            <hr />
            {actualMethods.length > 0 ? <>
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-6">
                            <select onChange={(e) => { handleMethod(e.target.value) }} name="" id="" className="form-select">
                                {actualMethods.length > 0 && actualMethods.map((method, index) => {
                                    return <option key={index} value={method._id}> {method.methodName}  </option>
                                })}
                            </select>
                        </div>
                        <div className="col-6">
                            <Methods />
                        </div>
                    </div>
                </div>
                <div className="card p-3">
                    <div className="flex-between align-items-center">
                        <div className="d-flex align-items-center mb-4 px-3">
                            <div className="text-lg"> Usuario a depositar </div>
                            <button onClick={() => setModal(true)} className="btn btn-primary mx-4"> Buscar usuario </button>
                        </div>
                        <div>
                            {userSelected ? <div className="text-end">
                                <h3>
                                    {userSelected.name}
                                </h3>
                                <p className="m-0">{userSelected.ci}</p>
                                <p className="m-0">Balance: {userSelected.balance} Bs</p>
                            </div> : <>
                                Debe buscar un usuario para depositar
                            </>}
                        </div>
                    </div>
                    <hr />

                    <form action="" onSubmit={handleForm}>
                        <div className="flex-between">
                            <h4>Datos del {defaultMethod?.methodName}</h4>
                        </div>
                        {loading ? <div className="py-5 text-center"><Spinner /></div> :
                            <div className="p-4">

                                {defaultMethod?.banco ? <>
                                    <label htmlFor="bank">Nombre del Banco emisor</label>
                                    <input type="text" name="bank" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Banco" />
                                </> : <input type="hidden" value="" name="bank" />}

                                {defaultMethod?.nombre ? <>
                                    <label htmlFor="nombre">Nombre Completo de quien envia</label>
                                    <input type="text" name="name" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                                </> : <input type="hidden" value="" name="name" />}

                                {defaultMethod?.cedula ? <>
                                    <label htmlFor="cedula">Ingrese la cedula del que envia</label>
                                    <input type="text" name="ci" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                                </> : <input type="hidden" value="" name="ci" />}

                                {defaultMethod?.correo ? <>
                                    <label htmlFor="correo"> Ingrese el correo emisor</label>
                                    <input type="text" name="email" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                                </> : <input type="hidden" value="" name="email" />}

                                {defaultMethod?.cuenta ? <>
                                    <label htmlFor="cuenta">Numero de cuenta bancaria</label>
                                    <input type="text" name="account" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                                </> : <input type="hidden" value="" name="account" />}

                                {defaultMethod?.tipo ? <>
                                    <label htmlFor="type">Tipo de cuenta bancaria</label>
                                    <input type="text" name="type" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                                </> : <input type="hidden" value="" name="type" />}

                                {defaultMethod?.telefono ? <>
                                    <label htmlFor="telefono">Telefono emisor</label>
                                    <input type="text" name="phone" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                                </> : <input type="hidden" value="" name="phone" />}

                                <label htmlFor="operation"> Numero de operacion </label>
                                <input type="text" name="operation" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Numero de operacion" />

                                <label htmlFor="monto"> Monto del deposito </label>
                                <input type="number" name="monto" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Monto" />

                                <div className="form-date">
                                    <label htmlFor="operationDate" className="fecha-envio-labek">Fecha de envio</label>
                                    <input type="date" name="operationDate" className="form-control bg-light-gray mb-4 mx-3" required placeholder="Ingrese El Nombre" />
                                </div>
                            </div>}
                        {loading ? <div className="text-end">
                            <button className="btn btn-secondary" disabled> <Spinner></Spinner> Guardar</button>
                        </div> : <div className="text-end">
                            <button className="btn btn-primary min-x">Guardar</button>
                        </div>}
                    </form>
                </div>
            </> : <div className="text-center">
                <h3 className="py-4 bg-dark text-light rounded-3">No hay metodos de pagos</h3>
                <p>Por favor dirijase a la seccion de metodos de pago e ingrese sus <b> metodos de pago </b> </p>
            </div>}
        </div >
    )
}

export default Nuevo