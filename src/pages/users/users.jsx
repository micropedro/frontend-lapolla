
import Guard from '../../components/Guard'
import useUsers from '../../hooks/useUsers'
import DeleteUserModal from '../../components/modals/deleteUserModal'
import { Link } from 'react-router-dom'
import useEditUserStore from '../../store/editUserStore'
import useLoadingStore from '../../store/loadingStore'
import Spinner from '../../components/spiner'
const Users = () => {
    const { loading } = useLoadingStore()
    const { setEditUser } = useEditUserStore()
    const { users, deleteModal } = useUsers()
    return (<Guard >
        <DeleteUserModal />
        <div className='flex-between px-4 pt-3'>
            <h2> Administracion de usuarios </h2>
            <Link to='/dashboard/addUsers'>
                <button className='btn btn-primary'> <i className='bi bi-person-plus' /> </button>
            </Link>
        </div>
        <hr />

        {loading ? <div className='text-center p-5'>
            <Spinner color={'black'} />
        </div> : <>
            <table className='table table-border' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Tipo</th>
                        <th>Cedula</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user, index) => {
                        return (<tr key={index}>
                            <td> {index} </td>
                            <td >
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>{user.phone}</td>
                            <td>{user.level}</td>
                            <td>{user.ci}</td>
                            <td>
                                <Link to="/dashboard/editUser" >
                                    <button onClick={() => setEditUser(user)} className='btn btn-warning mx-1'> <i className='bi bi-card-text' /> </button>
                                </Link>
                                <button onClick={() => deleteModal(user)} className='btn btn-danger mx-1'> <i className='bi bi-dash-square' />   </button>
                                <button className='btn btn-success mx-1'> <i className='bi bi-database' />  </button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </>}
    </Guard>
    )
}
export default Users