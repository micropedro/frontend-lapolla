import Guard from "../../../components/Guard"
import Taquilla from "./taquilla"
import TicketSold from "./ticketSold"
import Reporte from "./reporte"
import Ganadores from "./ganadores"
import NavButton from "../../../components/navButton"
import useMenuVentas from "../../../store/menuVentasStore"
import { textMenu } from "../../../services/utils"
import useReportes from "../../../hooks/useReportes"
import permisions from "../../../services/permissions"
import Pagos from "./pagos"
const Ventas = () => {
    const { polla } = useReportes()
    const { menu } = useMenuVentas()

    if (permisions.permit(8)) return (<Guard>
        <nav className="bg-dark flex-between p-2">
            <div>
                <h3 className="text-light m-0">
                    Polla: BS {polla}
                </h3>
            </div>
            <div>
                {permisions.taquilla.includes(permisions.getUser().level) && <NavButton text={textMenu[0]} />}
                {permisions.taquilla.includes(permisions.getUser().level) && <NavButton text={textMenu[1]} />}
                <NavButton text={textMenu[2]} />
                {permisions.taquilla.includes(permisions.getUser().level) && <NavButton text={textMenu[3]} />}
                {permisions.pagos.includes(permisions.getUser().level) && <NavButton text={textMenu[4]} />}
            </div>
        </nav>
        <section>
            {menu === textMenu[0] && <Taquilla />}
            {menu === textMenu[1] && <Reporte />}
            {menu === textMenu[2] && <Ganadores />}
            {menu === textMenu[3] && <TicketSold />}
            {menu === textMenu[4] && <Pagos />}
        </section>
    </Guard >
    )
}
export default Ventas
