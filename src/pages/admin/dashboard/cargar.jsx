import Guard from "../../../components/Guard"
import AnimalsButtons from "../../../components/animalsButtons"
import dateNow from "../../../services/dateNow"
import useCargarAnimales from "../../../hooks/useCargarAnimales"
import Hora from '../../../components/hora'
import permisions from "../../../services/permissions"

const Cargar = () => {
    const { animalSelected, animalSelected2, animalSelected3, handle, save, handleHora, formattedDate, hora, setRadioRoulet, handleFecha } = useCargarAnimales()

    if (permisions.permit(2)) return (
        <Guard>
            <div className="mt-3 px-2">
                <div className="w-100 p-3 bg-dark text-light rounded flex-between-start">
                    <div className="d-flex w-100">
                        <div className="px-3 w-100">
                            <div className="flex-between">
                                <h4>Cargar Animalito {String(dateNow.horas).padStart(2, "0")}:{String(dateNow.minutos).padStart(2, '0')} {dateNow.periodo}</h4>
                                <div>
                                    <input onChange={(e) => handleFecha(e.target.value)} className="btn-cargar" type="date" name="date" defaultValue={formattedDate} />
                                    <Hora handleHora={handleHora} hora={hora} />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="text-center">
                                    <div className="animal-none">
                                        <img height="80" src={animalSelected && animalSelected.image} alt="" />
                                    </div>
                                    <div>
                                        <input defaultChecked={true} type="radio" name="radioRoulet" id={1} onChange={() => setRadioRoulet(1)} />
                                        <label htmlFor={1} id="radioRoulet">
                                            Ruleta Activa
                                        </label>
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <div className="animal-none">
                                        <img height="80" src={animalSelected2 && animalSelected2.image} alt="" />
                                    </div>
                                    <div>
                                        <input type="radio" name="radioRoulet" id={2} onChange={() => setRadioRoulet(2)} />
                                        <label htmlFor={2} id="radioRoulet">
                                            La granjita
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="animal-none">
                                        <img height="80" src={animalSelected3 && animalSelected3.image} alt="" />
                                    </div>
                                    <div>
                                        <input type="radio" name="radioRoulet" id={3} onChange={() => setRadioRoulet(3)} />
                                        <label htmlFor={3} id="radioRoulet">
                                            Loto Activo
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {animalSelected && animalSelected2 && animalSelected3 ? <button onClick={() => save()} className="btn btn-primary">Guardar</button> :
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