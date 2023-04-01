const express=require("express");
const router=express.Router();

const mongoose= require("mongoose")
const eschem=mongoose.Schema

const eeschemaUser= new eschem({
    nombre:String,
    email:String,
    telefono:String,
    idUser:String
})

const modelUser= mongoose.model("usuarios",eeschemaUser);
module.exports=router;

//router.get('/ejemplo',(req,res)=>{
//    res.end("holaa ruta ejemplo");
//})

router.post('/agregarUser',(req,res)=>{
    const nuevousuario=new modelUser({
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono,
        idUser:req.body.idUser
    })
    nuevousuario.save()
    .then(result => {
        res.send('usuario agregado correctamente');
    })
    .catch(error => {
        res.send(error);
    });
})

router.get('/obtenerUser',(req,res)=>{
    const query=modelUser.find({}).exec();
    query.then(result=>{
        res.send(result);
    })

})

router.post('/obtenerdatausuario',(req,res)=>{
    const query=modelUser.find({idUser:req.body.idUser}).exec();
    query.then(result=>{
        res.send(result);
    })
})

router.post('/actualizaUser',(req,res)=>{
    modelUser.findOneAndUpdate({idUser:req.body.idUser},{
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono,
    })
    .then(result => {
        res.send("Se edito correctamente");
    })
    .catch(error=>{
        res.send(error);
    })
    
})

router.post('/borrarUsuario',(req,res)=>{
    modelUser.findOneAndDelete({idUser:req.body.idUser})
    .then(result => {
        res.send("se borro correctamente");
    })
    .catch(error=>{
        res.send(error);
    })
    
})
