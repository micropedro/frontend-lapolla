import Menu from '@/components/menu'
import Results from './results/'
import Winners from './winners'
import NextQuiniela from './nextQuiniela'
import ItemsRoulettes from './itemsRoulettes'
import Footer from './footer'

const Home = () => {
    return (
        <>
            <Menu />
            <div className='bg-dark'>
                <div className="container bg-dark">
                    <div className="row">
                        <div className="col-9">
                            <Results />
                            <NextQuiniela />
                        </div>
                        <div className="col-3">
                            <Winners />
                        </div>
                    </div>
                    <ItemsRoulettes />
                    <Footer />
                </div>
            </div>
          
        </>
    )
}

export default Home