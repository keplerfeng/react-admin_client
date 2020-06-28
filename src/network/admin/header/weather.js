import jsonp from 'jsonp'
import { message } from 'antd'


export function getWeather() {

    return new Promise((resolve, reject) => {
        // 510100 成都
        const url = `http://api.map.baidu.com/weather/v1/?district_id=510100&data_type=all&ak=C8mGzDMxKjmCYGAM76VG1IuGmndNCXui&output=json/xml`
        jsonp(url, {}, (err, data) => {
            if (!err && data.status === 0) {
                const { city } = data.result.location.city
                const { weather } = data.result.now.text
                resolve(city, weather)
            } else {
                message.error('获取天气失败')
            }
        })
    })

}

