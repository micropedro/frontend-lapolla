import request from "../services/request"
import urlApi from "../services/urlApi"

export const getAllReports = async () => {
    return await request.get(urlApi + '/report')
}

export const createReport = async (reportDate) => {
    return await request.post(urlApi + '/report', { reportDate })
}

export const deleteReport = async (_id) => {
    return await request.delete(urlApi + '/report/' + _id)
}