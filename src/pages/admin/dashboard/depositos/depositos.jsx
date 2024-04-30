import useDeposits from "../../../../hooks/useDeposits"
import Anulados from "./anulados"
import Aprobados from "./aprobados"
import Nuevo from "./nuevo"
import Pendientes from "./pendientes"

const Depositos = () => {
    const { tab, setTab } = useDeposits()
    return (<>
        <div className="nav-depositos">
            <h2 className="p-2 m-0">Depositos</h2>
            <div className="">
                <button onClick={() => setTab(1)} className={tab === 1 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Nuevo Deposito </button>
                <button onClick={() => setTab(2)} className={tab === 2 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Pendientes </button>
                <button onClick={() => setTab(3)} className={tab === 3 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Aprobados </button>
                <button onClick={() => setTab(4)} className={tab === 4 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Rechazados </button>
            </div>
        </div>
        <hr className="m-0 p-0" />
        {tab === 1 && <Nuevo />}
        {tab === 2 && <Pendientes />}
        {tab === 3 && <Aprobados />}
        {tab === 4 && <Anulados />}
    </>
    )
}

export default Depositos