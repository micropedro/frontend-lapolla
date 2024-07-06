import request from "../services/request"
import urlApi from "../services/urlApi"
import { dateFormated } from "../services/utils"

const { ayer, hoy } = dateFormated()

/* console.log(ayer, hoy) */
export const getTiketsDeHoy = async () => await request.get(urlApi + '/tickets/' + hoy)

export const getTiketsDeAyer = async () => await request.get(urlApi + '/tickets/' + ayer)

export const getCurrentTicketData = async (qunielaType) => await request.get(urlApi + '/tickets/current/' + qunielaType)