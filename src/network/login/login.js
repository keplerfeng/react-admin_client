import { http } from '../ajax'

export function userLogin(data) {
    console.log(data);
    
    return http("https://easy-mock.com/mock/5ef43c0ea3825c676e5f3140/lalala/login", data, "POST")
}