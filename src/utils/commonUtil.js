// 日期格式化，返回值形式为yy-mm-dd
export function formatDataTime(date) {
    if (!date || typeof (date) === 'string') {
        this.error('参数异常，请检查...');
        console.log(11);
        
    }
    var y = date.getFullYear(); // 年
    var m = date.getMonth() + 1; // 月
    var d = date.getDate(); // 日

    // 获取时分秒
    var hour = date.getHours(); // 时
    var minute = date.getMinutes(); // 分
    var second = date.getSeconds(); // 秒

    if (m < 10) {
        m = '0' + m;
    }
    if (d < 10) {
        d = '0' + d;
    }

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

    return y + '-' + m + '-' + d + ' ' + hour + ':' + minute + ':' + second;
}
