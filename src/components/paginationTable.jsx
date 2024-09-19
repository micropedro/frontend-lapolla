import usePagination from '../hooks/usePagination'
import { Table, Pagination, Form, Spinner } from 'react-bootstrap';
import useEditUserStore from '../store/editUserStore'
import { userType } from '../services/utils'
import { Link } from 'react-router-dom'
import useLoadingStore from '../store/loadingStore';
/* import useReportUser from '../store/reportUserStore'; */
const PaginationTable = ({ users, handleSortSaldo, sortSaldo }) => {
    //deleteModal
    /* const { setReportUser } = useReportUser() */
    const { loading } = useLoadingStore()
    const { setEditUser } = useEditUserStore()
    const { totalPages, currentPage, itemsPerPage, currentItems, prevPage, setCurrentPage, nextPage, handleItemsPerPageChange } = usePagination(users)

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Tipo</th>
                        <th>Cedula</th>
                        <th>
                            <div className='sortSaldo'>
                                Saldo
                                {sortSaldo ?
                                    <button onClick={handleSortSaldo} className='mx-1 btn btn-danger btn-sm lh-1'> ↑ ASC </button>
                                    :
                                    <button onClick={handleSortSaldo} className='mx-1 btn btn-success btn-sm lh-1'> ↓  DES</button>
                                }
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <tr className='text-center p-5 w-100'>
                        <td colSpan={8} className='p-5'>
                            <Spinner color={'black'} />
                        </td>
                    </tr>
                        : currentItems.length > 0 ? currentItems.map((item, index) => (
                            <tr key={index}>
                                <td> {index} </td>
                                <td >
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>{item.phone}</td>
                                <td>{userType(item.level)}</td>
                                <td>{item.ci}</td>
                                <td className={item.balance < 0 ? 'text-danger' : 'text-success'}>
                                    Bs.{item.balance.toFixed(2)}
                                </td>
                                <td>
                                    <Link to={`/dashboard/editUser/${item._id}`} >
                                        <button onClick={() => setEditUser(item)} className='btn btn-warning mx-1'> <i className='bi bi-card-text' /> </button>
                                    </Link>

                                    {/* <Link to={`/dashboard/percentTree/${item._id}`} >
                                        <button className='btn btn-success mx-1'> <i className='bi bi-percent' /> </button>
                                    </Link> */}


                                    {/* <button onClick={() => deleteModal(item)} className='btn btn-danger mx-1'> <i className='bi bi-dash-square' />   </button>
                                    <Link to='/dashboard/reportuser'>
                                        <button onClick={() => setReportUser(item)} className='btn btn-success mx-1'> <i className='bi bi-list' /> </button>
                                    </Link> */}
                                </td>
                            </tr>
                        )) : <tr className='text-center p-5 w-100'>
                            <td colSpan={8} className='p-5'>
                                No se encontraron registros!
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>

            <Pagination>
                <Pagination.Prev onClick={prevPage} disabled={currentPage === 1} />
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={nextPage} disabled={currentPage === totalPages} />
                <Form.Control style={{ width: '50px' }} as="select" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </Form.Control>
            </Pagination>
        </div >
    );
};

export default PaginationTable;