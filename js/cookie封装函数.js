let cookie = {
    //读取cookie
    get(key) {
        let arr = document.cookie.split("; ");
        let obj = {};
        arr.forEach(function (element) {
            let key = element.split("=")[0];
            let value = element.split("=")[1];
            obj[key] = value;
        })
        return key ? obj[key] : obj
    },
    //删除cookie
    delete(key) {
        document.cookie = key + "=18;expires=" + new Date("1990-09-09 00:00:00")
    },
    //写入cookie
    write(key,value, days) {
        let date = new Date(new Date().setDate(new Date().getDate() + days))
        document.cookie =key + "=" + value + ";expires=" + date;
    }
}