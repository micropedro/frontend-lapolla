import farm from '@/images/granja.png'
import lotto from '@/images/lotto.png'
import roulette from '@/images/roulette.png'
import style from './itemsRoulettes.module.css'

const  styles = {
    width: '100%',
    maxWidth: '200px'
}

const ItemsRoulettes = () => {
    return (
        <div className="container m-5 p-5">
            <div className="row justify-content-evenly">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img style={styles} src={farm} alt="Imagen 1" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img style={styles} src={lotto} alt="Imagen 2" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img  style={{ width: "100%", maxWidth:'300px' }} src={roulette} alt="Imagen 3" />
                </div>
            </div>
            <div className="row mt-5 pt-5">
                <div className="col-md-6 text-end">
                    <button style={{ width: '200px' }} className={`${style.btnRegister} btn btn-primary`}>Registrarse</button>
                </div>
                <div className="col-md-6">
                    <button style={{ width: '200px' }} className={`${style.btnLogin} btn btn-secondary`}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default ItemsRoulettes;