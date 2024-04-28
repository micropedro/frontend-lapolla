import farm from '../../../images/granja.png'
import lotto from '../../../images/lotto.png'
import roulette from '../../../images/roulette.png'
import style from './itemsRoulettes.module.css'

const ItemsRoulettes = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className=" mt-3 col-12 col-md-4 flex-center p-3">
                    <img width={"100%"} src={farm} alt="Imagen 1" />
                </div>
                <div className=" mt-3 col-12 col-md-4 d-flex flex-center p-5">
                    <img width={"100%"} src={lotto} alt="Imagen 2" />
                </div>
                <div className=" mt-3 col-12 col-md-4 d-flex flex-center ">
                    <img width={"100%"} src={roulette} alt="Imagen 3" />
                </div>
            </div>
            <div className="row mt-5 pt-5 text-center d-flex justify-content-center">
                <div className='col-md-12 col-lg-6 '>
                    <div className='d-flex'>
                        <button className={`${style.btnRegister} btn btn-primary form-control mx-2`}>Registrarse</button>
                        <button className={`${style.btnLogin} btn btn-secondary form-control mx-2`}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsRoulettes;