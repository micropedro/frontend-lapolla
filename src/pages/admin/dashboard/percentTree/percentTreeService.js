import request from "../../../../services/request"
import urlApi from "../../../../services/urlApi"

export const getPercentTree = async (_id) => {

    return (await request.get(urlApi + "/percentTree/" + _id)).data.body
}