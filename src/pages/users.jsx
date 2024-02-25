
import Guard from '../components/Guard'
import useUsers from '../hooks/useUsers'
import DeleteUserModal from '../components/modals/deleteUserModal'
const Users = () => {
    const { users, deleteModal } = useUsers()
    return (<Guard >
        <DeleteUserModal />
        <h2> Administracion de usuarios </h2>
        <hr />
        <table className='table table-border' >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Tipo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(({ _id, name, email, phone, level }, index) => {
                    return (<tr key={index}>
                        <td> {index} </td>
                        <td >
                            {name}
                        </td>
                        <td>
                            {email}
                        </td>
                        <td>{phone}</td>
                        <td>{level}</td>
                        <td>
                            <button className='btn btn-warning mx-1'> <i className='bi bi-card-text' /> </button>
                            <button onClick={() => deleteModal({ _id, name, email, phone, level })} className='btn btn-danger mx-1'> <i className='bi bi-dash-square' />   </button>
                            <button className='btn btn-success mx-1'> <i className='bi bi-database' />  </button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>

        </table>
    </Guard>
    )
}
export default Users