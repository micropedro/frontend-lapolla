/* eslint-disable react/prop-types */
import useMenuVentas from "@/store/menuVentasStore"
const NavButton = ({ text }) => {
    const { menu, setMenu } = useMenuVentas()
    const style = menu === text ? "btn sidebar-button-active mx-1" : "btn sidebar-button mx-1 text-gray"
    return <button onClick={() => setMenu(text)} className={style} > {text} </button>
}

export default NavButton