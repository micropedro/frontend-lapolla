import request from "../services/request"
import urlApi from "../services/urlApi"

export const getAllQuinielas = async () => await request.get(urlApi + '/quiniela')

export const createQuiniela = async () => await request.post(urlApi + '/quiniela')

export const closeGranQuiniela = async () => await request.put(urlApi + '/quiniela')