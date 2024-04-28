/* import Card from '../../../components/Card' */
import styles from './next.module.css'

const quiniela =
    [
        {
            nombre: "Mini Quiniela",
            asiertos: "3 animalitos",
            duracion: "4",
            hora: "09:00 aM",
            fecha: "7 Septiembre",
            btnText: "Jugar Mini Quiniela"
        },
        {
            nombre: "Gran Quiniela",
            asiertos: "6 animalitos",
            hora: "09:00 aM",
            duracion: "24",
            fecha: "7 Septiembre",
            btnText: "Jugar Gran Quiniela"
        },

    ]


const NextQuiniela = () => {
    return (<div className='container-fluid'>
        <div className="row text-light text-center">
            <div className="col-12">
                <h2 className='pt-5 pb-3'>Proximas Quinielas</h2>
            </div>
        </div>
        <div className="row">
            {quiniela.map((item, index) => {
                return (<div key={index} className="col-12 col-md-6 p-1 text-center">
                    <div className={`card bg-card text-white p-4 ${styles.cardQuiniela}`}>
                        <p>{item.nombre}</p>
                        <p>{item.asiertos}</p>
                        <div className={`${styles.hoursMini} p-3`}>Duracion {item.duracion}H</div>
                        <p>{item.fecha}</p>
                        <p>{item.hora}</p>
                        <div className='d-grid p-4'>
                            <button type="button" className={`${styles.btnQuiniela} btn btn-primary`}>
                                <i className="bi bi-caret-right-fill mx-2" />{item.btnText}
                            </button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div >)
}

export default NextQuiniela