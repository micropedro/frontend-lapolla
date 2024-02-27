import useAddUsers from "../../hooks/useAddUser"
const AddUsers = () => {
    const {sendUserForm} = useAddUsers()
    return (<>
        <div className='px-4 pt-3'>
            <h2> Agregar Nuevo Usuario </h2>
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
                        <td> <input name="password" required type="text" className="form-control" placeholder="Ingrese la contraseña" /> </td>
                    </tr>
                    <tr>
                        <td>Tipo de usuario</td>
                        <td>
                            <select defaultValue={99} name='level' style={{ color: "gray" }} className="form-select" >
                                <option value={99} style={{ color: "black" }}>Elija un tipo de usuario</option>
                                <option value={1}>Cliente</option>
                                <option value={2}>Loteria</option>
                                <option value={3}> Administrador</option>
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
            </form>





        </div>
    </>
    )
}

export default AddUsers