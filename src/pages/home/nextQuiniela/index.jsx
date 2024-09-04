/* import Card from '../../../components/Card' */
import { Link } from 'react-router-dom'
import styles from './next.module.css'
import { useEffect, useState } from 'react'
import { getTimeUntil, quiniela } from './utils';

const getFalta = (hora, tipo) => {
    const timeUntil = getTimeUntil(hora, 0, 0);
    return <span>Faltan: <span className="sec"> {timeUntil.hours} </span> horas, <span className='sec'> {timeUntil.minutes} </span> minutos y <span className="sec">{timeUntil.seconds}</span> segundos para la proxima {tipo} Quiniela </span>
}

const NextQuiniela = () => {

    const [miniText, setMiniText] = useState("Faltan 0 horas, 0 minutos y 0 segundos para la proxima Mini Quiniela")
    const [granText, setGranText] = useState("Faltan 0 horas, 0 minutos y 0 segundos para la proxima Gran Quiniela")
    const obtenerTexto = () => { setMiniText(getFalta(15, "Mini")); setGranText(getFalta(10, "Gran")) }
    const calcFalta = () => { setInterval(() => { obtenerTexto() }, 1000) }
    useEffect(() => { calcFalta() }, [])

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
                        <div>{item.type == 'mini' ? miniText : granText}</div>
                        <p>{item.hora}</p>
                        <div className='d-grid p-4'>
                            <Link className='deafult-link text-light' to={'/' + item.type}>
                                <button type="button" className={`${styles.btnQuiniela} btn btn-primary`}>
                                    <i className="bi bi-caret-right-fill mx-2" />{item.btnText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div >)
}

export default NextQuiniela


