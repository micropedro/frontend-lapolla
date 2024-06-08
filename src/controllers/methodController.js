import request from "../services/request"
import urlApi from "../services/urlApi"

const updateMethodChangeType = async ({ _id, tipoDeCambio }) => await request.put(urlApi + '/admin/methods/changeType', { _id, tipoDeCambio })

const getChangeTypes = async () => await request.get(urlApi + '/admin/methods/changeType')

export {
    updateMethodChangeType,
    getChangeTypes
}