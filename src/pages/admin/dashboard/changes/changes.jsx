import useHistorialChanges from "./useHistorialChanges"
import formatDate,{getTime2} from '../../../../services/formatDate'
const HistorialChanges = () => {

    const { changes } = useHistorialChanges()

    return (
        <div className="p-2">
            <h2>Historial de cambios</h2>
            <hr />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th> fecha </th>
                            <th> Metodo </th>
                            <th> Cambiado por </th>
                            <th> Valor anterior </th>
                            <th> Nuevo valor </th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {changes.length && changes.map((change, index) => {
                            return (<tr key={index}>
                                <td>{formatDate(change.date)} -  {getTime2(change.date)} </td>
                                <td>{change.method?.methodName}</td>
                                <td>{change.user.name}</td>
                                <td>{change.later}</td>
                                <td>{change.current}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistorialChanges