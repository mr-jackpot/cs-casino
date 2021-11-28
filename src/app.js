var express = require("express");
var app = new express();
var port = 4000;

app.listen(port, (err) => {
  console.log("Application is running on port " + port);
});

app.use("/", require("./routes/router"));
