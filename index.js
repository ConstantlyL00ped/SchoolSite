const express = require("express");
const bodyParser = require("body-parser")
const app = express();

login = "Hello"
password = "World"

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("static/css"))
app.use(express.static("static/js"))

app.listen(3333, "127.0.0.1")

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
	if(req.body.login == login && req.body.pass == password){
		res.sendStatus(200)
		res.end()
	}
	res.sendStatus(304)
	res.end()
})

app.get("/Hello", (req, res) => {
	res.send("Hello")
})