import Guard from '../../../components/Guard'
import useLoadingStore from '../../../store/loadingStore'
import Spinner from '../../../components/spinner'
import { datos } from '../../../services/metodos.json'
import useMethods from '../../../hooks/useMethods'
import permisions from '../../../services/permissions'
import BancSelect from '../../../components/bancSelect/bancSelect'
import { Link } from 'react-router-dom'
const Metodos = () => {
    const { loading } = useLoadingStore()
    const { handleSelected, handleSelectedSecondary, sendForm, deleteMethod, itemType,
        methodName, setMethodName, selected, actualMethods, imageUrl, selectedSecondary,
        setImageUrl, handleInputs, textSecondary, tipoDeCambio, setTipoDeCambio, handleEditChangeType, saveChangeType, change } = useMethods()

    // 1 es el index del menu lateral
    if (permisions.permit(1)) return (
        <Guard >
            <div className='flex-between px-4 pt-3'>
                <h2> Metodos de pago </h2>
            </div>
            <hr />
            {loading ? <div className='text-center p-5 bg-gray-2 text-dark'>
                <div className='pb-3'> Cargando metodos de pago </div>
                <Spinner color={'black'} />
            </div> :
                <>
                    <div className='container mb-3 bg-gray-2 radius p-4 text-dark'>
                        <div className="row">
                            <div className="col-6">
                                <h4>Nombre del metodo</h4>
                                <input value={methodName} onChange={(e) => setMethodName(e.target.value)} type="text" className='form-control mb-3' placeholder='Ingrese el nombre del metodo de pago' />
                                <h4>Tipo de cambio</h4>
                                <input type="number" className='mb-3 form-control' step={0.01} value={tipoDeCambio} onChange={(e) => setTipoDeCambio(e.target.value)} id="" />
                                <div className="flex-between">
                                    <h4>Url de a imagen</h4>
                                    <a target='_blanc' href="https://es.imgbb.com/">subir en imgbb.com</a>
                                </div>
                                <input value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} type="text" name="imageUrl" className='form-control' id="" required />
                                <div className='container p-4'>
                                    <div className="row">
                                        {datos && datos.map((dato, index) => {
                                            return (<div key={index} className="form-check col-6">
                                                <input onChange={handleSelected} name={dato} className="form-check-input" type="checkbox" checked={selected.includes(dato)} id={"flexCheckDefault" + index} />
                                                <label className="form-check-label" htmlFor={"flexCheckDefault" + index}>
                                                    {dato}
                                                </label>
                                            </div>)
                                        })}
                                    </div>
                                </div>

                                <div>
                                    Diferenciador : <b> {selectedSecondary} </b>
                                    {selected && selected.map((dato, index) => {
                                        return (<div key={index} className="form-check col-6">
                                            <input onChange={() => handleSelectedSecondary(dato)} name={"radio_secondary"} className="form-check-input" type="radio" id={"flexCheckDefaultSec" + index} />
                                            <label className="form-check-label" htmlFor={"flexCheckDefaultSec" + index}>
                                                {dato}
                                            </label>
                                        </div>)
                                    })}
                                </div>
                            </div>
                            <div className="col-6">
                                <h4>{methodName}
                                    {textSecondary && `(${textSecondary})`} </h4>
                                <form onSubmit={sendForm}>
                                    {selected.length > 0 && selected.map((item, index) => {
                                        return <div className='col-12' key={index}>
                                            {item === "banco" ? <>
                                                Banco
                                                <BancSelect change={handleInputs} name={item} />
                                            </> :
                                                item === "tipo" ? <>
                                                    Tipo de cuenta
                                                    <select onChange={handleInputs} name={item} className='form-select' >
                                                        <option value="corriente"> Corriente </option>
                                                        <option value="ahorros"> Ahorros </option>
                                                    </select>
                                                </> :
                                                    <>
                                                        {item}
                                                        <input onChange={handleInputs} required type={itemType(item)} name={item} className='form-control' placeholder={`Ingrese ${item}`} />
                                                    </>
                                            }
                                        </div>
                                    })}
                                    <button className='btn btn-lg btn-success mt-4 w-100'> Guardar este Metodo de pago </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='text-end pb-2'>
                        <Link to='/dashboard/historialChanges' >
                            <button className='btn text-primary'> <i className='bi bi-list' /> Historial de tipos de cambio </button>
                        </Link>
                    </div>

                    <table className='table table-border' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Datos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {actualMethods && actualMethods.filter(i => !i.deleted).map((i, index) => {
                                return (<tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {i.methodName}
                                        <br />
                                        {i.secondary}
                                        <div>
                                            Tipo de cambio
                                        </div>
                                        <div>
                                            <input className='form-control mb-2' onChange={(e) => handleEditChangeType({ _id: i._id, tipoDeCambio: e.target.value })} type="number" step={0.01} defaultValue={i.tipoDeCambio} name="" id="" />
                                            {change._id === i._id &&
                                                <button onClick={saveChangeType} className='btn btn-primary mb-2'>Guardar</button>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <img width={"100px"} src={i.imageUrl} alt="" />
                                    </td>
                                    <td>
                                        <div> {i.correo && <> <b> Correo </b>{i.correo}</>} </div>
                                        <div> {i.cuenta && <> <b> Cuenta </b>{i.cuenta}</>} </div>
                                        <div> {i.tipo && <> <b> Tipo de cuenta </b>{i.tipo}</>} </div>
                                        <div> {i.telefono && <> <b> Telefono </b>{i.telefono}</>} </div>
                                        <div> {i.cedula && <> <b> Cedula </b>{i.cedula}</>} </div>
                                        <div> {i.banco && <> <b> Banco </b>{i.banco}</>} </div>
                                        <div> {i.nombre && <> <b> Nombre </b>{i.nombre}</>} </div>
                                        {/* <div> <b>userId:</b> {i.userId} </div>
                                        <div> <b>MethodId:</b> {i._id} </div> */}
                                    </td>
                                    <td>
                                        <button onClick={() => deleteMethod(i._id)} className='btn btn-danger'> - </button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </>}
        </Guard >
    )
}
export default Metodos