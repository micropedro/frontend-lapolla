
import Guard from '../../../components/Guard'
import useUsers from '../../../hooks/useUsers'
import DeleteUserModal from '../../../components/modals/deleteUserModal'
import { Link } from 'react-router-dom'

import useLoadingStore from '../../../store/loadingStore'
import Spinner from '../../../components/spinner'
import PaginationTable from '../../../components/paginationTable'



const Users = () => {

    const { loading } = useLoadingStore()
    const { users, deleteModal, _findUserByCi,getUsers } = useUsers()

    return (<Guard >
        <DeleteUserModal />
        <div className='flex-between px-4 pt-3'>
            <h2> Administracion de usuarios</h2>
            <Link to='/dashboard/addUsers'>
                <button className='btn btn-primary'> <i className='bi bi-person-plus' /> </button>
            </Link>
        </div>
        <hr />

        {loading ? <div className='text-center p-5'>
            <Spinner color={'black'} />
        </div> : <>
            <div className='flex-between mb-3'>
                <button onClick={getUsers} className='btn btn-primary'> Cargar todos </button>
                <form onSubmit={(e) => _findUserByCi(e)}>
                    <input name='ci' type="text" className='input-buscar' placeholder='cedula' required />
                    <button className='btn-buscar bg-primary text-light'> Buscar </button>
                </form>
            </div>
            <PaginationTable users={users} deleteModal={deleteModal} />
        </>}
    </Guard>
    )
}

export default Users