import useEditUser from "../../../hooks/useEditUser"
import useEditUserStore from "../../../store/editUserStore"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from '../../../components/spinner'
import useUserStore from "../../../store/userStore"
import permisions from "../../../services/permissions"
import Form from 'react-bootstrap/Form';
import useBlock from "../../../hooks/useBlock"
const EditUser = () => {
    const { user } = useUserStore()
    const { loading } = useLoadingStore()
    const { editUser } = useEditUserStore()
    const { sendUserForm } = useEditUser()
    const { block, handleBlock, load } = useBlock()

    if (permisions.editUser.includes(permisions.getUser().level)) return (<>
        {load && (<div className='bg-modal'><Spinner /></div>)}
        <div className='px-4 pt-3'>
            <h2> Editando usuario </h2>
        </div>
        <hr />
        <div>
            <form onSubmit={(e) => sendUserForm(e)}>
                <input type="hidden" disabled name="_id" value={editUser._id} />
                <table className="table table-striped">
                    <tbody>
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
                            <td>Tipo de usuario</td>
                            <td>
                                <select defaultValue={editUser.level} name='level' style={{ color: "gray" }} className="form-select" >
                                    <option value={99} style={{ color: "black" }}>Elija un tipo de usuario</option>

                                    {user.level === 1 && <option value={2}>Administrador</option>}
                                    {[1, 2].includes(user.level) && <option value={3}>Grupero</option>}
                                    {[1, 2, 3].includes(user.level) && <option value={4}>Agencia</option>}
                                    {user.level === 1 && <option value={5}>Cliente</option>}

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Administrador</td>
                            <td>
                                {/*  {user.admin || <span className="text-danger">Sin administrador</span>} */}
                                {editUser?.admin?.name || "No posee"}
                                <input defaultValue={editUser?.admin?._id} name="admin" type="text" className="form-control" placeholder="Ingrese el id del administrador" />
                            </td>
                        </tr>
                        <tr>
                            <td>Grupero</td>
                            <td>
                                {editUser?.grupero?.name || "No posee"}
                                <input defaultValue={editUser?.grupero?._id} name="grupero" type="text" className="form-control" placeholder="Ingrese el id del grupero" />
                                {/*  {user.grupero || <span className="text-danger">Sin grupero</span>}  */}
                            </td>
                        </tr>
                        <tr>
                            <td>Porcentaje</td>
                            <td>
                                <input defaultValue={editUser.percent} name="percent" type="number" className="form-control" placeholder="Ingrese el id del grupero" />
                            </td>
                        </tr>
                        <tr>
                            <td>Balance</td>
                            <td> {editUser.balance} </td>
                        </tr>
                        <tr>
                            <td>Bloqueado</td>
                            <td> <Form.Check
                                type="switch"
                                id="custom-switch"
                                label={ block ? "Desbloquear usuario" :  "Bloquear usuario"}
                                checked={editUser.block}
                                onChange={handleBlock}
                            /> </td>
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