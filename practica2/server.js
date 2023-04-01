const express=require('express');
const app=express();
const routeUser=require("./routes/usuario");
const bodyParser=require("body-parser");


const archBd=require("./Conex");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/usuario',routeUser);

app.get('/',(req,res)=>{
    res.end('Bienvenido al server');
})

//config server
app.listen(5000,()=>{
    console.log('server  Node  render corriendo');
})