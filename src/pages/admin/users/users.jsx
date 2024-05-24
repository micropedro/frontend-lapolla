
import Guard from '../../../components/Guard'
import useUsers from '../../../hooks/useUsers'
import DeleteUserModal from '../../../components/modals/deleteUserModal'
import { Link } from 'react-router-dom'
import PaginationTable from '../../../components/paginationTable'

const Users = () => {

    const { users, deleteModal, _findUserByCi, getUsers, filterUser } = useUsers()

    return (<Guard >
        <DeleteUserModal />
        <div className='flex-between px-4 pt-3'>
            <h2> Administracion de usuarios</h2>
            <Link to='/dashboard/addUsers'>
                <button className='btn btn-primary'> <i className='bi bi-person-plus' /> </button>
            </Link>
        </div>
        <hr />
        <div className='flex-between mb-3'>
            <button onClick={getUsers} className='btn btn-primary'> Cargar todos </button>
            <button onClick={() => filterUser(2)} className='btn btn-warning'> Administradores </button>
            <button onClick={() => filterUser(3)} className='btn btn-warning'> Gruperos </button>
            <button onClick={() => filterUser(4)} className='btn btn-warning'> Agencias </button>
            <button onClick={() => filterUser(5)} className='btn btn-warning'> Clientes </button>
            <form onSubmit={(e) => _findUserByCi(e)}>
                <input name='ci' type="text" className='input-buscar' placeholder='cedula' required />
                <button className='btn-buscar bg-primary text-light'> Buscar </button>
            </form>
        </div>
        <PaginationTable users={users} deleteModal={deleteModal} />

    </Guard>
    )
}

export default Users