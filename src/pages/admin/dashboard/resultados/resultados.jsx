/* eslint-disable react/prop-types */
import { useState } from "react"
import ResultAnimals from "../../../../components/resultAnimals/resultAnimals"
import Spinner from "../../../../components/spinner"
import useAnimal from "../../../../hooks/useAnimals"
import useLoadingStore from "../../../../store/loadingStore"
import { am_pm_format } from "../../../../services/utils"
import formatDate from '../../../../services/formatDate'
import images from '../../../../images/images'
import permisions from "../../../../services/permissions"

const ModalResult = ({ status, setModal }) => {
    const { deleteAnimal } = useAnimal()
    const closeModal = () => {
        setModal(false)
    }

    if (status) return (<div className="bg-modal">
        <div className="card p-4">
            <div className="flex-between">
                <h4>
                    {status.name}
                </h4>

                <h3>
                    Nro.{status.animalId}
                </h3>
            </div>
            <div className="flex-between">
                <div>
                    {am_pm_format(status.hora)}
                </div>
                <div>
                    {formatDate(status.fecha)}
                </div>
            </div>
            <div>
                {status.roulet === 1 && "Ruleta Activa"}
                {status.roulet === 2 && "La granjita"}
                {status.roulet === 3 && "Loto Activo"}
            </div>
            <div>
                <img src={images.animals.filter(i => i.id === status.animalId)[0].image} alt="" />
            </div>
            <div className="flex-between">
                <button onClick={() => deleteAnimal(status._id,closeModal)} className="btn text-danger"> Eliminar </button>
                <button className="btn border my-3" onClick={closeModal}> Cerrar </button>
            </div>
        </div>
    </div>)
}


const Resultados = () => {
    const { animals } = useAnimal()
    const { loading } = useLoadingStore()

    const [modal, setModal] = useState(false)

    const setModalResult = (animal) => {
        setModal(animal)
    }

    if (permisions.permit(7)) return (
        <div>
            <ModalResult status={modal} setModal={setModal} />
            <div>
                <div className="flex-between pt-4">
                    <h2>Resultados</h2>
                    <div>
                        Animalitos de hoy
                    </div>
                </div>
                <hr />
            </div>
            {loading ? <div className="text-center p-4"> <Spinner color={"black"} />  </div> : <>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <ResultAnimals animals={animals} roulet={1} setModalResult={setModalResult} />
                            <ResultAnimals animals={animals} roulet={2} setModalResult={setModalResult} />
                            <ResultAnimals animals={animals} roulet={3} setModalResult={setModalResult} />
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Resultados