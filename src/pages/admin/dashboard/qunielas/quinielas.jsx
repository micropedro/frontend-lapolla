/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "react-bootstrap"
import Guard from "../../../../components/Guard"
import useQuinielas from "../../../../hooks/useQuinielas"
import PastQuinielas from "./pastQuinielas"
import QuinielasTickets from "./QuinielasTickets"
import useLoadingStore from "../../../../store/loadingStore"
import permisions from "../../../../services/permissions"

const Quinielas = () => {
    const { loading } = useLoadingStore()
    const { createNewQuiniela, menu, setMenu, handler, playingTickets,cerrarGranQuiniela } = useQuinielas()

    if (permisions.permit(10)) return (<Guard>
        <div>
            <div className='flex-between px-4 pt-3'>
                <h2> Quinielas </h2>
                <div>
                    <button onClick={() => { setMenu(1); handler("ayer") }} className="btn text-primary mx-2" > Jugando hoy </button>
                    <button onClick={() => { setMenu(2); handler("hoy") }} className="btn text-primary mx-2" > Nuevos Tickets </button>
                    <button onClick={() => setMenu(3)} className="btn text-primary mx-2" > Listar quinielas </button>
                    <button onClick={() => createNewQuiniela()} className="btn btn-primary"> + Iniciar quinielas </button>
                    <button onClick={() => cerrarGranQuiniela()} className="btn btn-primary"> - Cerrar dia </button>
                </div>
            </div>
            <hr />
            {loading && menu < 3 ? <div className="flex-center p-5"> <Spinner /> </div> : <>
                {menu === 1 && <QuinielasTickets tickets={playingTickets} menu={menu} />}
                {menu === 2 && <QuinielasTickets tickets={playingTickets} menu={menu} />}
            </>}
            {menu === 3 && <PastQuinielas />}
        </div >
    </Guard >
    )
}
export default Quinielas