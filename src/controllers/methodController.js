import request from "../services/request"
import urlApi from "../services/urlApi"

const updateMethodChangeType = async ({ _id, tipoDeCambio }) => await request.put(urlApi + '/admin/methods/changeType', { _id, tipoDeCambio })


export {
    updateMethodChangeType
}