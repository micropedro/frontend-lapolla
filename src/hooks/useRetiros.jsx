/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useRetiroStore from "../store/retirosStore"
import useErrorManager from "./useErrorManager"
import useModalStore from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
import { Spinner } from "react-bootstrap"
import useUserStore from "../store/userStore"
import { useLocation } from 'react-router-dom';

const useRetiros = () => {
    const { setLoading } = useLoadingStore()
    const { setVisible, setText, setButtonText, setClickEvent,setFillBtn } = useModalStore()
    const errorManager = useErrorManager()
    const { user } = useUserStore()
    const { setRetiros, retiros } = useRetiroStore()
    const location = useLocation();
   
    const getRetiros = async (state) => {
        if(user.level === 5) return // --> no llenar el estado de retiros del administrador
        try { 
            setLoading(true)
            const response = await request.get(urlApi + "/withdraws" + (state || ""))
            if (response) setRetiros(response.data.body)
           
            setLoading(false)
            return response
        } catch (error) {
            setLoading(false)
            errorManager(error)
        }
    }

    const aproveWhithdraw = async (_id) => {
        //update retiro .put
        try {
            setText(<Spinner className="p-4"></Spinner>)
            setLoading(true)
            setFillBtn(false)
            const responseUpdate = await request.put(urlApi + "/withdraws", { _id })
            if (!responseUpdate) throw new Error("Error en la peticion de retiros")
            getRetiros()
            setVisible(false)
            setFillBtn(true)
        } catch (error) {
            setVisible(false)
            setLoading(false)
            errorManager(error)
            setFillBtn(true)
        }
    }

    const handleModal = (retiro) => {
        const { _id, payMethod, amount } = retiro
        setClickEvent(() => aproveWhithdraw(_id))
        setButtonText("Ya e pagado")
        setFillBtn(true)
        setVisible(true)

        const { methodName, nombre, cedula, correo, tipo, cuenta, banco, telefono, imageUrl } = payMethod

        setText(<div className="mw-2 text-dark">
            <div className="flex-between">
                <h3>{methodName && methodName} </h3>
                <img height={30} src={imageUrl} alt="" />
            </div>
            <div className="pb-4 text-lg">
                {nombre && <div> {nombre}</div>}
                {cedula && <div> {cedula}</div>}
                {correo && <div> {correo}</div>}
                {tipo && <div> {tipo}</div>}
                {cuenta && <div> {cuenta}</div>}
                {banco && <div> {banco}</div>}
                {telefono && <div> {telefono}</div>}
                <hr className="pb-0 mb-0" />
                {amount && <div className="text-center"> <h3>Enviar:  BS. {amount} </h3> </div>}
            </div>
        </div>)
    }

    const getRetirosUser = async () => {
        //if(user.level !== 5) return // --> no llenar el estado de depositos del usuario o cliente normal
        const response = await request.get(urlApi + "/withdraw/" + user._id)
        if (response) setRetiros(response?.data?.body || [])
    }

    const addRetiro = async (data) => {
        try {
            setLoading(true)
            await request.post(urlApi + "/withdraws/", { 
                userId: user._id,
                payMethodId: data.payMethodId,
                amount: Number(data.amount)
            })
            getRetirosUser()
            setLoading(false)
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const urlCurrent = new URL(location.pathname, window.location.origin);
        const isTransacctionPage = urlCurrent.pathname.slice(1) === 'transactions';
        if(user.level === 1 && !isTransacctionPage){
            getRetiros()
        }else{
            setRetiros([])
            getRetirosUser()
        }
    }, [])

    return {
        addRetiro,
        getRetiros,
        retiros,
        aproveWhithdraw,
        handleModal,
        getRetirosUser
    }
}

export default useRetiros