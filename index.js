//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res){
    var cryptoName = req.body.crypto;
    var fiatName = req.body.fiat;
    finalUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD"
        request(finalUrl, function(error, response, body){
            var data = JSON.parse(body);
            var price = data.last;
            var currentDate = data.display_timestamp;
            res.write("<p>The Current Date is: "+ currentDate +" </p>");
            res.write("<h1>The Price Of " + cryptoName + " is " + price  + fiatName + "</h1>");
            res.send();
    });
});


app.listen(3000, function(){
    console.log("Server 3000 has started");
});






