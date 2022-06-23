const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    get(req.url, res)
})

server.listen(port, hostname);

function get(address, res){
    if(address == "/"){ //MainPage
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/main.html", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/html")})
        return
    }
    if(address == "/stuffToLearn.html"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/stuffToLearn.html", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/html")})
        return
    }
    if(address == "/homeworks.html"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/homeworks.html", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/html")})
        return
    }
    //JS
    if(address == "/js/main.js"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/js/main.js", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/javascript")})
        return
    }
    if(address == "/js/stuffToLearn.js"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/js/stuffToLearn.js", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/javascript")})
        return
    }
    //CSS
    if(address == "/css/mainMenu.css"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/css/mainMenu.css", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/css")})
        return
    }
    if(address == "/css/everySiteCSS.css"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/css/everySiteCSS.css", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/css")})
        return
    }
    if(address == "/css/stuffToLearn.css"){
        fs.readFile("E:/kod/stronaDoSzkoly/FrontEnd/css/stuffToLearn.css", "utf-8", (err, data) => {sendFileContent(err, data, res, "text/css")})
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
