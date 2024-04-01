import Spinner from "@/components/spinner"
import useGanadores from "@/hooks/useGanadores"
import useLoadingStore from "@/store/loadingStore"
import WinnerTicket from "@/components/winnerTicket"
const Ganadores = () => {
    const { loading } = useLoadingStore()
    const { setCode, winnerTicket } = useGanadores()
    const handler = (e) => {
        e.preventDefault()
        winnerTicket(e)
    }
    return (
        <div className="container ">
            <div className="row mt-3 bg-dark text-light px-3 py-2">
                <div className="col-12">
                    <h3>Comprobacion de ganadores</h3>
                    <div className="input-group mb-3">
                        <form onSubmit={handler} className="w-100 d-flex">
                            <input onChange={(e) => setCode(e.target.value)} type="text" className="form-control" placeholder="Ingresa el codigo del ticket" maxLength={5} />
                            <div className="input-group-append">
                                {loading ?
                                    <button disabled className="btn btn-secondary">  <Spinner />  </button>
                                    :
                                    <button className="btn btn-primary "> Comprobar </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2 text-center pt-4">
                    <WinnerTicket />
                </div>
            </div>
        </div>
    )
}

export default Ganadores