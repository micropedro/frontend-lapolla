/* eslint-disable react/prop-types */
import useRecargasStore from "../../../../store/recargasStore"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"

const Modal = ({ confirmRecharge }) => {
    const { loading } = useLoadingStore()
    const { modal, setModal, amountToRecharge } = useRecargasStore()

    return modal && (
        <div className="bg-modal">
            <div className="card p-5">
                {loading ? <div className="text-center">
                    <Spinner />
                </div> : <>
                    Recargar:
                    <h1>{amountToRecharge} BS</h1>
                    <div className="d-flex gap-2">
                        a <b>Manuel Perez</b>
                    </div>
                    <div className="flex-between mt-4 gap-2">
                        <button onClick={() => setModal(false)} className="btn text-danger">
                            Cancelar
                        </button>
                        <button onClick={confirmRecharge} className="btn btn-success">
                            Confirmar
                        </button>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Modal