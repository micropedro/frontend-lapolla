import useModalStore from "./store"
import useRetiros from "../../../../../hooks/useRetiros"
import useLoadingStore from "../../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"
const RetiroModal = () => {

    const { loading } = useLoadingStore()
    const { approveWhithdraw } = useRetiros()
    const { visible, setVisible, data } = useModalStore()


    //const { _id, payMethod, amount } = retiro
    //const { methodName, nombre, cedula, correo, tipo, cuenta, banco, telefono, imageUrl } = payMethod
    if (visible) return (<div className="bg-modal">
        <div className="card p-4 mins-modal">
            <div>
                <div className="flex-between">
                    <h3>{data?.payMethod?.methodName && data?.payMethod?.methodName} </h3>
                    <img height={60} src={data?.payMethod?.imageUrl} alt="" />
                </div>
                <div className="text-lg border p-2 mb-2">
                    {data?.payMethod?.nombre && <div> <b>{data?.payMethod?.nombre}</b> </div>}
                    {data?.payMethod?.cedula && <div>CI: {data?.payMethod?.cedula}</div>}
                    {data?.payMethod?.correo && <div>Email: {data?.payMethod?.correo}</div>}
                    {data?.payMethod?.tipo && <div>Tipo: {data?.payMethod?.tipo}</div>}
                    {data?.payMethod?.cuenta && <div>Nro: {data?.payMethod?.cuenta}</div>}
                    {data?.payMethod?.banco && <div>Banco: {data?.payMethod?.banco}</div>}
                    {data?.payMethod?.telefono && <div>Telf: {data?.payMethod?.telefono}</div>}
                    {data.amount && <div className="text-center"> <h3 className="debeEnviar">Debe Enviar {(data.amount).toFixed(2)} {data?.payMethod.tipoDeCambio === 1 ?"BS":"$"} </h3> </div>}
                </div>
                <div className="mb-3">
                    Ingresar Nro de referencia
                    <input type="text" className="form-control" placeholder="Nro de referencia" />
                </div>
            </div>
            <div className="flex-between">
                <button className="btn" onClick={() => setVisible(false)}> Cerrar </button>
                {loading ?
                    <button className="btn btn-primary" > <Spinner /> </button>
                    :
                    <button onClick={() => approveWhithdraw(data._id)} className="btn btn-success">Aprobar</button>
                }
            </div>
        </div>
    </div>)
}

export default RetiroModal