const express = require("express");

const app = express();

app.get('/home', (req, res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    // console.log(req.headers);

    console.log(req.path);
    console.log(req.ip);
    console.log(req.query);
    console.log(req.get('host'));

    res.end('Hello Express!');
})

app.post('/login', (req, res)=>{
    res.end("post post");
})

app.all('/test', (req, res)=>{
    res.end("all methond");
})

app.all('*', (req, res)=>{
    res.end('404 not found');
})

app.listen(3000, ()=>{
    console.log('服务正在监听3000端口，服务已启动。。。。')
})