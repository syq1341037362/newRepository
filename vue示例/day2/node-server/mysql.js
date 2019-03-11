//导入 http 内置模块
const http = require('http');
//导入mysql 模块
const mysql   = require('mysql');
//这个模块可以帮我们解析 URL地址 从而拿到 pathname query
const urlModule = require('url')
//

//创建一个 http 服务器
const server = http.createServer();
//创建一个数据库链接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : '127.0.0.1'
  });

//监听 http 服务器的 request 请求
server.on('request',function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // const url  = req.rul
    const { pathname :url,query} = urlModule.parse(req.url,true);
    var rdata  =  urlModule.parse(req.url,true).query;   //获取参数
   
    console.log(rdata);
    if(url === '/getscript'){
        //console.log(req.url);
        //拼接一个合法的js脚本 这里拼接的是个方法的调用
        //console.log(query.callback);
        //console.log(url);
        //connection.connect();
        var sql = '';
        var a = '';
        if(rdata.id == undefined && rdata.name==undefined){
            sql = `select * from bind `;
            console.log(sql)
        }else if(rdata.id == undefined && rdata.name !=undefined){
            var data = new Date();
            var year = data.getFullYear();
            var month = (data.getMonth()+1).toString().padStart(2,"0");
            var day = data.getDate().toString().padStart(2,"0");
            console.log(day);
            var getdate = year+'-'+month+'-'+day;
            //console.log(getdate)
            sql = `insert into  bind(ctime,name) values('${getdate}','${rdata.name}')`;
            a = '1';
            console.log(sql)
        }else if(rdata.id != undefined && rdata.name ==undefined){
            sql = `delete from bind  where id = ${rdata.id}`;
            a = '1';
            console.log(sql)
        }else{
            sql = `select a.* from bind a `;
            console.log(sql)
        }
        
        var option = {};
        option.status = 200;
        option.data = [];
        var m = new Array();
        //查
        connection.query(sql,function (err, rs) {
                if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
                }
        
            console.log('--------------------------SELECT----------------------------');
            //console.log(rs)
            console.log('------------------------------------------------------------\n\n');  
            if(a!="1"){
                for(v of rs){
                    m.push(v);
                }
                option.data = m;
                var script = `${query.callback}(${JSON.stringify(option)})`;
                res.end(script);
            
                //connection.end();
            }else{
               
                    option.data = m;
                    var script = `${query.callback}(${JSON.stringify(option)})`;
                    res.end(script);
               
            }
        });
        
        //res.end 发送给客户端 客户端去吧这个字符串 当做js代码去解析执行
    }else{
        res.end('404')
    } 
    
    
})




//指定端口号并启动服务器监听
server.listen(1234,function(){
    console.log('server listen at http://127.0.0.1234')
})