import request from "../services/request"
import urlApi from "../services/urlApi"

export const getAllQuinielas = async () => await request.get(urlApi + '/quiniela')