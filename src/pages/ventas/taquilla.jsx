import Guard from "../../components/Guard"
import useVentas from "../../hooks/useVentas"
import dateNow from "../../services/dateNow"
import Ticket from "../../components/modals/ticket"
import { convertCeroNumber } from "../../services/utils"
import AnimalsButtons from "../../components/animalsButtons"

const Taquilla = () => {

    const { animals, handleSelectedAnimal, saveAndPrint, type, setType, setAnimals } = useVentas()
    return (<Guard>
        <div>
            <Ticket />
        </div>
        <div className='px-4 pt-3'>
            <div className="flex-between">
                <h2> Taquilla de ventas </h2>
                <button onClick={saveAndPrint} className="btn btn-primary"> Imprimir </button>
            </div>
            <div className="flex-between">
                <div>
                    <b> {dateNow.fecha} </b>
                    <div>
                        <button onClick={() => { setType(1); setAnimals([]) }} className="btn btn-primary"> Gran Quiniela </button>
                        <button onClick={() => { setType(2); setAnimals([]) }} className="btn btn-primary mx-2"> Mini Quiniela </button>
                    </div>
                </div>
                <div>
                    {type === 1 && <h3 className="bg-success text-light px-2 py-1 rounded">Gran Quiniela</h3>}
                    {type === 2 && <h3 className="bg-warning text-light px-2 py-1 rounded">Mini Quiniela</h3>}
                    {!type && <h3 className="bg-warning py-1 px-3 text-light rounded">Elige un tipo de quiniela</h3>}
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
        <hr />
        {type && <AnimalsButtons handle={handleSelectedAnimal} />}
    </Guard >
    )
}
export default Taquilla
