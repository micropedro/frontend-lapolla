/* eslint-disable react-hooks/exhaustive-deps */
import useVentas from "../../../hooks/useVentas"
import dateNow from "@/services/dateNow"
import Ticket from "../../../components/modals/ticket"
import { convertCeroNumber } from "@/services/utils"
import { useEffect } from "react"
import AnimalsButtons from "@/components/animalsButtons"
import { Link } from 'react-router-dom';

const Taquilla = () => {

    const type = 2

    const { animals, handleSelectedAnimal, saveAndPrint, setType, setAnimals } = useVentas()

    useEffect(() => {
        setType(2)
    }, [])

    return (<>
        <div>
            <Ticket />
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
                        <p>Saldo: 1000 bs</p>
                        <button onClick={saveAndPrint} className="btn btn-success"> Comprar Ticket </button>
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