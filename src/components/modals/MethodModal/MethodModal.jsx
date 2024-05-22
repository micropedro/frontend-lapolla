import { useState, useCallback } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import usePerfil from '../../../hooks/usePerfil'
import useMethods from '../../../hooks/useMethods'

// eslint-disable-next-line react/prop-types
const AddBankModal = ({ show, handleClose }) => {
    const [methodSelected, setMethodSelected] = useState('');
    const { adminMethods, getUser } = usePerfil()
    const [dataForm, setDataForm] = useState({});
    const { sendForm, setMethodName, setImageUrl } = useMethods()

    const handleSave = async () => {
        // se declara "e" para que sea compatible con el metodo sendForm
        const e = {
            target: Object.keys(dataForm).reduce((acc, key) => {
                acc[key] = { value: dataForm[key] };
                return acc;
            }, {}),
            preventDefault: () => { }
        }
        await sendForm(e)
        await getUser()
        setDataForm({})
        // Después de guardar los datos, cierra el modal
        handleClose();
    };

    const handleChangeMethod = (event) => {
        if (event.target.value === "0") {
            setMethodSelected("")
            return false
        }
        const [methodCurrent] = adminMethods.filter(method => method._id === event.target.value)
        setMethodName(methodCurrent.methodName)
        setImageUrl(methodCurrent.imageUrl)
        setMethodSelected(event.target.value)
    }

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;
        setDataForm(prevDataForm => ({
            ...prevDataForm,
            [name]: value
        }));
    };

    const RenderForm = useCallback(() => {
        if (methodSelected === "") return null
        const [method] = adminMethods.filter(method => method._id === methodSelected)
            .map(method => {
                return {
                    banco: method.banco ? true : false,
                    cedula: method.cedula ? true : false,
                    correo: method.correo ? true : false,
                    cuenta: method.cuenta ? true : false,
                    telefono: method.telefono ? true : false,
                    tipo: method.tipo ? true : false,
                    nombre: method.nombre ? true : false,
                    secondary: method.secondary ? true : false,
                    // imageUrl: method.imageUrl
                }
            })

        return Object.keys(method).map(m => {
            if (!method[m]) return false
            console.log(m)
            if (m === "secondary") {
                return (
                    <Form.Group key={m} controlId={m}>
                        <Form.Control type="hidden" name={m} />
                    </Form.Group>
                )
            } else {
                return (
                    <Form.Group key={m} controlId={m}>
                        <Form.Label>{m}</Form.Label>
                        <Form.Control
                            type="text"
                            // value={bankName}
                            name={m}
                            onChange={handleChangeForm}
                        />
                    </Form.Group>
                )
            }
        })
    }, [methodSelected]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar metodo de pago</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="select">
                        <Form.Label>Metodo de pago:</Form.Label>
                        <Form.Control as="select" onChange={handleChangeMethod} >
                            {[{ methodName: "Seleccione metodo de pago", _id: '0' }].concat(adminMethods).map(method => {
                                return (
                                    <option key={method._id} value={method._id}>{method.methodName} - {method.secondary}</option>
                                )
                            })}
                        </Form.Control>
                        <RenderForm />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setDataForm({})
                    handleClose(false)
                }}>
                    Cerrar
                </Button>
                <Button type='submit' variant="primary" onClick={handleSave}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBankModal;
