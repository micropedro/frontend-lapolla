import Guard from "../../../../components/Guard";

const Recargas = () => {
    return (
        <Guard>
            <div>
                <div className='flex-between px-4 pt-3'>
                    <h2> Recargas </h2>
                    <div>
                        
                        <input type="text" className="form-control" placeholder="Ingrese la cedula" />
                    </div>
                </div>
                <hr />
            </div>
        </Guard>
    )
}

export default Recargas