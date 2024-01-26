const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express();

function middFunction(req, res, next){
    let {url, ip} = req;
    fs.appendFileSync(path.resolve(__dirname,'./access.log'), `${url} ${ip}\r\n`)
    next()
}

app.get('/:id.html', (req, res)=>{
    //console.log(req.params.id);
    res.status(500);
    res.set('aaa','bbbb');
    res.send("express 响应设置");
    //res.end("get parameter of router.......");
})

app.use(middFunction);

app.get('/', (req, res)=>{
    res.send('GET request to the homepage');
})

app.get('/others', (req, res)=>{
    res.redirect('http://www.baidu.com');
})

let checkCodeMiddleware = (req, res, next)=>{
    if(req.query.code === '521'){
        next()
    }else{
        res.send("error rasied")
    }
}

app.get('/setting',checkCodeMiddleware,(req,res)=>{

})

app.listen(4000, ()=>{
    console.log("服务已启动。。。。。。。。")
})