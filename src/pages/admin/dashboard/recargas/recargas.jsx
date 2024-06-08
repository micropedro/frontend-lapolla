import Guard from "../../../../components/Guard";
import useRecargas from "../../../../hooks/useRecargas"
import permisions from "../../../../services/permissions";
import Modal from "./modal";
import Recargar from "./recargar";
import Historial from "./historial";
const Recargas = () => {

    const { confirmRecharge, menu, setMenu } = useRecargas()

    if (permisions.permit(9)) return (
        <Guard>
            <Modal confirmRecharge={confirmRecharge} />
            <div className='flex-between px-4 pt-3'>
                <h2> Recargas </h2>
                <div className="recargas-menu">
                    <button onClick={() => setMenu(1)} className="btn text-primary hover-light-blue"> Recargar </button>
                    <button onClick={() => setMenu(2)} className="btn text-primary hover-light-blue"> Historial </button>
                </div>
            </div>
            <hr />

            {menu === 1 && <Recargar />}
            {menu === 2 && <Historial />}


        </Guard>
    )
}

export default Recargas