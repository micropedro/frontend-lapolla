import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
const AlertLobby = () => {
    const [show, setShow] = useState(true);
    return (
        <div className='row'>
            <div className="col-12">
                {show && (
                    <Alert variant="info" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>¡Bienvenido a ApuestaLaPolla, nuestra plataforma de juegos de quinielas!</Alert.Heading>
                        <p>
                            Estamos emocionados de tenerte en nuestra plataforma,
                            Aqui encontrarás los juegos de quinielas disponibles
                            que te mantendrán entretenido mientras ganas emocionantes premios.
                        </p>
                    </Alert>
                )}
            </div>
        </div>
    )
}

export default AlertLobby