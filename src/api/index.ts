import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:7106'
axios.defaults.headers.common['Content-Type'] = 'application/json'

let token

if (typeof window !== 'undefined') {
  // Perform localStorage action
  token = localStorage.getItem('token')
}

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
}

export const apiGetCall = async (url: string) => {
  const response = axios.get(url)
  return response
}

export const apiGetCallProtected = async (url: string) => {
  const response = axios.get(url, config)
  return response
}

export const apiPostCall = async (url: string, data?: unknown) => {
  const response = await axios.post(url, data, config)
  return response
}

export const apiPutCall = async (url: string, data?: unknown) => {
  const response = await axios.put(url, data, config)
  return response
}

export const apiDeleteCall = async (url: string) => {
  const response = await axios.delete(url, config)
  return response
}
