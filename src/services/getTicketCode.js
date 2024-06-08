import request from "./request"
import urlApi from "./urlApi"
export default async function getTicketCode() {
    try {
        const res = await request.get(urlApi + '/secrettoken')
        const code = res.data.body.ticketCode
        console.log(code)
        return code
    } catch (error) {
        return error
    }
}