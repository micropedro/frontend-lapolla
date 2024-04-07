import styles from './winners.module.css'

const Winners = () => {
    return (<><>
        <div className={`${styles.container} card p-3`}>
            <div>
                <h2>Ganadores</h2>
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
            </div>
            <button type="button" className="btn btn-default">Ver mas</button>
        </div>
        <div className="d-grid gap-2">
            <button type="button" className={`${styles.btnPlay} btn btn-primary btn-lg m-2`}>
                <i className="bi bi-caret-right-fill mx-2" />
                Jugar Ahora</button>
        </div>
    </></>)
}

const WinnerDetails = () => {
    return (
        <div className={`${styles.card} card mb-3 p-2`}>
            <div className='d-flex justify-content-between'>
                <p className={styles.cardP}>Gran quiniela</p>
                <p className={styles.cardP}>26/08/2024</p>
            </div>
            <p className={styles.countWinners}>5 ganadores</p>
            <p className={styles.awards}>Premio 230.000 BS</p>
        </div>)
}

export default Winners