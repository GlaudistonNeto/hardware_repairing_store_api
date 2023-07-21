var express = require("express");
var app = express();
var router = require("../src/routes/routes");
 
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use("/",router);

app.listen(5000,() => {
    console.log("Server running...");
});
