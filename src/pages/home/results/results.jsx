import Cards from '../../../components/Cards';

const Results = () => {
    return (<div className='container-fluid'>
        <div className="row text-light text-center">
            <div className='col-12'>
                <div className='pt-5'>
                    <h2>Gran Quiniela de animalitos</h2>
                    <p>Resultados 03/08/2024</p>
                </div>
            </div>
        </div>
        <div className="row gx-2">
            <Cards />
        </div>
    </div>)
}

export default Results