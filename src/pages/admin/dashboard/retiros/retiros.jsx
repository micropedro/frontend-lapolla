import { useState } from "react"
import Pending from "./pending"
import approved from "./approved"
import permisions from "../../../../services/permissions"
const Retiros = () => {

    const [tab, setTab] = useState(1)
    if (permisions.permit(5)) return (<>
        <div className="nav-depositos">
            <h2 className="p-2 m-0 h2-plain">Retiros</h2>
            <div className="">
                <button onClick={() => setTab(1)} className={tab === 1 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Pendientes </button>
                <button onClick={() => setTab(2)} className={tab === 2 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Aprobados </button>
            </div>
        </div>
        <hr className="m-0 p-0" />
        {tab === 1 && <Pending />}
        {tab === 2 && <approved />}
    </>
    )
}

export default Retiros