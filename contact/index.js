const express = require('express');

const app = express();

const PORT = 4002;

const allContacts=[
    {
        "name":"Vikash",
        "phone":"9876543210",
        "email":"vikas@gmail.com",
        "userId":11
    },
    {
        "name":"Sneha",
        "phone":"9876543210",
        "email":"sneha@gmail.com",
        "userId":11
    },
    {
        "name":"harish",
        "phone":"9876543210",
        "email":"harish@gmail.com",
        "userId":11
    },
    {
        "name":"harish",
        "phone":"9876543210",
        "email":"harish@gmail.com",
        "userId":12
    },
    {
        "name":"purav",
        "phone":"9876543210",
        "email":"purav@gmail.com",
        "userId":12
    },
    {
        "name":"max",
        "phone":"9876543210",
        "email":"max@gmail.com",
        "userId":13
    }
]

    app.get('/',(req,res)=>res.send("Welcome to Contact Module"));
    app.get('/all',(req,res)=>{
        res.json(allContacts);
    })

    app.get('/:userId',(req,res)=>{
        console.log(req.params);

        const userContact = allContacts.filter(row=>row.userId==req.params.userId);
        res.json(userContact);
    })

    app.listen(PORT,()=>{
        console.log("contact listening on PORT: ",PORT);

    })