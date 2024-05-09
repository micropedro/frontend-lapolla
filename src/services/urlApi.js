import { pathLocale, pathProduction } from '../config.json'
import { hostLocale } from './hostLocale'
const urlApi = hostLocale ? pathLocale : pathProduction

/* const urlApi = pathProduction */

export default urlApi