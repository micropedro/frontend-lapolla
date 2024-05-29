import Guard from "../../../../components/Guard";
import useRecargas from "../../../../hooks/useRecargas"
import Modal from "./modal";
const Recargas = () => {

    const { userRecharge, setUserCi, userCi, getUserToRecharge, setModal,
        confirmRecharge, setAmountToRecharge, amountToRecharge } = useRecargas()

    return (
        <Guard>
            <Modal confirmRecharge={confirmRecharge} />
            <div className='flex-between px-4 pt-3'>
                <h2> Recargas </h2>
                <div>
                    <div className="input-group mb-3">
                        <input value={userCi} onChange={(e) => setUserCi(e.target.value)} type="text" className="form-control" placeholder="Ingrese la cedula" aria-label="Ingrese la cedula" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            {userCi ? <>
                                <button onClick={getUserToRecharge} className="btn btn-primary" type="button"> Buscar </button>
                            </> : <>
                                <button disabled className="btn btn-primary" type="button" > Buscar </button>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {userRecharge ? <>
                <div className="p-5">
                    <div className="card p-4">
                        <div className="d-flex">
                            <b className="mx-2">Nombre:</b> {userRecharge.name}
                        </div>
                        <div className="d-flex">
                            <b className="mx-2">Cedula:</b> {userRecharge.ci}
                        </div>
                        <div className="d-flex">
                            <b className="mx-2">Saldo:</b> {userRecharge.balance}
                        </div>
                        <hr />
                        <div className="d-flex">
                            <h4 className="mx-2">Monto A recargar (Bs)</h4>
                            <input onChange={(e) => setAmountToRecharge(e.target.value)} className="form-control" type="number" step={0.01} value={amountToRecharge} />
                        </div>
                        <div className="my-4 text-end">
                            {amountToRecharge ? <>
                                <button onClick={() => setModal(true)} className="btn btn-primary"> Recargar </button>
                            </> : <>
                                <button disabled className="btn btn-primary"> Recargar </button>
                            </>}
                        </div>
                    </div>
                </div>
            </> : <div className="text-center p-5"> Buscar un usuario para recargar </div>}
        </Guard>
    )
}

export default Recargas