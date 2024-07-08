import { totalAPagar } from "../../../../services/utils"
import storeModal from "./storeModal"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"

import useReportUser from "../../../../hooks/useReportUser"

const getMethod = (id, methods) => methods.filter(i => i._id === id)[0]

const ModalPago = () => {

    const { confirmPay, refNumber } = useReportUser()
    const { loading } = useLoadingStore()
    const { visible, closeModal, dataModal, methods, userToPay, selectMethod, setSelectMethod } = storeModal()

    if (visible) return (<>
        <div className="bg-modal">
            <div className="card p-4 card-modalPagos">
                {loading ? <> <Spinner /> </> : <>
                    <div>
                        <div className="tittle">
                            Monto a pagar:
                        </div>
                        <div className="amount">
                            {totalAPagar(dataModal.tickets, dataModal.precioQuiniela).toFixed(2)} Bs
                        </div>
                        <div className="tipoQuiniela mb-2">
                            <div>Quiniela:</div>
                            <div className="text-end">
                                <b> {dataModal.tipoQuiniela === 1 ? "Gran Quiniela" : "Mini Quiniela"} </b>
                                <div>{dataModal._id.slice(-6)}</div>
                            </div>
                        </div>
                        {methods.length === 0 ? <div className="text-no-methods">
                            Su grupero no a asignado metodos de pago
                        </div> : <>
                            <select onChange={e => setSelectMethod(e.target.value === '0' ? '0' : getMethod(e.target.value, methods))} value={selectMethod._id} className="form-select mb-2">
                                <option value={"0"}> - Forma De Pago -</option>
                                {methods.map((i) => {
                                    return <option key={i._id} value={i._id}> {i.methodName} </option>
                                })}
                            </select>
                            {selectMethod !== "0" &&
                                <div className="p-3">
                                    <span className="text-gray text-center mb-4">
                                        Debe enviar {totalAPagar(dataModal.tickets, dataModal.precioQuiniela).toFixed(2)} Bs a los siguientes datos
                                    </span>
                                    <div className="card p-2">
                                        <div className="row">
                                            <div className="col-3 p-1">
                                                <div className="">
                                                    <img src={selectMethod?.imageUrl} className="img-modal-reporte" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div> {selectMethod?.telefono && <><b>Telefono:</b> {selectMethod?.telefono}</>} </div>
                                                <div> {selectMethod?.nombre && <><b>Nombre:</b> {selectMethod?.nombre}</>} </div>
                                                <div> {selectMethod?.cedula && <><b>Cedula:</b> {selectMethod?.cedula}</>} </div>
                                                <div> {selectMethod?.tipo && <><b>Tipo: </b> {selectMethod?.tipo}</>} </div>
                                                <div> {selectMethod?.cuenta && <><b>Cuenta:</b> {selectMethod?.cuenta}</>} </div>
                                                <div> {selectMethod?.banco && <><b>Banco:</b> {selectMethod?.banco}</>} </div>
                                                <div> {selectMethod?.tipoDeCambio && <><b>Tipo De Cambio:</b> {selectMethod?.tipoDeCambio}</>} </div>
                                            </div>
                                        </div>
                                        <input ref={refNumber} className="form-control mb-2 border border-warning my-4 " placeholder="Ingrese numero de referencia" type="text" name="" id="" />
                                        <div className="mb-2 p-2 mt-3">
                                            Se reportara el pago a:
                                            <b className="mx-2">
                                                {userToPay.name}
                                            </b>
                                        </div>
                                        <button onClick={confirmPay} className="btn btn-primary mt-4 w-100"> Confirmo que é pagado Bs. {totalAPagar(dataModal.tickets, dataModal.precioQuiniela).toFixed(2)}</button>
                                    </div>
                                </div>
                            }


                        </>}

                    </div>
                    <button className="btn" onClick={closeModal}> Cerrar </button>
                </>}
            </div>
        </div>
    </>)
}
export default ModalPago