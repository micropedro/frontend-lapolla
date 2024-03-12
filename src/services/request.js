import axios from "axios";
const request = {
    post: async (url, body) => {
        const localToken = JSON.parse(localStorage.getItem('user'))
        axios.defaults.headers.post['Authorization'] = `Bearer ${localToken?.token || ''}`
        return await axios.post(url, body)

    },
    get: async (url) => {
        const localToken = JSON.parse(localStorage.getItem('user'))
        axios.defaults.headers.get['Authorization'] = `Bearer ${localToken?.token || ''}`
        return await axios.get(url)

    }
}

export default request