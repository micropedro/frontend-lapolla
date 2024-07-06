import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './depositModal.css'
import useDeposits from '../../../hooks/useDeposits';
import usePerfil from '../../../hooks/usePerfil'
import useMethods from '../../../hooks/useMethods'
import useNotify from "../../../hooks/useNotify"
import useErrorManager from '../../../hooks/useErrorManager';
import { handleAmount } from '../../../services/utils'
// eslint-disable-next-line react/prop-types
const DepositModal = ({ show, onHide }) => {
    const errorManager = useErrorManager()
    const [amount, setAmount] = useState('');
    const [transactionNumber, setTransactionNumber] = useState('');
    const { addDeposit } = useDeposits()
    const [methodSelected, setMethodSelected] = useState('');
    const { setMethodName, setImageUrl } = useMethods()
    const { notify } = useNotify()
    const { adminMethods } = usePerfil()
    const [detailsMethodAdmin, setDetailsMethodAdmin] = useState({})

    const handleSave = async (e) => {
        e.preventDefault()

        if (!methodSelected) return notify.error("Debe seleccionar un metodo de pago")
        if (!transactionNumber) return notify.error("Debe indicar un numero de transaccion")
        if (!amount) return notify.error("Debe indicar un monto")

        try {
            onHide();
            const res = await addDeposit({
                methodSelected,
                transactionNumber,
                amount
            })
            if (res) notify.success("Deposito registrado correctamente")
        } catch (error) {
            errorManager(error)
        } finally {
            setMethodSelected("")
            setTransactionNumber('')
            setAmount('')
        }
    }

    const handleChangeMethod = (event) => {
        if (event.target.value === "0") {
            setMethodSelected("")
            setDetailsMethodAdmin({})
            return false
        }
        const [methodCurrent] = adminMethods.filter(method => method._id === event.target.value)
        setDetailsMethodAdmin(methodCurrent)
        setMethodName(methodCurrent.methodName)
        setImageUrl(methodCurrent.imageUrl)
        setMethodSelected(event.target.value)
    }



    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="modal-content bg-white shadow-md rounded">
                <Modal.Header closeButton>
                    <Modal.Title className="text-lg font-bold">Depósito de dinero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSave}>
                        <Form.Group controlId="select">
                            <Form.Label>Metodo de pago:</Form.Label>
                            <Form.Control as="select" onChange={handleChangeMethod} >
                                {[{ methodName: "Seleccione metodo de pago", _id: '0' }].concat(adminMethods).filter(i => !i.deleted).map(method => {
                                    return (
                                        <option key={method._id} value={method._id}>{method.methodName} {method.secondary}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                        <div className='mt-3 mb-3 d-flex flex-column text-center'>

                            {detailsMethodAdmin?.imageUrl && (
                                <div className='d-flex gap-2 justify-content-center align-items-center'>
                                    <img style={{ width: '50px' }} src={detailsMethodAdmin?.imageUrl} />
                                    <span>{detailsMethodAdmin?.methodName}</span>
                                </div>
                            )}
                            {detailsMethodAdmin?.banco && (
                                <span>{detailsMethodAdmin?.nombre}</span>
                            )}
                            {detailsMethodAdmin?.cedula && (
                                <span>CI: {detailsMethodAdmin?.cedula}</span>
                            )}
                            {detailsMethodAdmin?.correo && (
                                <span>{detailsMethodAdmin?.correo}</span>
                            )}
                            {detailsMethodAdmin?.telefono && (
                                <span>TELF: {detailsMethodAdmin?.telefono}</span>
                            )}
                            {detailsMethodAdmin?.tipo && (
                                <span>{detailsMethodAdmin?.tipo}</span>
                            )}
                        </div>
                        <div>
                            {detailsMethodAdmin.tipoDeCambio !== 1 && (
                                <div className='text-dark flex-between'>
                                    <div>
                                        Tipo de cambio :
                                    </div>
                                    <div>
                                        {detailsMethodAdmin.tipoDeCambio}
                                    </div>

                                </div>
                            )}
                        </div>
                        <Form.Group controlId="amount">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" step={'0.01'} value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                        <div className='mt-3'>
                            Total a recibir
                        </div>
                        <div className='text-center'>
                            <h1 className='mb-0'>{handleAmount(detailsMethodAdmin.tipoDeCambio, amount) || "0"} Bs</h1>
                        </div>
                        <Form.Group controlId="transactionNumber">
                            <Form.Label>Número de operación</Form.Label>
                            <Form.Control type="text" value={transactionNumber} onChange={(e) => setTransactionNumber(e.target.value)} />
                        </Form.Group>
                        <div className="text-end mt-3">
                            <Button variant="primary" type='submit'>Ya e realizado el deposito</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default DepositModal;
