import Guard from '../../../components/Guard'
import useLoadingStore from '../../../store/loadingStore'
import Spinner from '../../../components/spinner'
import { datos } from '../../../services/metodos.json'
import useMethods from '../../../hooks/useMethods'
const Metodos = () => {

    const { loading } = useLoadingStore()
    const { handleSelected, sendForm, deleteMethod, itemType,
        methodName, setMethodName, selected, actualMethods, imageUrl,
        setImageUrl } = useMethods()

    return (
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
                    <table className='table table-border' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Datos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {actualMethods && actualMethods.map((i, index) => {
                                return (<tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{i.methodName}</td>
                                    <td>
                                        <div> {i.correo && <> <b> Correo </b>{i.correo}</>} </div>
                                        <div> {i.cuenta && <> <b> cuenta </b>{i.cuenta}</>} </div>
                                        <div> {i.tipo && <> <b> tipo </b>{i.tipo}</>} </div>
                                        <div> {i.telefono && <> <b> telefono </b>{i.telefono}</>} </div>
                                        <div> {i.cedula && <> <b> cedula </b>{i.cedula}</>} </div>
                                        <div> {i.banco && <> <b> banco </b>{i.banco}</>} </div>
                                        <div> {i.nombre && <> <b> nombre </b>{i.nombre}</>} </div>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteMethod(i._id)} className='btn btn-danger'> - </button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div>
                    </div>
                    <div className='container mb-5 bg-gray-2 radius p-4 text-dark'>
                        <div className="row">
                            <div className="col-6">
                                <h4>Nombre del metodo</h4>
                                <input value={methodName} onChange={(e) => setMethodName(e.target.value)} type="text" className='form-control mb-3' placeholder='Ingrese el nombre del metodo de pago' />
                                <h4>Url de a imagen</h4>
                                <input value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} type="text" name="imageUrl" className='form-control' id="" required />
                                <div className='container p-4'>
                                    <div className="row">
                                        {datos && datos.map((dato, index) => {
                                            return (<div key={index} className="form-check col-6">
                                                <input onChange={handleSelected} name={dato} className="form-check-input" type="checkbox" checked={selected.includes(dato)} id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    {dato}
                                                </label>
                                            </div>)
                                        })}
                                    </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <h4>{methodName}</h4>
                                <form onSubmit={sendForm}>
                                    {selected.length > 0 && selected.map((item, index) => {
                                        return <div className='col-12' key={index}>
                                            {item}
                                            <input required type={itemType(item)} name={item} className='form-control' placeholder={`Ingrese ${item}`} />
                                        </div>
                                    })}
                                    <button className='btn btn-lg btn-success mt-4 w-100'> Guardar este Metodo de pago </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>}
        </Guard >
    )
}
export default Metodos