const ItemsRoulettes = () => {
    return (
        <div className="container m-5">
            <div className="row justify-content-evenly">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="https://via.placeholder.com/150" alt="Imagen 1" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="https://via.placeholder.com/150" alt="Imagen 2" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="https://via.placeholder.com/150" alt="Imagen 3" />
                </div>
            </div>
            <div className="row mt-3 ">
                <div className="col-md-6 text-end">
                    <button style={{ width: '200px' }} className="btn btn-primary">Registrarse</button>
                </div>
                <div className="col-md-6">
                    <button style={{ width: '200px' }} className="btn btn-secondary">Login</button>
                </div>
            </div>
        </div>
    );
}

export default ItemsRoulettes;