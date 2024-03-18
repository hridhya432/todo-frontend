import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
  
 
  const [input,setInput]=new useState(
    { "pname": "",
    "pid": "",
    "pprice":"",
    }
)
const inputHandler =(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readValues=()=>{
    console.log(input)
    axios.post("http://localhost:3005/api/hospital/add",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status == "success") {
                alert("successfully added")
                setInput(
                  { "pname": "",
                  "pid": "",
                  "pprice":"",
                  }
                )
            } else {
                alert("something went wrong")
            }
        }
    )
    }
return (
<div>
<Navbar/>
<div className="container">
<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <div className="row g-4">
        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label"> Product Name</label>
            <input type="text" className="form-control" name='pname' value={input.pname} onChange={inputHandler} />
        </div>
        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Product Id</label>
        <input type="text" className="form-control"  name='pid' value={input.pid} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Price</label>
        <input type="text" className="form-control"  name='pprice' value={input.pprice} onChange={inputHandler}/>
        </div>
       
        
        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <button className="btn btn-success" onClick={readValues}>Submit</button>
        </div>
    </div>

    </div>
</div>
</div>


    </div>
  )
}

export default Add