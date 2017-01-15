var express = require("express");
var app = express();
var superagent = require('superagent');
var config = require('./config/api.config');

app.use(express.static('static'));

app.get("/", function (request, response) {
    response.sendfile("index.html");
});

app.get("/now/:location", function (request, response) {
    console.log(request.params.location);
    var location = request.params.location;
    var apiKey = config.apiKey;
    var url = "https://api.thinkpage.cn/v3/weather/now.json?language=zh-Hans&unit=c&key=" + apiKey + "&location=" + location;

    superagent.get(url).end(function (err, pres) {
        var res = JSON.parse(pres.text);
        response.json(res);
    });
});

console.log("Web Server listening ......");
app.listen(config.port);
