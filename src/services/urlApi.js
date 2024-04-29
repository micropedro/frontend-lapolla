import { hostLocale, pathLocale, pathProduction } from '../config.json'

const urlApi = hostLocale ? pathLocale : pathProduction

export default urlApi