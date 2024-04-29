import logoGq from '../../../images/granquiniela.png'
import logoMq from '../../../images/miniquiniela.png'
import { Link } from 'react-router-dom';
import AlertLobby from './alertLobby';
import Cards from '../../../components/Cards';

const Lobby = () => {
    return (<>
        <div className='container pb-5'>
            <div className='row pb-4 pt-3'>
                <div className="col-12 flex-between">
                    <h2 className='text-warning'>Lobby</h2>
                    <div>
                        <div className='text-lg text-end text-light'>Premio Acumulado</div>
                        <div> <h2 className='text-warning'> BS. 258.000,00 </h2> </div>
                    </div>
                </div>
                {/* <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/lobby">Lobby</Link></li>
                            </ol>
                        </a>
                    </div>
                </nav> */}
            </div>
            <AlertLobby />
            <div className="row justify-content-center mb-4">
                <div className="col-sm-12 col-md-5">
                    <div className='bg-btn-1'>
                        <Link to="/mini">
                            <img width="100%" className="hover-image" src={logoGq} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className="bg-btn-2">
                        <Link to="/mini">
                            <img width="100%" className="hover-image" src={logoMq} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-warning'>Resultados Ruleta activa</h2>
                </div>
                <Cards roulette={1} />
                <div className="col-12">
                    <h2 className='text-warning'>Resultados La granjita</h2>
                </div>
                <Cards roulette={2} />
                <div className="col-12">
                    <h2 className='text-warning'>Resultados Loto Activo</h2>
                </div>
                <Cards roulette={3} />
            </div>
        </div>
    </>)
}

export default Lobby
