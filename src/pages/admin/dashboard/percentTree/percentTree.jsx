
import usePercentTree from "./usePercentTree"
import useLoadingStore from "../../../../store/loadingStore"
import { Spinner } from "react-bootstrap"

const PercentTree = () => {
    const { loading } = useLoadingStore()
    const { tree, id } = usePercentTree()
    return (
        <div className="d-flex">

            <section className="p-2 w-100">
                <div className="d-flex align-items-center lb-1">
                    <div className="bg-lblue d-block w-50 py-5 px-3">
                        <div className="card px-5 py-2 text-center">
                            Admin
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="card shadow p-3">
                            kjh
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center lb-1">
                    <div className="bg-lblue d-block w-50 py-5 px-3">
                        <div className="card text-light bg-primary px-5 py-2 text-center">
                            Grupero
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="card shadow p-3">
                            kjh
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="bg-lblue d-block w-50 py-5 px-3">
                        <div className="card px-5 py-2 text-center">
                            Agencia
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="card shadow p-3">
                            kjh
                        </div>
                    </div>
                </div>

            </section>

            {/* {loading ? <div className="flex-center my-5">
                <Spinner ></Spinner>
            </div> : <>
                UserId: {id}
                <div>
                    {console.log(tree)}
                    tree: {tree?.name ? tree.name : "Cargando"}
                </div>
            </>} */}
        </div>
    )
}

export default PercentTree