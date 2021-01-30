let express = require("express")();
let mysql = require("mysql");

express.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

let sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "kaola"
})
sql.connect();

//登录
express.get("/log", (request, response) => {
    let phonenumber = request.query.phonenumber;
    let password = request.query.password;

    sql.query(`SELECT * FROM loggin WHERE phonenumber="${phonenumber}" AND password="${password}"`, (error, data) => {
        if (error) {
            response.send("error")
        }
        else {
            if (data.length === 0) {
                response.send("error")
            }
            else {
                response.send("success")
            }

        }
    })
})

//注册
express.get("/reg", (request, response) => {
    let phonenumber = request.query.phonenumber;
    let password = request.query.password;

    sql.query(`SELECT * FROM loggin WHERE phonenumber="${phonenumber}"`, (error, data) => {
        if (error) {
            response.send("error")
        }
        if(data){
            if(data.length === 0){
                sql.query(`INSERT INTO loggin (phonenumber,password) VALUES ("${phonenumber}","${password}")`, (error) => {
                    if(error){
                        response.send("error")
                    }
                    else{
                        response.send("success")
                    }
                })
            }
            else{
                response.send("error")
            }
        }
    })
})

//添加购物车

express.get("/cun", (request, response) => {
    let goodsDesc = request.query.goodsDesc;
    let goodsPrice = request.query.goodsPrice;
    let goodsCount = request.query.goodsCount;


    sql.query(`INSERT INTO goodsinfo (goodsDesc,goodsPrice,goodsCount) VALUES ("${goodsDesc}","${goodsPrice}","${goodsCount}")`, (error, data) => {
        if (error) {
            console.log(error)
            response.send("error")
        }
        else {
                response.send("success")
        }
    })
})

//获取数据
express.get("/kaolauser", (request,response) => {
    sql.query(`SELECT * FROM goodsinfo`, (error, data) => {
        if (error) {
            response.send("error")
        }
        else {
            response.send(data)
        }
    })
})

//删除
express.get("/delete", (request, response) => {
    let goodsDesc = request.query.goodsDesc;
    sql.query(`DELETE FROM goodsinfo WHERE goodsDesc="${goodsDesc}"`, (error, data) => {
        if (error) {
            response.send("error")
        }
        else {
            response.send("success")
        }
    })
})

//结算

express.get("/jiesuan", (request,response) => {
    sql.query(`SELECT * FROM goodsinfo`, (error, data) => {
        if (error) {
            response.send("error")
        }
        /* if(data === 0){
            return;
        } */
        else {
            response.send(data)
        }
    })
})







express.listen(8080)
console.log("server is running at " + 8080)