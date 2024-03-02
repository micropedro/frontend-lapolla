import axios from "axios";
const localToken = JSON.parse(localStorage.getItem('user'))
const request = {
    post: async (url, body) => {
        if (localToken) {
            const { token } = localToken
            console.log(token)
            axios.defaults.headers.post['Authorization'] = `Bearer ${token || ''}`
            return await axios.post(url, body)
        } else {
            throw 'Error en la peticion post'
        }
    },
    get: async (url) => {
        if (localToken) {
            const { token } = localToken
            axios.defaults.headers.get['Authorization'] = `Bearer ${token || ''}`
            return await axios.get(url)
        } else {
            throw 'Error en la peticion get'
        }
    }
}

export default request