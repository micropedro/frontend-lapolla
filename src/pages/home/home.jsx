import Menu from '../../components/menu'
import Results from './results/results'
import Winners from './winners'
import NextQuiniela from './nextQuiniela'
import ItemsRoulettes from './itemsRoulettes'
import Footer from './footer'
import Carrousels from '../../components/carrousels/Carrousels'
import images from '../../images/images'
import PollasActuales from '../../components/pollasActuales/pollasActuales'
import { useState } from 'react'


const Prod = () => {
    const [prod, setProd] = useState(true)
    if (prod) return <div className='p-1 bg-success flex-between text-light'>
        <div>Prod</div>
        <button onClick={() => setProd(false)} className='btn btn-sm btn-danger'> x </button>
    </div>
}

const Home = () => {
    return (
        <div className='bg-granja-2'>
            <Prod />
            <Menu />
            <div className="container pt-4 carrousel">
                <Carrousels />
            </div>
            <PollasActuales />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <Results />
                        <NextQuiniela />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Winners />
                    </div>
                </div>
            </div>
            <ItemsRoulettes />
            <div className="container-fluid">
                <div className="row">
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Home