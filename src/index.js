// const express = require('express');
// const path = require('path');

// const app = express();
// const staticpath = path.join(__dirname,'../public'); 
// app.use(express.static(staticpath));

// app.get("/",(req,res)=>{
//     res.send();
// });

// app.listen(3000,()=>{
//     console.log("app is running at port 8000");
// });



const express = require('express'); 
const path = require('path');
const app = express();

const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath));
console.log(path.join(__dirname,'../public'));
app.get("/",(req,res)=>{
    res.send("hello, This is express....");
});
app.listen(8000,()=>{
    console.log("this is expressJS...");
});


