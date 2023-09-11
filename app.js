const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));



app.get('/',(req,res)=>{
    res.send('Working Fine');
})



app.listen(port, () => {
    console.log("The Server is up at the ", port);
});