let express = require("express")();
let mysql = require("mysql");
const port = 8080;

express.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
// 访问数据库
let sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
    database:"stdent",
    timezone:"08:00"

})
sql.connect();
// 接收前端的路由请求
express.get("/zhu",(request,response)=>{
	let username = request.query.username;
	let password = request.query.password;
	sql.query(`INSERT INTO qian (username,password) VALUES ("${username}","${password}")`,(error)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			response.send("success")
		}
	})

})


express.listen(port)
console.log("server is running at " + port)
