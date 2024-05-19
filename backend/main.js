process.on('uncaughtException',function(err){
    console.log(err);
})

var http = require('http');
var mysql = require('mysql');
var redis = require('redis');

function Connect(){
    global.conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        database: 'wck'
    })
    global.conn.on('error',Connect);
}
Connect();

async function Redis(){
    global.redis = redis.createClient();
    await global.redis.connect(6379,'127.0.0.1');
    global.redis.on('error',Redis);
}
Redis();

http.createServer(function(req,res){
    var data = '';
    req.on('data',function(chunk){
        data += chunk;
    })
    req.on('end',function(){
        data = JSON.parse(data);
        var spl = req.url.split('/');
        // console.log(req.url);
        var addr = '.';
        for (var i = 2;i < spl.length;i ++)
            addr += '/' + spl[i];
        var module = require(addr);
        res.setHeader('Content-type','text/html; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.statusCode = 200;
        var mod = require(addr);
        // console.log(mod);
        mod.main(req,res,data);
    });
}).listen(17666,function(){
    console.log('WCK Personal Website backend started successfuly.');
});