import { useState } from "react"
import useMethods from "../../../hooks/useMethods"

const Depositos = () => {

    const { actualMethods, defaultMethod, setDefaultMethod } = useMethods()

    const [tab, setTab] = useState(1)

    const handleMethod = (id) => {
        const newMethod = actualMethods.filter(method => method._id === id)
        setDefaultMethod(newMethod[0])
    }

    const handleForm = (e) => {
        e.preventDefault()

    }

    const Methods = () => {
        return <div className="card p-2">
            <h3> {defaultMethod.methodName} </h3>
            <div> {defaultMethod.banco} </div>
            <div> {defaultMethod.cedula} </div>
            <div> {defaultMethod.cuenta} </div>
            <div> {defaultMethod.tipo} </div>
            <div> {defaultMethod.telefono} </div>
            <div> {defaultMethod.nombre} </div>
            <div> {defaultMethod.correo} </div>
        </div>
    }

    return (<>
        <div className="nav-depositos">
            <h2 className="p-2 m-0">Depositos</h2>
            <div className="">
                <button onClick={() => setTab(1)} className={tab === 1 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Pendientes </button>
                <button onClick={() => setTab(2)} className={tab === 2 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Aprobados </button>
                <button onClick={() => setTab(3)} className={tab === 3 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Anulados </button>
                <button onClick={() => setTab(4)} className={tab === 4 ? "btn-tab-active btn-dep" : "btn-tab-inanctive btn-dep"}> Nuevo Deposito </button>
            </div>
        </div>
        <hr className="m-0 p-0" />
        {tab === 4 && <div className="p-4">
            <h4>Nuevo deposito</h4>
            <hr />
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-6">
                        <select onChange={(e) => { handleMethod(e.target.value) }} name="" id="" className="form-select">
                            {actualMethods.length > 0 && actualMethods.map((method, index) => {
                                return <option key={index} value={method._id}> {method.methodName}  </option>
                            })}
                        </select>
                    </div>
                    <div className="col-6">
                        <Methods />
                    </div>
                </div>
            </div>
            <div className="card p-3">
                <form action="" onSubmit={handleForm}>
                    <div className="flex-between">
                        <h4>Datos del {defaultMethod.methodName}</h4>
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                    <hr />
                    <div className="p-4">

                        {defaultMethod.banco ? <>
                            <label htmlFor="banco">Nombre del Banco</label>
                            <input type="text" name="banco" className="form-control bg-light-gray" placeholder="Ingrese El Banco" />
                        </> : <input type="hidden" name="banco" />}

                        {defaultMethod.nombre ? <>
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input type="text" name="nombre" className="form-control bg-light-gray" placeholder="Ingrese El Nombre" />
                        </> : <input type="hidden" name="nombre" />}

                        {defaultMethod.cedula ? <>
                            <label htmlFor="cedula">Ingrese la cedula</label>
                            <input type="text" name="cedula" className="form-control bg-light-gray" placeholder="Ingrese El Nombre" />
                        </> : <input type="hidden" name="cedula" />}

                        {defaultMethod.correo ? <>
                            <label htmlFor="correo"> Ingrese el correo </label>
                            <input type="text" name="correo" className="form-control bg-light-gray" placeholder="Ingrese El Nombre" />
                        </> : <input type="hidden" name="correo" />}

                        {defaultMethod.cuenta ? <>
                            <label htmlFor="cuenta">Numero de cuenta</label>
                            <input type="text" name="cuenta" className="form-control bg-light-gray" placeholder="Ingrese El Nombre" />
                        </> : <input type="hidden" name="cuenta" />}

                        {defaultMethod.tipo ? <>
                            <label htmlFor="tipo">Tipo de cuenta</label>
                            <input type="text" name="tipo" className="form-control bg-light-gray" placeholder="Ingrese El Nombre" />
                        </> : <input type="hidden" name="tipo" />}

                        {defaultMethod.telefono ? <>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" name="telefono" className="form-control bg-light-gray" placeholder="Ingrese El Nombre" />
                        </> : <input type="hidden" name="telefono" />}
                    </div>

                    {/* banco
                    nombre
                    cedula
                    correo
                    cuenta
                    methodName
                    telefono
                    tipo */}

                </form>
            </div>
        </div >}

        {
            tab === 1 && <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Comprobante</th>
                            <th>Monto</th>
                            <th>Nombre</th>
                            <th>CI</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01/02/05 02:00:59</td>
                            <td>012121215</td>
                            <td>BS. 25</td>
                            <td>Manuel Perez</td>
                            <td>20853601</td>
                            <td>
                                <button className="btn btn-success mx-1"> Aprobar </button>
                                <button className="btn btn-danger mx-1"> Anular </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        }
        {
            tab === 2 && <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Comprobante</th>
                            <th>Monto</th>
                            <th>Nombre</th>
                            <th>CI</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>

                </table>
            </div>
        }
        {
            tab === 3 && <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Comprobante</th>
                            <th>Monto</th>
                            <th>Nombre</th>
                            <th>CI</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>

                </table>
            </div>
        }
    </>
    )
}

export default Depositos