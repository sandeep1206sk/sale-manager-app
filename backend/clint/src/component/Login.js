import React, { useEffect } from 'react'
import{useNavigate} from 'react-router-dom'

export default function Login() {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const Navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      Navigate('/')
    }
  })

  const handlelogin=async()=>{
      console.log("email,password", email,password)
      const result = await fetch("http://localhost:5000/login",{
        method:"post",
        body: JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'}
      });
      const resp = await result.json();
      console.log(resp);
      if(resp.name){
        localStorage.setItem('user',JSON.stringify(resp));
        Navigate('/')
      }
      else{
        alert("enter correct password or email")
      }
  }
  return (
    <>
    <div className="row">
        <div className="col-md-4 "></div>
        <div className="col-md-4 ">
        <h2 className=' text-center mt-5 fw-bold'>Login</h2>
        <form className=" container mt-5 "onSubmit={handlelogin}>
             <div className="form-floating mb-3 " >
                  <input type="email" className="form-control border-4 border-dark" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control border-4 border-dark " id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="button" onClick={handlelogin} className="btn btn-outline-dark border-4 fw-bold">Login</button>
           
        </form>
        </div>
        <div className="col-md-4 " ></div>
    </div>


   
    </>
  )
}
