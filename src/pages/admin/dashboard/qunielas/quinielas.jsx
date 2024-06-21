/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "react-bootstrap"
import Guard from "../../../../components/Guard"
import useQuinielas from "../../../../hooks/useQuinielas"
import PastQuinielas from "./pastQuinielas"
import QuinielasTickets from "./QuinielasTickets"
import useLoadingStore from "../../../../store/loadingStore"
import permisions from "../../../../services/permissions"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const Quinielas = () => {
    const { id } = useParams()
    console.log("id:" + id)
    const { loading } = useLoadingStore()
    const { createNewQuiniela, menu, setMenu, handler, playingTickets } = useQuinielas()
    const [quinielaSelected, setQuinielaSelected] = useState(1)

    if (permisions.permit(10)) return (<Guard>
        <div>
            <div className='flex-between px-4 pt-3'>
                <h2 className="h2-plain" > Quinielas </h2>
                <div>
                    <button onClick={() => { setMenu(1); handler("ayer") }} className="btn text-primary mx-2" > Jugando hoy </button>
                    <button onClick={() => { setMenu(2); handler("hoy") }} className="btn text-primary mx-2" > Nuevos Tickets </button>
                    <button onClick={() => setMenu(3)} className="btn text-primary mx-2" > Listar quinielas </button>
                    <div className="text-end">
                        <button onClick={() => createNewQuiniela(1)} className="btn btn-primary mx-2 mt-2"> Iniciar gran quinielas </button>
                        <button onClick={() => createNewQuiniela(2)} className="btn btn-primary mx-2 mt-2"> Iniciar mini quinielas </button>
                    </div>
                </div>
            </div>
            <div className="text-end mt-3">
                <Link to='/dashboard/quinielas/granquiniela' >
                    <button className={`${id === 'granquiniela' ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}`} onClick={() => setQuinielaSelected(1)}> Gran quiniela </button>
                </Link>
                <Link to='/dashboard/quinielas/miniquiniela' >
                    <button className={`${id !== 'granquiniela' ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}`} onClick={() => setQuinielaSelected(2)}>
                        Mini Quiniela
                    </button>
                </Link>
            </div>

            {loading ? <div className="flex-center p-5 bg-light"> <Spinner /> </div> : <>
                {menu === 1 && <div className="bg-light py-3"><QuinielasTickets tickets={playingTickets} menu={menu} quinielaSelected={quinielaSelected} /></div>}
                {menu === 2 && <div className="bg-light py-3"><QuinielasTickets tickets={playingTickets} menu={menu} quinielaSelected={quinielaSelected} /></div>}
            </>}
            {menu === 3 && <PastQuinielas />}
        </div >
    </Guard >
    )
}

export default Quinielas
