import React from 'react'
import { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';

export const AgregarUser = () => {

  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("");

  function agregarUs(){
    var usuario={
      nombre:nombre,
      email:email,
      telefono:telefono,
      idUser:uniquid()
    }
    console.log("presionaste boton");
    axios.post('/api/usuario/agregarUser',usuario)
    .then(res=>{
      alert(res.data)
    })
    .then(err=>{
      console.log(err)
    })
  };


  return (
    <div className='container'>
      <div className='row'>
        <h2 className='mt-4'>Crear un nuevo usuario</h2>
      </div>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb3'>
            <label htmlFor='nombre' className='form-label'>nombre</label>
            <input type="text" className='form-control' value={nombre} onChange={(e)=>{setnombre(e.target.value)}}></input>
          </div>
          <div className='mb3'>
            <label htmlFor='email' className='form-label'>email</label>
            <input type="email" className='form-control' value={email}  onChange={(e)=>{setemail(e.target.value)}}></input>
          </div>
          <div className='mb3'>
            <label htmlFor='telefono' className='form-label'>telefono</label>
            <input type="text" className='form-control' value={telefono}  onChange={(e)=>{settelefono(e.target.value)}}></input>
          </div>
          <button onClick={agregarUs} className='btn btn-success'>Enviar</button>
        </div>
      </div>
    </div>
  )
}
