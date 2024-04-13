import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Show() {
    const [users,setUser] = useState([])
    async function fetchData(){
        const result = await axios.get( 'http://localhost:5000/users');
        // console.log(result)
        setUser(result.data);
    } 

    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div className='container'>
      <table className='table table-dark table-sprited'>
        <thead>
          <tr>
            <td>ROll</td>
            <td>Name</td>
            <td>Marks</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((obj)=>{
              return (
                <tr>
                  <td>{obj.roll}</td>
                  <td>{obj.name}</td>
                  <td>{obj.mark}</td>
                  <td>
                    <NavLink to={`/user/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm'>update</button></NavLink>
                    <button className='btn btn-outline-danger btn-sm'>delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Show