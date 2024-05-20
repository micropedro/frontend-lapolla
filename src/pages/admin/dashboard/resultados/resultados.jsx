import ResultAnimals from "../../../../components/resultAnimals/resultAnimals"
import Spinner from "../../../../components/spinner"
import useAnimal from "../../../../hooks/useAnimals"
import useLoadingStore from "../../../../store/loadingStore"
const Resultados = () => {
    const { animals } = useAnimal()
    const { loading } = useLoadingStore()
    return (
        <div>
            <div className="flex-between pt-4">
                <h2>Resultados</h2>
            </div>
            <div>
                Animalitos de hoy
            </div>
            <hr />
            {loading ? <div className="text-center p-4"> <Spinner color={"black"} />  </div> : <>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <ResultAnimals animals={animals} roulet={1} />
                            <ResultAnimals animals={animals} roulet={2} />
                            <ResultAnimals animals={animals} roulet={3} />
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Resultados