import request from "../services/request"
import urlApi from "../services/urlApi"
import useErrorManager from "./useErrorManager"
import useRecargasStore from "../store/recargasStore"
import useNotify from "./useNotify"
import useLoadingStore from "../store/loadingStore"
import usePerfil from "./usePerfil"

const useRecargas = () => {
    const { getUser } = usePerfil()
    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()
    const { userRecharge, setUserRecharge, userCi, setUserCi, setModal, amountToRecharge, setAmountToRecharge } = useRecargasStore()
    const { notify } = useNotify()

    const getUserToRecharge = async () => {
        try {
            const res = await request.get(urlApi + '/user/ci/' + userCi)
            setUserRecharge(res.data.body)
        } catch (error) {
            errorManager(error)
        }
    }

    const confirmRecharge = async () => {
        try {
            setLoading(true)
            const _id = userRecharge._id
            const amount = amountToRecharge
            const res = await request.post(urlApi + "/transaction", { _id, amount })
            if (res) notify.success(res.data.message)
            await getUser()
            reset()
        } catch (error) {
            console.log(error)
            errorManager(error)
        } finally {
            reset()
            setLoading(false)
        }
    }

    const reset = () => {
        setUserRecharge(false)
        setAmountToRecharge(null)
        setUserCi("")
        setModal(false)
    }

    return {
        userRecharge,
        setUserCi,
        getUserToRecharge,
        userCi,
        setModal,
        confirmRecharge,
        setAmountToRecharge,
        amountToRecharge
    }
}

export default useRecargas