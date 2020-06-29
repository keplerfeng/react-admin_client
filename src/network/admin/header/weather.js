import { http } from '../../ajax'
export function getWeather() {
    const url = `http://localhost:3001/getWeather`
    // 510100 成都
    // http://api.map.baidu.com/weather/v1/?district_id=510100&data_type=all&ak=C8mGzDMxKjmCYGAM76VG1IuGmndNCXui&output=json/xml
    return http(url, {}, "GET")

}

