import Guard from "../../components/Guard"
import Taquilla from "./taquilla"
import Reporte from "./reporte"
import Ganadores from "./ganadores"
import NavButton from "../../components/navButton"
import useMenuVentas from "../../store/menuVentasStore"
import { textMenu } from "../../services/utils"
const Ventas = () => {
  const { menu } = useMenuVentas()

  return (<Guard>
    <nav className="bg-dark text-end p-2">
      <NavButton text={textMenu[0]} />
      <NavButton text={textMenu[1]} />
      <NavButton text={textMenu[2]} />
    </nav>
    <section>
      {menu === textMenu[0] && <Taquilla />}
      {menu === textMenu[1] && <Reporte />}
      {menu === textMenu[2] && <Ganadores />}
    </section>
  </Guard >
  )
}
export default Ventas
