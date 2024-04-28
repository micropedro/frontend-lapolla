import useAnimals from '../hooks/useAnimals'
import images from '../images/images'

// eslint-disable-next-line react/prop-types
const Cards = ({ roulette }) => {

    const { animals } = useAnimals()
    const results = animals.filter( animal => animal.roulet == roulette)
   
    const resultsnotEmpty = results.length === 0 ? [
        {
            "name": "En espera",
            "animalId": 0,
            "hora": 9,
            "roulet": 1
        }
    ] : results
        
    return (<>{
        resultsnotEmpty.map((animal, index) => {
            const img = results.length === 0 ? images.logoPng : images.animals.filter( a => a.id === animal.animalId)[0].image
            return(
                <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 mb-2'>
                    <div className='card bg-card text-light'>
                        <div className='pt-2 px-1 text-center'>
                            <img width={"100%"} src={img} />
                            <div className='mt-1'>
                                {animal.name}
                            </div>
                            <p>{`${animal.hora}:00`}</p>
                        </div>
                    </div>
                </div>)
        })
    }</>)

     
}

export default Cards