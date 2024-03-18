import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Display = () => {
    const[data,setData]=new useState([])
    const getData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(  ()=>  {getData()},[])
  return (
    <div>

    <Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Product Id</th>
      <th scope="col">Price</th>
     
    </tr>
  </thead>
  <tbody>
   {
    data.map(
        (value,index)=>{
            return  <tr>
            <td scope="row">{value.pname}</td>
            <td>{value.pid}</td>
            <td>{value.pprice}</td>
          
          </tr>
        }
    )
   }
   
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default Display