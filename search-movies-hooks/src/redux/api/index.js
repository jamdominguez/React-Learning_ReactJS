/**
 * Axios config file
 */
import axios from 'axios'

const SECURE_CONNECTION = true
const PROTOCOL = SECURE_CONNECTION ? 'https' : 'http'
const API_KEY = '6e290af'
const API_END_POINT = `${PROTOCOL}://www.omdbapi.com/?apikey=${API_KEY}`

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: API_END_POINT + url,
    data,
    headers
})