const gateway = require('fast-gateway');

const PORT = 4000;

const authUser=(req,res,next)=>{
if (req.headers && req.headers.token && req.headers.token !='' ) {
    next();
}else{
    res.setHeader('Contant-type','application/json');
    // res.statusCode(401);
    throw new Error("UnAuthorised User");
}
}
const server = gateway({
    routes:[
        {
            // proxyType: 'https',
            prefix:'/user',
            target:'http://localhost:4001/',
            methods:['GET','POST'],
            middlewares:[authUser]
        },
        {
            // proxyType: 'https',
            prefix:'/contact',
            target:'http://localhost:4002/',
            methods:['GET','POST'],
            // middlewares:[authUser]
        }
    ]
})


server.get("/testing",(req,res)=>{
    res.send("Yes, Api gateway is working")
});

server.start(PORT).then(server=>{
    console.log("Api gateway is running on PORT:",PORT);
});

