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
import { useEffect, useState } from 'react'
import { handleAmount } from '../../../services/utils'
import { Link } from 'react-router-dom'

const WithdrawModal = ({ show, onHide }) => {
    const errorManager = useErrorManager()
    const { actualizeUserBalance } = useUsers()
    const { amount, setAmount, methodSelected, setMethodSelected } = useWithdrawModalStore()
    const [amountError, setAmountError] = useState(false)
    const [totalAmount, setTotalAmount] = useState()

    const { notify } = useNotify()

    const { addRetiro } = useRetiros()
    // const { userMethods } = usePerfil()
    // const [ , setDetailsMethodAdmin] = useState({})
    const { user } = userStore()

    const handleChangeMethod = (event) => {
        const metodo = JSON.parse(event.target.value)
        if (metodo._id === "0") {
            // setDetailsMethodAdmin({})
            setMethodSelected({})
            return false
        }

        // const [methodCurrent] = userMethods.filter(method => method._id === event.target.value)
        // setDetailsMethodAdmin(event.target.value)
        setMethodSelected(metodo)
    }

    const handleSave = async () => {
        try {
            onHide();
            const data = { payMethodId: methodSelected._id, amount }
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

    const calc = (amount) => {
        /* console.log(amount)
        console.log(methodSelected) */
        if (methodSelected?.adminMethodId?.tipoDeCambio) {
            const redondeado = handleAmount(methodSelected?.adminMethodId?.tipoDeCambio, amount)
            setTotalAmount(redondeado)
            handleError(redondeado)
        }
    }

    useEffect(() => {
        if (amount) calc(amount)
    }, [amount, methodSelected])

    const handleError = (totalAmount) => {
        if (user.balance < totalAmount) {
            setAmountError("Saldo Insuficiente")
        } else {
            setAmountError(false)
        }
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="modal-content bg-white shadow-md rounded">
                <Modal.Header closeButton>
                    <Modal.Title className="text-lg font-bold">Retiro de dinero</Modal.Title>
                </Modal.Header>
                {user?.userMethods?.length === 0 ? <>
                    <Modal.Body>
                        <div className="p-3 mb-4 alert alert-warning">
                            Debes agregar un metodo de pago en tu perfil para poder hacer retiros
                        </div>
                        <Link to="/perfil" className='mx-2 btn bg-success text-light'>
                            Click aqui
                        </Link> 
                        para agregar un metodo de pago
                    </Modal.Body>
                </>
                    : <>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="select">
                                    <Form.Label>Metodo de pago:</Form.Label>
                                    {user?.userMethods && (
                                        <Form.Control as="select" onChange={handleChangeMethod} >
                                            {[{ methodName: "Seleccione metodo de pago", _id: '0' }].concat(user.userMethods).filter(i => !i.deleted).map(method => {
                                                return (
                                                    <option key={method._id} value={JSON.stringify(method)}> {method.methodName} {isertSelectedSecondaryMethodName(method)}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    )}
                                </Form.Group>

                                {methodSelected && <MethodSelected method={methodSelected?._id} userMethods={user?.userMethods} />}

                                <Form.Group controlId="amount">
                                    <Form.Label>Monto</Form.Label>
                                    <Form.Control type="number" value={amount} onChange={(e) => { setAmount(e.target.value); calc(amount) }} />
                                </Form.Group>
                                <div>
                                    Total a recibir
                                    <div className='text-center'>
                                        <h1 className='mb-0'>{totalAmount} Bs</h1>
                                    </div>
                                    <div className='text-center text-danger'>
                                        {amountError}
                                    </div>
                                </div>
                                <div className="text-right mt-3">
                                    <Button variant="primary" onClick={handleSave}>Registrar retiro</Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </>}
            </div>
        </Modal>
    );
};

export default WithdrawModal;
