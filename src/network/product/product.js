import { http } from '../ajax'

export const reqProducts = () => {
    const url = 'http://localhost:3001/getProducts'
    return http(url, {}, 'GET')
}