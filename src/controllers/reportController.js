import request from "../services/request"
import urlApi from "../services/urlApi"

export const getAllReports = async () => {
    const res = await request.get(urlApi + '/report')
    /*  console.log(res) */
    return res
}

export const createReport = async (reportDate) => {
    return await request.post(urlApi + '/report', { reportDate })
}

export const deleteReport = async (_id) => {
    return await request.delete(urlApi + '/report/' + _id)
}

export const getReportsOfDates = async ({ from, to }) => {
    return await request.get(urlApi + '/report/' + from + '/' + to)
}