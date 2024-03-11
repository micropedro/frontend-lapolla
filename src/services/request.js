import axios from "axios";
const request = {
    post: async (url, body) => {
        const localToken = JSON.parse(localStorage.getItem('user'))
        if (localToken) {
            const { token } = localToken
            axios.defaults.headers.post['Authorization'] = `Bearer ${token || ''}`
            return await axios.post(url, body)
        } else {
            throw 'No se encontro un token valido err. 01'
        }
    },
    get: async (url) => {
        const localToken = JSON.parse(localStorage.getItem('user'))
        if (localToken) {
            const { token } = localToken
            axios.defaults.headers.get['Authorization'] = `Bearer ${token || ''}`
            return await axios.get(url)
        } else {
            throw 'No se encontro un token valido err. 02'
        }
    }
}

export default request