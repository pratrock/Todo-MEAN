var express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
var mongoose = require("mongoose");
const router = require("./routes/routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", router);
let password = "sMO9m1khbVa9nlsB";
mongoose
  .connect(
    `mongodb+srv://parmarp9373:${password}@cluster0.ezxhkyx.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
