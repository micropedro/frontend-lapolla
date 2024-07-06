import { useEffect, useRef, useState } from "react"
import useReportUserStore from "../store/reportUserStore"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import useErrorManager from '../hooks/useErrorManager'
import useUserStore from "../store/userStore"
import storeModal from "../pages/admin/ventas/modales/storeModal"
import useUser from '../hooks/useUser'
import { totalAPagar } from "../services/utils"
import { validate } from "../services/validate"
import dateNow from "../services/dateNow"
import useNotify from "./useNotify"

const useReportUser = () => {
    const { notify } = useNotify()
    const { getUser } = useUser()
    const { setVisible, dataModal, setDataModal, setMethods, setUserToPay, userToPay, selectMethod } = storeModal()
    const errorManager = useErrorManager()
    const { setLoading } = useLoadingStore()
    const { reportUser } = useReportUserStore()
    const [dataTable, setDataTable] = useState([])
    const { user } = useUserStore()
    const closeModal = () => setVisible(false)
    const refNumber = useRef()

    const getDataTable = async (userId, from, to) => {
        try {
            setLoading(true)
            const res = await request.get(urlApi + `/reportUsers/${userId}/${from}/${to}`)
            const reportes = res.data.body
            setDataTable(reportes)
            return reportes
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const handlePay = async (i) => {
        setLoading(true)
        setDataModal(i)
        setVisible(true)
        const userToCall = i.tickets[0].user.grupero !== "000000000000000000000000" ? i.tickets[0].user.grupero : i.tickets[0].user.admin
        const _user = await getUser(userToCall)
        const methods = _user.userMethods
        setMethods(methods)
        setUserToPay(_user)
        setLoading(false)
    }

    const confirmPay = async () => {
        try {
            setLoading(true)
            const data = {
                from: user?._id,
                to: userToPay?._id,
                amount: totalAPagar(dataModal?.tickets, dataModal?.precioQuiniela),
                payMethod: selectMethod?._id,
                ref: refNumber?.current?.value,
                idQuiniela: dataModal?._id
            }

            validate.required(data?.ref.length > 0, "Debe ingresar un numero de referencia valido")
            validate.required([data?.from, data?.to, data?.amount, data?.payMethod, data?.idQuiniela])
            validate.isMongoId([data?.from, data?.to, data?.payMethod])
            const resPago = await request.post(urlApi + '/pagoQuiniela', data)
            /* if (resPago) notify.success("Pago agregado con exito") */
            const from = `${dateNow.anio - 1}-${dateNow.mes}-${dateNow.dia}`
            const to = `${dateNow.anio}-${dateNow.mes}-${dateNow.dia}`
            const responseDateTable =  await getDataTable(user?._id, from, to)
            console.log("responseDateTable: ", responseDateTable)
            closeModal()
            setLoading(false)

            console.log(resPago)

        } catch (error) {
            setLoading(false)
            errorManager(error)
        } 
    }

    useEffect(() => {
        const from = `${dateNow.anio - 1}-${dateNow.mes}-${dateNow.dia}`
        const to = `${dateNow.anio}-${dateNow.mes}-${dateNow.dia}`
        if (reportUser?._id) {
            getDataTable(reportUser._id, from, to)
        } else {
            getDataTable(user._id, from, to)
        }
    }, [])

    return {
        dataTable,
        handlePay,
        confirmPay,
        refNumber
    }
}

export default useReportUser