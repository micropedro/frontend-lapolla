/* eslint-disable react/prop-types */
import useModalStore from '../../store/modalStore'
const Modal = () => {
    const { text, ButtonText, clickEvent, visible, setVisible } = useModalStore()
    if (visible) {
        return (
            <div className="bg-modal">
                <div className="body-modal">
                    <div className='mb-2'> {text} </div>
                    <div>
                        <button className='btn btn-warning mx-2' onClick={() => clickEvent()} > {ButtonText} </button>
                        <button onClick={() => setVisible(false)} className='btn btn-danger mx-2'> Cancelar </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal