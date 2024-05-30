import useConfig from "../../../hooks/useConfig"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from "../../../components/spinner"
import permisions from "../../../services/permissions"
const Config = () => {
    const { loading } = useLoadingStore()
    const { config, updateConfig, setConfig, handleHoras } = useConfig()
    if (permisions.permit(3)) return (
        <div>
            <div className="flex-between pt-4">
                <h2>Configuracion</h2>
                {loading ? <button className="btn btn-primary px-3"> <Spinner /> </button> : <button onClick={updateConfig} className="btn btn-primary"> Guardar </button>}

            </div>
            <hr />
            {loading ?
                <div className="text-center pt-5">
                    <Spinner color="black" />
                </div>
                :
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-5 text-lg">
                            Porcentaje Premio Casa <b className="mx-2"> {config.premioCasa} %</b>
                        </div>
                        <div className="col-7">
                            <input onChange={(e) => setConfig({ ...config, premioCasa: e.target.value })} className="form-control" type="number" value={config.premioCasa} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-5 text-lg">
                            Precio Gran Quiniela
                            <b className="mx-2"> BS. {config.precioGranQuiniela}</b>
                        </div>
                        <div className="col-7">
                            <input onChange={(e) => setConfig({ ...config, precioGranQuiniela: e.target.value })} className="form-control" type="number" value={config.precioGranQuiniela} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-5 text-lg">
                            Precio Mini Quiniela <b className="mx-2">Bs. {config.precioMiniQuiniela}</b>
                        </div>
                        <div className="col-7">
                            <input onChange={(e) => setConfig({ ...config, precioMiniQuiniela: e.target.value })} className="form-control" type="number" value={config.precioMiniQuiniela} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-5 text-lg">
                            Hora Gran Quiniela <b className="mx-2"> {config.horaGranQuiniela}</b>
                        </div>
                        <div className="col-7">
                            <input type="time" name="" id="" onChange={(e) => setConfig({ ...config, horaGranQuiniela: e.target.value })} value={config.horaGranQuiniela} className="form-control" />
                            {/* <input max={23} min={0} onChange={(e) => setConfig({ ...config, horaGranQuiniela: e.target.value })} className="form-control" type="number" value={config.horaGranQuiniela} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-end">
                            Formato de 24 horas y separadas por coma ( , )
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-5 text-lg">
                            Horas Mini Quiniela
                        </div>
                        <div className="col-7">
                            <input onChange={handleHoras} className="form-control" type="string" value={config.horasMiniQuiniela.join(",")} />
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Config