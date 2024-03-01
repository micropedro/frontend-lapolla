import axios from "axios";
const { token } = JSON.parse(localStorage.getItem('user'))
axios.defaults.headers.post['Authorization'] = `Bearer ${token || ''}`

const request = {
    post: async (url, body) => await axios.post(url, body),
    get: async (url) => await axios.get(url)
}

export default request