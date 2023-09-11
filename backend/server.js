const express = require ("express");
const path = require('path');
//const bodyParser = require("body-parser");

const app = express();
const port =  5000;
const frontendPath=path.resolve("C:/Users/maorize1/Desktop/CareNet/frontend"); // Use forward slashes or escape backslashes
app.use(express.json());

const messageRouter= require("./routes/saveMessages");
app.use("/",messageRouter);

app.use(express.static(path.join(frontendPath,'build')));

//app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.sendFile(path.join(frontendPath, 'build', 'index.html'));
    console.log("get is working");
    //console.log("__dirname: ",__dirname);
   // res.sendFile(path.join("C:\Users\maorize1\Desktop\CareNet\frontend", 'build', 'index.js'))
    //res.send("Hello, World!");
});

app.listen(port, function(){
    console.log('server is running on port: ',port);
});

