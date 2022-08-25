const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.weight);
  var num2 = Number(req.body.height);

  var cal = Math.floor(num1 / (num2 * num2));

  res.send("<h1>Your BMI is </h1>" + cal);
});

app.listen(3000, function () {
  console.log("my calculator");
});

//
