import Card from '@/components/Card';


const Results = () => {
    const hours = [0, 1, 2, 3, 4];
    return (<>
        <h2>Gran Quiniela de animalitos</h2>
        <p>Resultados 03/08/2024</p>
        <div className="flex-between">
            {hours.map(hour => (
                <Card key={hour} content={contentCard} />
            ))}
        </div>
    </>)
}

const contentCard = ({animal}) => (<>
    <img src={animal} />
    <p>2:00pm</p>
</>)

export default Results