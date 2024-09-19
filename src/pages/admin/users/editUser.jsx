import useEditUser from "../../../hooks/useEditUser"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from '../../../components/spinner'
import useUserStore from "../../../store/userStore"
import permisions from "../../../services/permissions"
import Form from 'react-bootstrap/Form';
import useBlock from "../../../hooks/useBlock"
import usePrePaid from "../../../hooks/usePrePaid"
import Badge from 'react-bootstrap/Badge';

const EditUser = () => {

    const { user } = useUserStore()
    const { loading } = useLoadingStore()
    const { handleBlock } = useBlock()
    const { handlePrePaid } = usePrePaid()
    const { sendUserForm, editUser, percentAdmin, handlePercent, userType } = useEditUser()

    if (permisions.editUser.includes(permisions.getUser().level)) return (<>
        {loading && (<div className='bg-modal'><Spinner /></div>)}
        <div className='px-4 pt-3'>
            <h2 className="h2-plain" > Editando usuario </h2>
        </div>
        <hr />
        <div>
            <form onSubmit={(e) => sendUserForm(e)}>
                <input type="hidden" disabled name="_id" value={editUser._id} />
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>Tipo de usuario</td>
                            {editUser.level === 1 ? <>
                                <h5>Master</h5>
                                <input type="hidden" name="level" value={editUser.level} />
                            </>
                                :
                                <td>
                                    <h4 className="bg-gray p-2">{userType[editUser.level]}</h4 >
                                    <input type="hidden" name="level" value={editUser.level} />
                                    {/* <select onChange={handleUserType} value={editUser.level} name='level' style={{ color: "gray" }} className="form-select" >
                                        <option value={99} style={{ color: "black" }}>Elija un tipo de usuario</option>

                                        {user.level === 1 && <option value={2}>Administrador</option>}
                                        {[1, 2].includes(user.level) && <option value={3}>Grupero</option>}
                                        {[1, 2, 3].includes(user.level) && <option value={4}>Agencia</option>}
                                        {user.level === 1 && <option value={5}>Cliente</option>}
                                    </select> */}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td> {editUser._id} </td>
                        </tr>
                        <tr>
                            <td>Nombre</td>
                            <td>
                                <input defaultValue={editUser.name} name="name" required type="text" className="form-control" placeholder="Ingrese el nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td>Cedula</td>
                            <td> <input defaultValue={editUser.ci} name="ci" required type="text" className="form-control" placeholder="Ingrese el cedula" /> </td>
                        </tr>
                        <tr>
                            <td>Correo</td>
                            <td> <input defaultValue={editUser.email} name="email" required type="email" className="form-control" placeholder="Ingrese el correo" /> </td>
                        </tr>
                        <tr>
                            <td>Telefono</td>
                            <td> <input defaultValue={editUser.phone} name="phone" required type="text" className="form-control" placeholder="Ingrese el telefono" /> </td>
                        </tr>

                        <tr>
                            <td>Administrador</td>
                            <td>
                                {/*  {user.admin || <span className="text-danger">Sin administrador</span>} */}
                                {editUser?.admin?.name || "No posee"}
                                {editUser.level !== 1 ?
                                    <input defaultValue={editUser?.admin?._id} name="admin" type="text" className="form-control" placeholder="Ingrese el id del administrador" />
                                    :
                                    <input defaultValue={editUser?.admin?._id} name="admin" type="hidden" className="form-control" placeholder="" />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Grupero</td>
                            <td>
                                {editUser?.grupero?.name || "No posee"}
                                {editUser.level !== 1 ?
                                    <input defaultValue={editUser?.grupero?._id} name="grupero" type="text" className="form-control" placeholder="Ingrese el id del grupero" />
                                    :
                                    <input defaultValue={editUser?.grupero?._id} name="grupero" type="hidden" className="form-control" placeholder="" disabled />
                                }
                                {/*  {user.grupero || <span className="text-danger">Sin grupero</span>}  */}
                            </td>
                        </tr>
                        <tr>
                            <td>Porcentaje</td>
                            <td className="bg-warning flex-around">
                                {editUser.level !== 1 ? <>
                                    <div className="">
                                        <div className="mb-2"> Tu porcentaje {user.percent} %</div>

                                        <h3>Resta: {user.percent - percentAdmin} % </h3>
                                        {/* <div className="flex-between gap-1">
                                            <a onClick={() => handlePercent("+")} className="btn btn-success rounded"> - </a>
                                            <input value={user.percent} name="tuPercent" type="number" disabled className="form-control" placeholder="Ingrese el id del grupero" />
                                            <a onClick={() => handlePercent("-")} className="btn btn-success rounded"> + </a>
                                        </div> */}
                                    </div>
                                    <div>
                                        <div className="mb-2"> Porcentaje {editUser.name}</div>
                                        <div className="flex-between gap-1">
                                            <a onClick={() => handlePercent("-")} className="btn btn-success rounded"> - </a>
                                            <input value={percentAdmin} name="percent" type="number" className="form-control" disabled placeholder="Ingrese el id del grupero" />
                                            <a onClick={() => handlePercent("+")} className="btn btn-success rounded"> + </a>
                                        </div>
                                    </div>
                                </> : <h3>
                                    {editUser.percent} %
                                    <input value={percentAdmin} name="percent" type="hidden" disabled />

                                </h3>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Balance</td>
                            <td> {editUser.balance} </td>
                        </tr>
                        <tr>
                            <td>Status de usuario</td>
                            <td>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label={editUser.block ? "Desbloquear usuario" : "Bloquear usuario"}
                                        checked={editUser?.block || false}
                                        onChange={handleBlock}
                                    />
                                    {editUser.block ? <Badge bg="danger">Usuario bloquedo</Badge> : <Badge bg="success">Usuario Activo</Badge>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Venta sin saldo</td>
                            <td>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch-prepaid"
                                        label={editUser.prepaid ? "Activar" : "Desactivar"}
                                        checked={!editUser?.prepaid}
                                        onChange={handlePrePaid}
                                    />
                                    {editUser?.prepaid ? <Badge bg="danger">desactivadas las ventas sin saldo</Badge> : <Badge bg="success">ventas sin saldo activas</Badge>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pt-5"></td>
                            <td className="pt-5 text-end">
                                {loading ? <div className="btn btn-success bg-success text-light px-5">
                                    <Spinner />
                                </div> : <button className="btn btn-success bg-success text-light px-5">Guardar</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </>
    )
}

export default EditUser