import Cards from '../../../components/Cards';

const Results = () => {

    const activa = 1
    const lotto = 2
    const granjita = 3

    return (
        <div className='container-fluid'>
            <div className="row text-light text-center">
                <div className='col-12'>
                    <div className='pt-5'>
                        <h2>Sorteos Ruleta Activa</h2>
                        <p>Resultados 03/08/2024</p>
                    </div>
                </div>
            </div>
            <div className="row gx-2">
                <Cards roulette={activa} />
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
            <div className="row gx-2">
                <Cards roulette={lotto} />
            </div>

            {/* granjita */}
            <div className="row text-light text-center">
                <div className='col-12'>
                    <div className='pt-5'>
                        <h2>Sorteo La Granjita</h2>
                        <p>Resultados 03/08/2024</p>
                    </div>
                </div>
            </div>
            <div className="row gx-2">
                <Cards roulette={granjita} />
            </div>
        </div>)
}

export default Results