import axios from 'axios'
import { message } from 'antd'

export function http(url, data = {}, type = 'GET') {
    return new Promise((resolve) => {
        let promise
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }
        promise.then(res => {
            resolve(res)
        }).catch(err => {
            message.error('请求出错了' + err.message);
        })
    })
}