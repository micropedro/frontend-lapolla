/* eslint-disable react/prop-types */
import { Modal, Button, Form } from 'react-bootstrap'
import userStore from "../../../store/userStore"
import './withdrawModal.css'
import useRetiros from '../../../hooks/useRetiros'
import useNotify from "../../../hooks/useNotify"
import useWithdrawModalStore from "./store"
import { isertSelectedSecondaryMethodName } from '../../../services/utils'
import MethodSelected from '../../methodSelected/methodSelected'
import useErrorManager from '../../../hooks/useErrorManager'
import useUsers from '../../../hooks/useUser'

const WithdrawModal = ({ show, onHide }) => {
    const errorManager = useErrorManager()
    const { actualizeUserBalance } = useUsers()
    const { amount, setAmount, methodSelected, setMethodSelected } = useWithdrawModalStore()

    const { notify } = useNotify()

    const { addRetiro } = useRetiros()
    // const { userMethods } = usePerfil()
    // const [ , setDetailsMethodAdmin] = useState({})
    const { user } = userStore()

    const handleChangeMethod = (event) => {
        if (event.target.value === "0") {
            // setDetailsMethodAdmin({})
            setMethodSelected("")
            return false
        }

        // const [methodCurrent] = userMethods.filter(method => method._id === event.target.value)
        // setDetailsMethodAdmin(event.target.value)
        setMethodSelected(event.target.value)
    }

    const handleSave = async () => {
        try {
            onHide();
            const data = { payMethodId: methodSelected, amount }
            const res = await addRetiro(data)
            //actualizar saldo del usuario
            await actualizeUserBalance()
            if (res) notify.success("Retiro registrado correctamente")
        } catch (error) {
            errorManager(error)
        } finally {
            setAmount('')
        }
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="modal-content bg-white shadow-md rounded">
                <Modal.Header closeButton>
                    <Modal.Title className="text-lg font-bold">Retiro de dinero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="select">
                            <Form.Label>Metodo de pago:</Form.Label>

                            {user?.userMethods && (
                                <Form.Control as="select" onChange={handleChangeMethod} >
                                    {[{ methodName: "Seleccione metodo de pago", _id: '0' }].concat(user.userMethods).map(method => {
                                        return (
                                            <option key={method._id} value={method._id}>{method.methodName} {isertSelectedSecondaryMethodName(method)}</option>
                                        )
                                    })}
                                </Form.Control>
                            )}
                        </Form.Group>

                        {methodSelected && <MethodSelected method={methodSelected} userMethods={user?.userMethods} />}

                        <Form.Group controlId="amount">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                        <div className="text-right mt-3">
                            <Button variant="primary" onClick={handleSave}>Registrar retiro</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default WithdrawModal;
