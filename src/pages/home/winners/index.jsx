import { Link } from 'react-router-dom'
import styles from './winners.module.css'

const Winners = () => {
    return (<>
        <div className='mt-5'>
            <h2 className='text-warning text-center'>Ganadores</h2>
        </div>
        <div className="">
            <WinnerDetails />
            <WinnerDetails />
            <WinnerDetails />
            <WinnerDetails />
            <WinnerDetails />
            <WinnerDetails />
            <Link to="/lobby" className='' >
                <button type="button" className="btn btn-primary w-100 mt-4">
                    <i className="bi bi-caret-right-fill mx-2" />
                    Jugar Ahora
                </button>
            </Link>
        </div>


    </>)
}

const WinnerDetails = () => {
    return (
        <div className={`${styles.card} card mb-1 p-2`}>
            <div className='d-flex justify-content-between'>
                <p className={styles.cardP}>Gran quiniela</p>
                <p className={styles.cardP}>26/08/2024</p>
            </div>
            <p className={styles.countWinners}>5 ganadores</p>
            <p className={styles.awards}>Premio 230.000 BS</p>
        </div>)
}

export default Winners