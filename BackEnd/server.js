const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    get(req.url, req, res)
})

server.listen(port, hostname);

function get(address, res){
    if(address == "/"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/main.html", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/html")})
        return
    }
    if(address == "/css/mainMenu.css"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/css/mainMenu.css", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/css")})
        return
    }
    if(address == "/css/everySiteCSS.css"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/css/everySiteCSS.css", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/css")})
        return
    }
    if(address == "/css/stuffToLearn.css"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/css/mainMenu.css", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/css")})
        return
    }
}

function sendFileContent(err, data, res, dataType){
    if(err){
        res.writeHead(200, {'Content-Type': `text/plain; charset=UTF-8`});
        res.send(err);
        return;
    }
    res.writeHead(200, {'Content-Type': `${dataType}; charset=UTF-8`});
    res.end(data);
}