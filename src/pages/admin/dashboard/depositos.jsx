import { useState } from "react"
import useMethods from "../../../hooks/useMethods"
/* import request from "../../../services/request" */

const Depositos = () => {

    const { actualMethods, defaultMethod, setDefaultMethod } = useMethods()

    const [tab, setTab] = useState(4)

    const handleMethod = (id) => {
        const newMethod = actualMethods.filter(method => method._id === id)
        setDefaultMethod(newMethod[0])
    }

    const handleForm = (e) => {
        e.preventDefault()

        const deposit = {
            name: e.target.name.value,
            ci: e.target.ci.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            operation: e.target.operation.value,
            account: e.target.account.value,
            bank: e.target.bank.value,
            type: e.target.type.value,
            operationDate: e.target.operationDate.value
        }

        console.log(deposit)
    }

    const Methods = () => {
        return <div className="card p-2">
            <h3> {defaultMethod?.methodName} </h3>
            <div className="flex-between-start">
                <div>
                    <div> {defaultMethod?.banco} </div>
                    <div> {defaultMethod?.cedula} </div>
                    <div> {defaultMethod?.cuenta} </div>
                    <div> {defaultMethod?.tipo} </div>
                    <div> {defaultMethod?.telefono} </div>
                    <div> {defaultMethod?.nombre} </div>
                    <div> {defaultMethod?.correo} </div>
                </div>
                <div>
                    <div> <img src={defaultMethod?.imageUrl} height={"70px"} alt="" />  </div>
                </div>
            </div>
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
            {actualMethods.length > 0 ? <>
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
                            <h4>Datos del {defaultMethod?.methodName}</h4>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                        <hr />
                        <div className="p-4">

                            {defaultMethod?.banco ? <>
                                <label htmlFor="bank">Nombre del Banco emisor</label>
                                <input type="text" name="bank" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Banco" />
                            </> : <input type="hidden" value="" name="bank" />}

                            {defaultMethod?.nombre ? <>
                                <label htmlFor="nombre">Nombre Completo de quien envia</label>
                                <input type="text" name="name" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                            </> : <input type="hidden" value="" name="name" />}

                            {defaultMethod?.cedula ? <>
                                <label htmlFor="cedula">Ingrese la cedula del que envia</label>
                                <input type="text" name="ci" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                            </> : <input type="hidden" value="" name="ci" />}

                            {defaultMethod?.correo ? <>
                                <label htmlFor="correo"> Ingrese el correo emisor</label>
                                <input type="text" name="email" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                            </> : <input type="hidden" value="" name="email" />}

                            {defaultMethod?.cuenta ? <>
                                <label htmlFor="cuenta">Numero de cuenta bancaria</label>
                                <input type="text" name="account" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                            </> : <input type="hidden" value="" name="account" />}

                            {defaultMethod?.tipo ? <>
                                <label htmlFor="type">Tipo de cuenta bancaria</label>
                                <input type="text" name="type" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                            </> : <input type="hidden" value="" name="type" />}

                            {defaultMethod?.telefono ? <>
                                <label htmlFor="telefono">Telefono emisor</label>
                                <input type="text" name="phone" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />
                            </> : <input type="hidden" value="" name="phone" />}

                            <label htmlFor=""> Numero de operacion </label>
                            <input type="text" name="operation" className="form-control bg-light-gray mb-4" required placeholder="Ingrese El Nombre" />

                            <div className="form-date">
                                <label htmlFor="operationDate" className="fecha-envio-labek">Fecha de envio</label>
                                <input type="date" name="operationDate" className="form-control bg-light-gray mb-4 mx-3" required placeholder="Ingrese El Nombre" />
                            </div>
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
            </> : <div className="text-center">
                <h3 className="py-4 bg-dark text-light rounded-3">No hay metodos de pagos</h3>
                <p>Por favor dirijase a la seccion de metodos de pago e ingrese sus <b> metodos de pago </b> </p>
            </div>}
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