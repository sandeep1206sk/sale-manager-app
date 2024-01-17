import React, { useEffect, useState } from 'react'
import {useNavigate } from "react-router-dom"

export default function Register() {
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const  navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    })

  const handlesubmit =async(e)=>{
    if(name==="" || email===""|| address===""|| password===""){
        alert('please enter all input')
    }else{
        e.preventDefault();
        console.log({name,address,email,password});
        try {
            const resp =await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,address,email,password}),
            headers:{'content-type':'application/json'}
        })
        const result = await resp.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result))
        if(resp.status===200){
          alert('register succesfull')
          
          navigate('/')

        }
        } catch (error) {
            console.log(error)
        }}
    }
    

  return (
    <div>
         <div className="row">
        <div className="col-md-4 "></div>
        <div className="col-md-4 ">
        <h2 className=' text-center mt-5 fw-bold'>Registration from</h2>
        <form className=" container mt-5 " onSubmit={handlesubmit}>
                 
                <div className="mb-3">
                     <label  className="form-label fw-bold">Full Name</label>
                      <input type="text" className="form-control border-4 border-dark"  placeholder="enter your full name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                     <label  className="form-label fw-bold">Address</label>
                      <input type="text" className="form-control border-4 border-dark" placeholder="enter your address"value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="mb-3">
                     <label  className="form-label fw-bold">Email</label>
                      <input type="email" className="form-control border-4 border-dark"  placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control border-4 border-dark"  placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            <button type="submit"  className="btn btn-outline-dark border-4 fw-bold" >Register</button>
           
        </form>
        </div>
        <div className="col-md-4 "></div>
    </div>
    </div>
  )
}
