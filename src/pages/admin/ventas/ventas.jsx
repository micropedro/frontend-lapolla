import Guard from "../../../components/Guard"
import Taquilla from "./taquilla"
import TicketSold from "./ticketSold"
import Reporte from "./reporte"
import Ganadores from "./ganadores"
import NavButton from "../../../components/navButton"
import useMenuVentas from "../../../store/menuVentasStore"
import { textMenu } from "../../../services/utils"
import useReportes from "../../../hooks/useReportes"
const Ventas = () => {
    const { polla } = useReportes()
    const { menu } = useMenuVentas()

    return (<Guard>
        <nav className="bg-dark flex-between p-2">
            <div>
                <h3 className="text-light m-0">
                    Polla: BS {polla}
                </h3>
            </div>
            <div>
                <NavButton text={textMenu[0]} />
                <NavButton text={textMenu[1]} />
                <NavButton text={textMenu[2]} />
                <NavButton text={textMenu[3]} />
            </div>
           
        </nav>
        <section>
            {menu === textMenu[0] && <Taquilla />}
            {menu === textMenu[1] && <Reporte />}
            {menu === textMenu[2] && <Ganadores />}
            {menu === textMenu[3] && <TicketSold />}
        </section>
    </Guard >
    )
}
export default Ventas
