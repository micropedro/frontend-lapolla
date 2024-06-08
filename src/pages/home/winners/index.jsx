/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from './winners.module.css'
import useQuinielas from '../../../hooks/useQuinielas'
import { formatDate2 } from '../../../services/formatDate'

const Winners = () => {

    const { quinielas } = useQuinielas()

    return (<>
        <div className='mt-5'>
            <h2 className='text-warning text-center'>Ganadores</h2>
        </div>
        <div className="">
            {quinielas.map( q => (
                <WinnerDetails key={q._id} quiniela={q} />
            ))}
            <Link to="/lobby" className='' >
                <button type="button" className="btn btn-primary w-100 mt-4">
                    <i className="bi bi-caret-right-fill mx-2" />
                    Jugar Ahora
                </button>
            </Link>
        </div>


    </>)
}

const WinnerDetails = ({ quiniela }) => {
    return (
        <div className={`${styles.card} card mb-1 p-2`}>
            <div className='d-flex justify-content-between'>
                <p className={styles.cardP}>{quiniela?.tipoQuiniela === 1 ? "Gran Quiniela" : "Mini Quiniela"}</p>
                <p className={styles.cardP}>{formatDate2(quiniela?.fechaQuiniela)}</p>
            </div>
            <p className={styles.countWinners}>{quiniela.winners.length} ganadores</p>
            <p className={styles.awards}>Premio {(quiniela.acumulado * quiniela.porcentajePremio ) / 100} BS</p>
        </div>)
}

export default Winners