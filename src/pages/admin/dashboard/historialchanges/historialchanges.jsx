import useHistorialChanges from "./useHistorialChanges"
const HistorialChanges = () => {

    const { changes } = useHistorialChanges()

    return (
        <div className="p-2">
            <h2 className="h2-plain" >Historial de cambios</h2>
            <hr />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th> fecha </th>
                            <th> Nombre </th>
                            <th> Cambiado por </th>
                            <th> Valor anterior </th>
                            <th> Nuevo valor </th>
                        </tr>
                    </thead>
                    <tbody>
                        {changes?.length && changes.map((change, index) => {
                            return (<tr key={index}>
                                <td>{change._id}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistorialChanges