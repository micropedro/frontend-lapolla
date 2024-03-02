import axios from "axios";
const localToken = JSON.parse(localStorage.getItem('user'))
if (localToken) {
    const { token } = localToken
    axios.defaults.headers.post['Authorization'] = `Bearer ${token || ''}`
}


const request = {
    post: async (url, body) => await axios.post(url, body),
    get: async (url) => await axios.get(url)
}

export default request