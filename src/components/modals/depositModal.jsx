import { Spinner } from "react-bootstrap"
import useLoadingStore from "../../store/loadingStore"
import useDeposits from "../../hooks/useDeposits"
import useDepositStore from "../../store/depositStore"
const DepositModal = () => {
    const { findedUser, modal, setModal, setUserSelected, setFindedUser } = useDepositStore()
    const { findUserByCi } = useDeposits()
    const { loading } = useLoadingStore()

    const handleClose = () => {
        setModal(false)
        setUserSelected(null)
        setFindedUser({ state: 1 })
    }

    if (modal) {
        return (
            <div className="notification-bg">
                <div className="card p-4 style-card">
                    <div className="mb-2 flex-between">
                        <div>
                            Buscar Usuario por cedula
                        </div>
                        <button onClick={() => handleClose()} className="btn btn-danger"> x </button>
                    </div>
                    <form onSubmit={findUserByCi}>
                        <div className="text-end">
                            <input name="ci" type="text" className="form-control mb-2" placeholder="Ingrese la cedula del usuario" required />
                            <button className="btn btn-primary mb-2"> Buscar </button>
                        </div>
                    </form>
                    {findedUser.state === 2 && <>
                        <div className="p-4 border rounded text-center bg-dark text-light">
                            {loading ? <>
                                <Spinner />
                            </> :
                                <>
                                    {findedUser ? <>
                                        <b>{findedUser.name}</b>
                                        <p>CI: {findedUser.ci}</p>
                                        <button onClick={() => { setModal(false); setUserSelected(findedUser) }} className="btn btn-success w-100"> Seleccionar </button>
                                    </> : <>
                                        <h3> Usuario no encontrado ! </h3>
                                    </>}
                                </>}
                        </div>
                    </>}

                    {findedUser.state === 3 && <>
                        <div className="p-4 border rounded text-center bg-dark text-light">
                            {loading ? <>
                                <Spinner />
                            </> : <h3> Usuario no encontrado ! </h3>}
                        </div>
                    </>}
                    <div className="text-center pt-4">
                        <button onClick={() => handleClose()} className="btn btn-danger"> Cancelar </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default DepositModal