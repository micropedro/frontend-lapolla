/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useRetiroStore from "../store/retirosStore"
import useErrorManager from "./useErrorManager"
import useModalStore from "../store/modalStore"
const useRetiros = () => {
    const { setVisible, setText, setButtonText, setClickEvent } = useModalStore()
    const errorManager = useErrorManager()
    const { setRetiros, retiros } = useRetiroStore()
    const getRetiros = async () => {
        try {
            const response = await request.get(urlApi + "/withdraws")
            setRetiros(response.data.body)
            return response
        } catch (error) {
            errorManager(error)
        }
    }

    const aproveWhithdraw = async () => {
        //update retiro .put
        const data = {
            "userId": "66207f0edf3abd9ae2cb076d",
            "adminMethodId": "6623ff61769f378e2e72e02d",
            "amount": 1,
            "_id": "6637942d887aae8988dc76d0"
        }
        try {
            const responseUpdate = await request.post(urlApi + "/withdraws/update",data)
            console.log("response put :"+responseUpdate)
        } catch (error) {
            errorManager(error)
        }
    }

    const handleModal = (retiro) => {
        setClickEvent(aproveWhithdraw)
        setButtonText("Ya e pagado")
        console.log(retiro)
        setVisible(true)
        const { methodName, nombre, cedula, correo, tipo, cuenta, banco, telefono, imageUrl } = retiro.payMethod
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
            </div>
        </div>)
    }

    useEffect(() => { getRetiros() }, [])

    return {
        getRetiros,
        retiros,
        aproveWhithdraw,
        handleModal
    }
}

export default useRetiros