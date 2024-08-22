import BancSelect from "../components/bancSelect/bancSelect"
import useWinnerTicket from "../hooks/useWinnerTicket"

const WinnerForm = ({ticket}) => {
    const { handleForm } = useWinnerTicket()
    return (
        <form onSubmit={(e)=>handleForm(e,ticket)}>
            <div className="card mt-2 p-3 text-start">
                <label htmlFor="">Nombre Completo</label>
                <input required placeholder="Ingrese el nombre completo" className="mb-3 form-control" type="text" name="name" />
                <label htmlFor="">Cedula de identidad</label>
                <input required placeholder="Cedula de identidad" className="mb-3 form-control" type="number" min={0} step={1} name="ci" id="" />
                <label htmlFor="">Banco</label>
                <BancSelect name={"bank"} />
                <label htmlFor="">Telefono</label>
                <input required placeholder="telefono" className="mb-3 form-control" type="text" name="phone" id="" />
                <label htmlFor="">Numero de cuenta</label>
                <input required placeholder="numero de cuenta" className="mb-3 form-control" type="text" name="cuenta" id="" />
                <label htmlFor="">Tipo de cuenta</label>
                <select className="form-select" name="type">
                    <option value="Ahorros">Ahorros</option>
                    <option value="Corriente">Corriente</option>
                </select>

                <div className="mt-4">
                    <button className="btn btn-primary w-100"> Enviar </button>
                </div>
            </div>
        </form>
    )
}

export default WinnerForm