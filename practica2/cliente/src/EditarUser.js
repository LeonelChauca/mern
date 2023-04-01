import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export const EditarUser = () => {

  const params=useParams();
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("");

  useEffect(() => {
    axios.post('/api/usuario/obtenerdatausuario',{idUser: params.idUser}).then(res=>{
      console.log(res.data[0])
      const datausuario= res.data[0];
      setnombre(datausuario.nombre)
      setemail(datausuario.email)
      settelefono(datausuario.telefono)
    })
  }, [])
  
  function editarUs(){
    var actualizarUser={
      nombre:nombre,
      email:email,
      telefono:telefono,
      idUser:params.idUser
    }
    axios.post('/api/usuario/actualizaUser',actualizarUser)
    .then(res=>{
      alert(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2 className='mt-4'>Editar usuario</h2>
      </div>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb3'>
            <label htmlFor='nombre' className='form-label'>Editar nombre</label>
            <input type="text" className='form-control' value={nombre} onChange={(e)=>{setnombre(e.target.value)}}></input>
          </div>
          <div className='mb3'>
            <label htmlFor='email' className='form-label'>Editar email</label>
            <input type="email" className='form-control' value={email}  onChange={(e)=>{setemail(e.target.value)}}></input>
          </div>
          <div className='mb3'>
            <label htmlFor='telefono' className='form-label'>Editar telefono</label>
            <input type="text" className='form-control' value={telefono}  onChange={(e)=>{settelefono(e.target.value)}}></input>
          </div>
          <button onClick={editarUs} className='btn btn-success'>Enviar</button>
        </div>
      </div>
    </div>
  )
}
