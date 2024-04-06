import Menu from '@/components/menu'
import Results from './results/'
import Winners from './winners'
import NextQuiniela from './nextQuiniela'
import ItemsRoulettes from './itemsRoulettes'

const Home = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-9">
                        <Results />
                        <NextQuiniela />
                    </div>
                    <div className="col-3">
                        <Winners />
                    </div>
                </div>
                <ItemsRoulettes />
            </div>
        </>
    )
}

export default Home