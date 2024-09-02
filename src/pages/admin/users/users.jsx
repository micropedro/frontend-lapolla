
import Guard from '../../../components/Guard'
import useUsers from '../../../hooks/useUsers'
import DeleteUserModal from '../../../components/modals/deleteUserModal'
import { Link } from 'react-router-dom'
import PaginationTable from '../../../components/paginationTable'
import permisions from '../../../services/permissions'

const Users = () => {

    const { deleteModal, _findUserByCi, handleSortSaldo,sortSaldo, filterUsersFinded, filterduser, getUsers, filterUser,fiteredBtn,setFiteredBtn } = useUsers()

    if (permisions.permit(0)) return (<Guard >
        <DeleteUserModal />
        <div className='flex-between px-4 pt-3'>
            <h2 className="h2-plain" > Administracion de usuarios</h2>
            <Link to='/dashboard/addUsers'>
                <button className='btn btn-primary'> <i className='bi bi-person-plus' /> </button>
            </Link>
        </div>
        <hr />
        <div className='flex-between mb-3'>
            <button onClick={()=>{getUsers();setFiteredBtn(0)}} className='btn btn-primary'> Cargar todos </button>

            {permisions.userBtnAdmin.includes(permisions.getUser().level) && <button onClick={() => { filterUser(2); setFiteredBtn(1)}} className={`btn ${fiteredBtn === 1 && `btn-warning`}`}> Administradores </button>}
            {permisions.userBtnGroup.includes(permisions.getUser().level) && <button onClick={() => { filterUser(3); setFiteredBtn(2)}} className={`btn ${fiteredBtn === 2 && `btn-warning`}`}> Gruperos </button>}
            {permisions.userBtnAgencia.includes(permisions.getUser().level) && <button onClick={() => { filterUser(4); setFiteredBtn(3)}} className={`btn ${fiteredBtn === 3 && `btn-warning`}`}> Agencias </button>}
            {permisions.userBtnClient.includes(permisions.getUser().level) && <button onClick={() => { filterUser(5); setFiteredBtn(4)}} className={`btn ${fiteredBtn === 4 && `btn-warning`}`}> Clientes </button>}

            <form onSubmit={(e) => _findUserByCi(e)}>
                <input onChange={(e) => filterUsersFinded(e.target.value)} name='ci' type="text" className='input-buscar' placeholder='cedula o nombre' required />
                <button className='btn-buscar bg-primary text-light'> Buscar </button>
            </form>
        </div>
        <PaginationTable users={filterduser} deleteModal={deleteModal} handleSortSaldo={handleSortSaldo} sortSaldo={sortSaldo} />

    </Guard>
    )
}

export default Users