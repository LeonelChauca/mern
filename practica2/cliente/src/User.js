
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export const User = ({usuario}) => {

  const navegar=useNavigate()
  function borrarusuario(idUser){
    axios.post('/api/usuario/borrarUsuario',{idUser: idUser}).then(res=>{
      console.log(res.data)
      alert(res.data)
      navegar(0);
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <tbody>
      <tr>
        <th scope="row">{usuario.idUser}</th>
        <td>{usuario.nombre}</td>
        <td>{usuario.email}</td>
        <td>{usuario.telefono}</td>
        <td>
        <Link to={`/editarusuario/${usuario.idUser}`}><li className='btn btn-success'>Editar</li></Link>
        <button className='btn btn-danger' onClick={()=>(borrarusuario(usuario.idUser))}>borrar</button>
        </td>

      </tr>
      
    </tbody>
  
  )
}
