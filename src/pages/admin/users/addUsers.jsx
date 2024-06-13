import useAddUsers from "../../../hooks/useAddUser"
import permisions from "../../../services/permissions"
import useUserStore from "../../../store/userStore"

const AddUsers = () => {
    const { user } = useUserStore()
    const { sendUserForm } = useAddUsers()
    if (permisions.addUser.includes(permisions.getUser().level)) return (<>
        <div className='px-4 pt-3'>
            <h2 className="h2-plain" > Agregar Nuevo Usuario </h2>
        </div>
        <hr />
        <div>
            <form onSubmit={(e) => sendUserForm(e)}>
                <table className="table">
                    <tbody>

                        <tr>
                            <td>Nombre</td>
                            <td>
                                <input name="name" required type="text" className="form-control" placeholder="Ingrese el nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td>Correo</td>
                            <td> <input name="email" required type="email" className="form-control" placeholder="Ingrese el correo" /> </td>
                        </tr>
                        <tr>
                            <td>Telefono</td>
                            <td> <input name="phone" required type="text" className="form-control" placeholder="Ingrese el telefono" /> </td>
                        </tr>
                        <tr>
                            <td>Contraseña</td>
                            <td> <input minLength={6} name="password" required type="text" className="form-control" placeholder="Ingrese la contraseña" /> </td>
                        </tr>
                        <tr>
                            <td>Tipo de usuario</td>
                            <td>
                                <select defaultValue={99} name='level' style={{ color: "gray" }} className="form-select" >
                                    <option value={99} style={{ color: "black" }}>Elija un tipo de usuario</option>
                                    {/* 1 master, 2 admin, 3 grupero, 4 agencia, 5 cliente */}
                                    {user.level === 1 && <option value={2}>Administrador</option>}
                                    {[1, 2].includes(user.level) && <option value={3}>Grupero</option>}
                                    {[1, 2, 3].includes(user.level) && <option value={4}>Agencia</option>}
                                    {user.level === 1 && <option value={5}>Cliente</option>}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Cedula</td>
                            <td> <input name="ci" required type="text" className="form-control" placeholder="Ingrese el cedula" /> </td>
                        </tr>
                        <tr>
                            <td className="pt-5"></td>
                            <td className="pt-5 text-end">
                                <button className="btn btn-success bg-success text-light px-5">Guardar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" name="admin" value={user._id} />
            </form>





        </div>
    </>
    )
}

export default AddUsers