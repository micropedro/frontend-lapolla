//develop
/* import { pathLocale, pathProduction } from '../config.json'
const env = import.meta.env.VITE_DEVELOPMENT
const urlApi = env === "true" ? pathLocale : pathProduction */

//production
/* import { pathProduction } from '../config.json'
const urlApi = pathProduction */
/* se retira el dev server*/
const urlApi = import.meta.env.VITE_PATH

export default urlApi