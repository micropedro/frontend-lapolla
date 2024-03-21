import Guard from "../components/Guard"
import AnimalsButtons from "../components/animalsButtons"
import dateNow from "../services/dateNow"
import useCargarAnimales from "../hooks/useCargarAnimales"
const Cargar = () => {
    const { animalSelected, handle, save } = useCargarAnimales()
    return (
        <Guard>
            <div className="mt-3 px-2">

                <div className="w-100 p-3 bg-dark text-light rounded flex-between-start">
                    <div className="d-flex">
                        <div className="animal-none">
                            {!animalSelected && <i className="bi bi-image " />}
                            {animalSelected && <img height="80" src={animalSelected && animalSelected.image} alt="" />}
                        </div>
                        <div className="px-3">
                            <h3>Elija un animalito</h3>
                            <p>Hora {String(dateNow.horas).padStart(2, "0")}:{String(dateNow.minutos).padStart(2, '0')} {dateNow.periodo}</p>
                        </div>
                    </div>
                    <button onClick={() => save(animalSelected)} className="btn btn-primary">Guardar</button>
                </div>

                <div className="mt-4">
                    <AnimalsButtons handle={(handle)} />
                </div>
            </div>
        </Guard>
    )
}

export default Cargar