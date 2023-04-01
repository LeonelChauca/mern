import React from 'react'
import { User } from './User'
import axios from 'axios';
import { useEffect, useState } from 'react'

export const ListarUser = () => {

  const [datUser, setdatUser] = useState([]);
  useEffect(() => {
    axios.get("./api/usuario/obtenerUser").then(res=>{
      setdatUser(res.data);
    }).catch(err=>{
      console.log(err);
    })

  }, [])

  const listaUser=datUser.map(usuarios=>{
    return(
          <User usuario={usuarios}/>
    )
  })
  

  return (
    <div>
        <h2>Listar Usuario</h2>
        <table className="table">
        <thead>
        <tr>
          <th scope="col">#Id Usuario</th>
          <th scope="col">nombre</th>
          <th scope="col">email</th>
          <th scope="col">telefono</th>
          <th></th>
        </tr>
        </thead>
          {listaUser}
        </table>
    </div>
  )
}
