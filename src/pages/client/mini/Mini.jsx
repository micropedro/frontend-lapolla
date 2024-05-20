/* eslint-disable react-hooks/exhaustive-deps */
import useVentas from "../../../hooks/useVentas"
import dateNow from "@/services/dateNow"
import ClientTicket from "../../../components/modals/clientTicket"
import { convertCeroNumber } from "@/services/utils"
import { useEffect } from "react"
import AnimalsButtons from "@/components/animalsButtons"
import useUserStore from "../../../store/userStore"
import { Link } from 'react-router-dom';
import Spinner from "../../../components/spinner"

const Taquilla = () => {

    const type = 2

    const { animals, handleSelectedAnimal, saveTicketClient, setType, loading } = useVentas()
    const { user } = useUserStore()

    useEffect(() => {
        setType(2)
    }, [])

    return (<>
        {loading && (
            <div className="row">
                <div className="bg-dark bg-opacity-50 position-fixed d-flex justify-content-center align-items-center min-vh-100">
                    <Spinner />
                </div> 
            </div>
        )}
        <div>
            <ClientTicket />
        </div>
        <div className='px-4 pt-4 text-light mb-3'>
            <div className="row">
                <div className="col-md-3">
                    <h2 className="bg-warning text-light px-2 py-1 rounded text-center">Mini Quiniela</h2>
                </div>
                <div className="col-md-3">
                    <Link to='../quiniela' className="btn btn-primary">Ir a Gran Quiniela </Link>
                </div>
                <div className="col-md-3">
                    <b> {dateNow.fecha} </b>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <div>
                        <p>Saldo: {user.balance} bs</p>
                        <button onClick={saveTicketClient} className="btn btn-success"> Comprar Ticket </button>
                    </div>
                </div>

            </div>
            <div>Seleccionados {animals.length}  {type === 1 ? '/ 6' : type === 2 ? '/ 3' : ""}</div>
            <div className="animals-content">
                {animals.length > 0 && animals.map((i, index) => {
                    return <div onClick={() => handleSelectedAnimal(i)} key={index} className="m-1 p-2 anim-btn text-light">
                        {i.id === 37 ? "00" : convertCeroNumber(i.id)} - {i.name}
                    </div>
                })}
            </div>
        </div>
        {type && <AnimalsButtons handle={handleSelectedAnimal} />}
    </>)
}
export default Taquilla