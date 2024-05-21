/* import { pathLocale } from '../config.json' */
import { pathProduction } from '../config.json'
/* const env = import.meta.env.VITE_DEVELOPMENT */
//const urlApi = env === "true" ? pathLocale : pathProduction
const urlApi = pathProduction
export default urlApi