import Guard from "../../components/Guard"
import AnimalsButtons from "../../components/animalsButtons"
import dateNow from "../../services/dateNow"
import useCargarAnimales from "../../hooks/useCargarAnimales"
import Hora from '../../components/hora'
const Cargar = () => {
    const { animalSelected, handle, save, setHora, formattedDate, hora, radioRoulet, setRadioRoulet, animalDate } = useCargarAnimales()
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
                            <h4>Cargar Animalito {String(dateNow.horas).padStart(2, "0")}:{String(dateNow.minutos).padStart(2, '0')} {dateNow.periodo}</h4>
                            <input onChange={animalDate} className="btn-cargar" type="date" name="date" defaultValue={formattedDate} />
                            <Hora setHora={setHora} hora={hora} />
                            <div className="d-flex mt-2">
                                <div className="mr1">
                                    <input type="radio" name="radioRoulet" id={1} onChange={() => setRadioRoulet(1)} />
                                    <label htmlFor={1} id="radioRoulet">
                                        Ruleta Activa
                                    </label>
                                </div>
                                <div className="mr1">
                                    <input type="radio" name="radioRoulet" id={2} onChange={() => setRadioRoulet(2)} />
                                    <label htmlFor={2} id="radioRoulet">
                                        La granjita
                                    </label>
                                </div>
                                <div className="mr1">
                                    <input type="radio" name="radioRoulet" id={3} onChange={() => setRadioRoulet(3)} />
                                    <label htmlFor={3} id="radioRoulet">
                                        Loto Activo
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {animalSelected && radioRoulet ? <button onClick={() => save(animalSelected)} className="btn btn-primary">Guardar</button> :
                        <button className="btn btn-secondary" disabled>Guardar</button>}
                </div>
                <div className="mt-4">
                    <AnimalsButtons handle={(handle)} />
                </div>
            </div>
        </Guard>
    )
}

export default Cargar