import { validate } from "../services/validate"
import useErrorManager from "./useErrorManager"
import request from "../services/request"
import urlApi from "../services/urlApi"
const useWinnerTicket = () => {
    const errorManager = useErrorManager()
    const handleForm = async (e, ticket) => {
        try {
            e.preventDefault()
            const obj = {
                payMethod: {
                    name: "Trasrerencia bancaria",
                    cuenta: e.target.cuenta.value,
                    type: e.target.type.value,
                    bank: e.target.bank.value
                },
                ticket,
                userData: {
                    name: e.target.name.value,
                    ci: e.target.ci.value,
                    phone: e.target.phone.value,
                }
            }

            validate.required([
                obj.payMethod.name,
                obj.userData.ci,
                obj.userData.phone,
                obj.payMethod.cuenta,
                obj.payMethod.type,
                obj.payMethod.bank
            ], "Falta algun dato")

            const res = await request.post(urlApi + "/saveWinner", obj)
            console.log(res.data.body)
        } catch (error) {
            errorManager(error)
        }
    }
    return {
        handleForm
    }
}

export default useWinnerTicket