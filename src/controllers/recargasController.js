import request from "../services/request"
import urlApi from "../services/urlApi"

export const getAllRecargas = async () => await request.get(urlApi + '/transaction')

export const getRecargasOfUser = async ({_id}) => await request.get(urlApi + '/transaction/'+_id)

export const postRecharge = async ({ _id, amount }) => await request.post(urlApi + "/transaction", { _id, amount })




