import Card from '@/components/Card';
import styles from './result.module.css'

const Results = () => {
    const hours = [0, 1, 2, 3, 4, 5];
    return (<>
        <div className={styles.container}>
            <div className='pt-5'>
                <h2>Gran Quiniela de animalitos</h2>
                <p>Resultados 03/08/2024</p>
            </div>
            <div className="flex-between">
                {hours.map(hour => (
                    <Card key={hour} content={contentCard} width={150} height={180} />
                ))}
            </div>
        </div>
    </>)
}

const contentCard = ({animal}) => (<>
    <div className='p-3'>
        <img width={100} src={animal} />
        <p className={`${styles.card} mt-3`}>2:00pm</p>
    </div>
</>)

export default Results