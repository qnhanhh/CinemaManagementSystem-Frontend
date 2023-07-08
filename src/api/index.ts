import axios from 'axios'

const baseUrl = 'http://localhost:7106'

export const axiosApi = axios.create({
    baseURL: baseUrl,
    withCredentials: false
})

axiosApi.defaults.headers.common['Content-Type'] = 'application/json'
