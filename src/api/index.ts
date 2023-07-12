import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:7106'
axios.defaults.headers.common['Content-Type'] = 'application/json'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
}

export const apiPostCall = async (url: string, data?: unknown) => {
  const response = await axios.post(url, data)
  return response
}

export const apiGetCall = async (url: string) => {
  const response = axios.get(url, config)

  return response
}
