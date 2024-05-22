/* eslint-disable react/prop-types */
import { useState } from "react"
import ResultAnimals from "../../../../components/resultAnimals/resultAnimals"
import Spinner from "../../../../components/spinner"
import useAnimal from "../../../../hooks/useAnimals"
import useLoadingStore from "../../../../store/loadingStore"
import { am_pm_format } from "../../../../services/utils"
import { formatDate2 } from '../../../../services/formatDate'

const Resultados = () => {
    const { animals } = useAnimal()
    const { loading } = useLoadingStore()

    const [modal, setModal] = useState(false)

    const setModalResult = (animal) => {
        setModal(animal)
    }

    const closeModal = () => {
        setModal(false)
    }

    const ModalResult = ({ status }) => {
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
                {am_pm_format(status.hora)}
                <input className="form-control" type="time" name="" id="" />
                {formatDate2(status.fecha)}
                <input className="form-control mb-2" type="date" name="" id="" />
                {status.roulet === 1 && "Ruleta Activa"}
                {status.roulet === 2 && "La granjita"}
                {status.roulet === 3 && "Loto Activo"}

                {status.fecha}
                <button className="btn border my-3" onClick={closeModal}> Cerrar </button>
            </div>
        </div>)
    }

    return (
        <div>
            <ModalResult status={modal} />
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