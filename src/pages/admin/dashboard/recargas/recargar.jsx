import useLoadingStore from "../../../../store/loadingStore"
import useRecargas from "../../../../hooks/useRecargas"
import { Spinner } from "react-bootstrap"
const Recargar = () => {
    const { loading } = useLoadingStore()
    const { userRecharge, setUserCi, userCi, getUserToRecharge, setModal,
        setAmountToRecharge, amountToRecharge } = useRecargas()
    return (
        <>
            {loading ? <div className="text-center p-4"><Spinner /></div> : <>

                <div className="p-5">
                    <form className="pb-4" onSubmit={getUserToRecharge}>
                        <div className="input-group">
                            <input value={userCi} onChange={(e) => setUserCi(e.target.value)} type="text" className="form-control" placeholder="Ingrese la cedula" aria-label="Ingrese la cedula" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                {userCi ? <input type='submit' className="btn btn-primary" value="Buscar" />
                                    : <button disabled className="btn btn-primary" type="button" > Buscar </button>}
                            </div>
                        </div>
                    </form>
                    <div className="card p-4">
                        {!userRecharge ? <div className="text-center p-5"> Buscar un usuario para recargar </div> : <>
                            <div className="d-flex">
                                <b className="mx-2">Nombre:</b> {userRecharge.name}
                            </div>
                            <div className="d-flex">
                                <b className="mx-2">Cedula:</b> {userRecharge.ci}
                            </div>
                            <hr />
                            <div className="flex-between">
                                <h4 className="mx-2">Monto A recargar (Bs)</h4>
                                <input onChange={(e) => setAmountToRecharge(e.target.value)} className="form-control mx-4" type="number" step={0.01} value={amountToRecharge} />
                                <div className="my-4 text-end">
                                    {amountToRecharge ? <button onClick={() => setModal(true)} className="btn btn-primary"> Recargar </button>
                                        : <button disabled className="btn btn-primary"> Recargar </button>}
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </>}
        </>
    )
}

export default Recargar