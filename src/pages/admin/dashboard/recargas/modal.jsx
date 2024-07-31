/* eslint-disable react/prop-types */
import useRecargasStore from "../../../../store/recargasStore"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"

const Modal = ({ confirmRecharge }) => {
    const { loading } = useLoadingStore()
    const { modal, setModal, amountToRecharge, userRecharge } = useRecargasStore()

    return modal && (
        <div className="bg-modal">
            <div className="card p-5">
                {loading ? <div className="text-center">
                    <Spinner />
                </div> : <div className="text-center">
                    Recargar:
                    <h1>{amountToRecharge} BS</h1>
                    <div className=" gap-2">
                        <div>
                            a: <b>{userRecharge?.name}</b>
                        </div>
                        <div>
                            ci: <b>{userRecharge?.ci}</b>
                        </div>
                    </div>
                    <div className="flex-between mt-4 gap-2">
                        <button onClick={() => setModal(false)} className="btn text-danger">
                            Cancelar
                        </button>
                        <button onClick={confirmRecharge} className="btn btn-success">
                            Confirmar
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Modal