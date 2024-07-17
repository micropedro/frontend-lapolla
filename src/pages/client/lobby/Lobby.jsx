import logoGq from '../../../images/granquiniela.png'
import logoMq from '../../../images/miniquiniela.png'
import { Link } from 'react-router-dom';
/* import AlertLobby from './alertLobby'; */
import Cards from '../../../components/Cards';
import useUserStore from '../../../store/userStore';
import cash from '../../../services/cash';

const Lobby = () => {
    const { user } = useUserStore()

    return (<>
        <div className='container mt-3'>
            <div className='row pb-2'>
                <div className="col-12 d-flex align-items-start justify-content-between">
                    <h2 className='text-warning'>Lobby</h2>
                    {/* <div>
                        <div className='text-lg text-end text-light'>Premio Acumulado</div>
                        <div> <h2 className='text-warning'> BS. {polla} </h2> </div>
                    </div> */}
                </div>
            </div>
            {/*  <AlertLobby /> */}
            <div className="row justify-content-center mb-4">
                <div className="col-sm-12 col-md-5">
                    <div className='text-light text-center'>
                        Acumulado de ayer
                        <h2 className='text-warning'> Bs. {cash(user?.config?.premioAcumuladoGran)} </h2>
                    </div>
                    <div className='bg-btn-2'>
                        <Link to="/mini">
                            <img width="100%" className="hover-image" src={logoMq} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className='text-light text-center'>
                        Acumulado de ayer
                        <h2 className='text-warning'> Bs. {cash(user?.config?.premioAcumuladoMini)} </h2>
                    </div>
                    <div className="bg-btn-1">
                        <Link to="/quiniela">
                            <img width="100%" className="hover-image" src={logoGq} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card p-4">
                        <h3 className='text-danger'>
                            Bienvenido a ApuestaLaPolla, tu plataforma de juegos de quinielas online
                        </h3>
                        <p className='text-gray'>
                            Estamos emocionados de tenerte en nuestra plataforma,
                            Aqui encontrarás los juegos de quinielas disponibles
                            que te mantendrán entretenido mientras ganas emocionantes premios.
                        </p>
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
