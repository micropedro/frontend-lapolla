import Menu from '../../components/menu'
import Results from './results/results'
import Winners from './winners'
import NextQuiniela from './nextQuiniela'
import ItemsRoulettes from './itemsRoulettes'
import Footer from './footer'
import Carrousels from '../../components/carrousels/Carrousels'

const Home = () => {
    return (
        <div className='bg-dark'>
            <Menu />
            <div className="container">    
                <Carrousels />       
            </div>
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
            <div className="container">
                <div className="row">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home