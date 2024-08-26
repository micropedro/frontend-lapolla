import Cards from '../../../components/Cards';
import useAnimalsStore from '../../../store/animalsStore';
import images from '../../../images/images'
import { useState } from 'react';



const ResultsComponent = ({ animals, arrayResults, type }) => {
    return (animals?.length > 0 ?
        <div className="row gx-2">
            <Cards roulette={type} />
        </div>
        : <div className="row gx-2">
            {arrayResults.map(r => {
                return (<div key={r} className='col-6 col-sm-4 col-md-3 col-lg-2 mb-2'>
                    <div className='card bg-card text-light'>
                        <div className='pt-2 px-1 text-center'>
                            <img width={"100%"} src={images.logoPng} />
                            <div className='mt-1'>
                                En espera
                            </div>
                            <p>{`${r > 12 ? r-12 : r}:00 ${r > 11 ? "PM" : "AM"}`}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>)
}

const Results = () => {

    const [arrayResults, setArrayResults] = useState([10, 11, 12, 13, 14, 15])
    const { animals } = useAnimalsStore()

    const activa = 1
    const lotto = 3
    const granjita = 2

    return (
        <>
            <div className='container-fluid'>
                <div className="row text-light text-center">
                    <div className='col-12'>
                        <div className='pt-5'>
                            <h2>Sorteos Ruleta Activa</h2>
                            <p>Resultados 03/08/2024</p>
                        </div>
                    </div>
                </div>
                <ResultsComponent animals={animals} arrayResults={arrayResults} type={activa} />
            </div>

            {/* granjita */}
            <div className="row text-light text-center">
                <div className='col-12'>
                    <div className='pt-5'>
                        <h2>Sorteo Lotto Activo</h2>
                        <p>Resultados 03/08/2024</p>
                    </div>
                </div>
            </div>
            <ResultsComponent animals={animals} arrayResults={arrayResults} type={lotto} />

            {/* granjita */}
            <div className="row text-light text-center">
                <div className='col-12'>
                    <div className='pt-5'>
                        <h2>Sorteo La Granjita</h2>
                        <p>Resultados 03/08/2024</p>
                    </div>
                </div>
            </div>
            <ResultsComponent animals={animals} arrayResults={arrayResults} type={granjita} />
            

        </>
    )
}

export default Results