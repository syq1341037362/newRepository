//导入 http 内置模块
const http = require('http');
//导入mysql 模块
const mysql = require('mysql');
//这个模块可以帮我们解析 URL地址 从而拿到 pathname query
const urlModule = require('url')
    //

//创建一个 http 服务器
const server = http.createServer();
//创建一个数据库链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vuedatabase'
});

//监听 http 服务器的 request 请求
server.on('request', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });

    // const url  = req.rul
    const { pathname: url, query } = urlModule.parse(req.url, true);
    var rdata = urlModule.parse(req.url, true).query; //获取参数

    console.log(rdata);
    if (url === '/getlunbo') {
        //console.log(req.url);
        //拼接一个合法的js脚本 这里拼接的是个方法的调用
        //console.log(query.callback);
        //console.log(url);
        //connection.connect();
        var sql = `select * from vue_swiper `;
        selectAll(sql, res);

        //res.end 发送给客户端 客户端去吧这个字符串 当做js代码去解析执行
    } else if (url === '/getnewslist') { //获取新闻列表
        var sql = `select * from vue_home_news order by ctime desc limit ${rdata.page}, ${rdata.pagesize}`;
        selectAll(sql, res);
    } else if (url === '/getnewsinfo') { //根据id查询新闻内容
        var sql = `select * from vue_home_news where id = ${rdata.id} `;
        selectAll(sql, res);
    } else if (url === '/getcomment') { //查询留言
        var page = 0;
        var pagesize = 0;

        if (rdata.page != 0) {
            page = (rdata.page * rdata.pagesize);
            pagesize = rdata.pagesize;
        } else {
            page = 0;
            pagesize = rdata.pagesize;
        }
        console.log("111-------rid" + rdata.routeid)
        console.log("2222----id" + rdata.id)
        pageSelect(res, page, pagesize, rdata.id, rdata.routeid)
            // selectAll(sql, res);
    } else if (url === '/insertcomment') { //插入留言
        console.log(rdata)
        insertcomment(res, rdata)
    } else if (url === '/getimgcategory') {
        var sql = 'select * from vue_itemtype'
        selectAll(sql, res);

    } else if (url === '/getphotolistbycateid') {
        var sql = '';
        if (rdata.cateid == 0) {
            sql = `select id,img_url,title,sub_title from vue_imglist order by typeid`
        } else {
            sql = `select id,img_url,title,sub_title from vue_imglist where typeid = ${rdata.cateid}`
        }

        selectAll(sql, res);

    } else if (url === '/getphotoinfo') {
        var sql = `select id,img_url,title,sub_title,typeid,content,click from vue_imglist where id = ${rdata.id}`;
        selectAll(sql, res);
    } else if (url === '/getthumbs') {
        var sql = `select  img,img_one,img_two,img_three,img_four from vue_imglist where id = ${rdata.id}`
        imgthumbs(sql, res);
    } else {
        res.end('404')
    }


})




//指定端口号并启动服务器监听
server.listen(1234, function() {
    console.log('server listen at http://127.0.0.1:1234')
})

//查询
function selectAll(sql, res) {
    console.log(sql)
    var body = {};
    body.status = 0;
    var m = new Array();
    //查
    connection.query(sql, function(err, rs) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        for (v of rs) {
            m.push(v);
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(sql)
        console.log('------------------------------------------------------------\n\n');
        body.message = m;
        //将对象转换为Json字符串
        var script = `${JSON.stringify(body)}`;
        //发送
        res.end(script);
    });


}

//分页查询
function pageSelect(res, page, pagesize, id, rid) {
    var body = {};
    body.status = 0;
    var m = new Array();
    var sql = `select count(1) as max from vue_comment where newsid = ${rid} and type = ${id}`
    console.log(sql)
    connection.query(sql, function(err, rs) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        var max = (rs[0].max);
        if (page >= max) {
            var toast = '没有更多数据了'
            body.toast = toast;
            res.end(JSON.stringify(body));
        } else {
            var selectSql = `SELECT a.* FROM vue_comment a INNER JOIN vue_home_news b on a.newsid = b.id where b.id = ${rid} and a.type=${id} order by a.ctime desc limit ${page},${pagesize}`
                // console.log(selectSql)


            //var selectSql = `select * from vue_comment  limit ${page},${pagesize}`
            connection.query(selectSql, function(err, rs) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                for (v of rs) {
                    m.push(v);
                }
                console.log('--------------------------SELECT----------------------------');
                console.log(selectSql)
                console.log('------------------------------------------------------------\n\n');
                body.message = m;
                body.toast = null;
                //将对象转换为Json字符串
                var script = `${JSON.stringify(body)}`;
                //发送
                res.end(script);
            })
        }
    })
}


//插入数据
function insertcomment(res, params) {
    console.log(params)
    var body = {};
    body.status = 0;
    var sql = `insert into vue_comment(name,type,ctime,content,floor,newsid) 
                select '${params.name}',${params.type},'${params.ctime}','${params.content}' ,(select IFNULL(max(floor)+1,1)  from vue_comment where type = ${params.type} and newsid= ${params.newsid}),${params.newsid}`
    console.log(sql)
    connection.query(sql, function(err, rs) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        body.toast = "发表成功!"
        res.end(JSON.stringify(body));


    })

}

function imgthumbs(sql, res) {
    console.log(sql)
    var body = {};
    body.status = 0;
    var m = new Array();
    //查
    connection.query(sql, function(err, rs) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        m.push({ src: rs[0].img })
        m.push({ src: rs[0].img_one })
        m.push({ src: rs[0].img_two })
        m.push({ src: rs[0].img_three })
        m.push({ src: rs[0].img_four })
        body.message = m
        console.log(m)
        console.log('--------------------------SELECT----------------------------');
        console.log(sql)
        console.log('------------------------------------------------------------\n\n');
        //将对象转换为Json字符串
        var script = `${JSON.stringify(body)}`;
        //发送
        res.end(script);
    });


}