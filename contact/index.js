const express = require('express');

const app = express();

const PORT = 4002;

const allUsers=[
    {
        "name":"Vikash",
        "phone":"9876543210",
        "email":"test@gmail.com",
        "userId":11
    },{
        "name":"purav",
        "phone":"9876543210",
        "email":"test@gmail.com",
        "userId":12
    },
    {
        "name":"max",
        "phone":"9876543210",
        "email":"test@gmail.com",
        "userId":13
    }
]

app.get('/',(req,res)=>res.send("Welcome to Contact Module"));
app.get('/contacts',(req,res)=>{
    res.json(allUsers);
})


app.listen(PORT,()=>{
    console.log("contact listening on PORT: ",PORT);

})