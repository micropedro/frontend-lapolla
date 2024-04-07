import Card from '@/components/Card'
import styles from './next.module.css'

const NextQuiniela = () => {
    return (<>
        <div className={styles.container}>
            <h2 className='pt-5 pb-3'>Proximas Quinielas</h2>
            <div className='flex-between'>
                <Card content={contentminiQuiniela} width={450} height={390} />
                <Card content={contentgranQuiniela} width={450} height={390} />
            </div>
        </div>
    </>)
}

const contentminiQuiniela = () => (<>
    <div className={`${styles.cardQuiniela} text-white p-4`}>
        <p>Mini Quiniela</p>
        <p>3 animalitos</p>
        <div className={`${styles.hoursMini} p-3`}>Duracion 8H</div>
        <p>7 Septiembre</p>
        <p>09:00 aM</p>
        <div className='d-grid p-4'>
            <button type="button" className={`${styles.btnQuiniela} btn btn-primary`}>
                <i className="bi bi-caret-right-fill mx-2" />Jugar Mini Quiniela
            </button>
        </div>
    </div>
</>)

const contentgranQuiniela = () => (<>
    <div className={`${styles.cardQuiniela} text-white p-4`}>
        <p>Gran Quiniela</p>
        <p>6 animalitos</p>
        <div className={`${styles.hoursGran} p-3`}>Duracion 24H</div>
        <p>7 Septiembre</p>
        <p>09:00 aM</p>
        <div className='d-grid p-4'>
            <button type="button" className={`${styles.btnQuiniela} btn btn-primary`}>
                <i className="bi bi-caret-right-fill mx-2" />Jugar Gran Quiniela
            </button>
        </div>
    </div>
   
</>)

export default NextQuiniela