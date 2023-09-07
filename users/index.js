const express = require('express');

const app = express();

const PORT = 4001;

const allUsers=[
    {
        "username":"Vikash",
        "phone":"9876543210",
        "contactId":11
    },
    {
        "username":"purav",
        "phone":"9876543210",
        "contactId":12
    },
    {
        "username":"max",
        "phone":"9876543210",
        "contactId":13
    }
]

app.get('/',(req,res)=>{
    res.status(200);
    res.send("Welcome to User Module")}
);

app.get('/users',(req,res)=>{
    res.status(200).json(allUsers);
})

app.listen(PORT,()=>{
    console.log("user listening on PORT: ",PORT);

})