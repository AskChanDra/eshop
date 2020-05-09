const fs = require("fs");


const dataProduct = JSON.parse(fs.readFileSync("./api/data.json", "UTF-8"));




var express = require("express");
var app = express();


app.get("/product", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.json(dataProduct);
});


app.listen(2020, () => {
  console.log("Server running at port http://localhost:2020/");
});