const express = require('express');
var app = express();
app.listen(3002, () => {
    console.log("Server running on port 3002");
});

app.get("/", (req, res, next) => {
    res.json("Hello from sepet-service");
   });

