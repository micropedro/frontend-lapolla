const Support = () => {
    return (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <div className="col-12">
                    <h2 className="text-warning">Soporte</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card p-3 bg-dark-blue gap-3">
                        <h3>
                            En el siguiente formulario podras abrir un ticket de Soporte
                        </h3>
                        <span> Si tienes alguna duda o problema podras comunicarte con nuestro equipo de soporte a traves del siguiente formulario, recuerda dejar una forma de comunicacion directa si se necesita para agilizar el proceso </span>
                        <div className="text-end">
                            <textarea rows={4} className="form-control mb-3"></textarea>
                            <button className="btn btn-success" > Enviar Ticket </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Support