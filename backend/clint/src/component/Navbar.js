import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = localStorage.getItem('user');
  const Navigate = useNavigate();

  const logout =()=>{
    localStorage.clear();
    Navigate('/register')
  }

  return (
    <>
    <div>
      
      <nav className="navbar navbar-expand-lg bg-dark text-light">
  <div className="container-fluid">
    <h4>SALES MANAGER APP</h4>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    {
        auth?      <ul className="navbar-nav ms-3 ">
        <li className="nav-item ">
          <Link className="nav-link active text-light" aria-current="page" to="/">ADD SALES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/top_5_sales">TOP 5 SALES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/today_total_revanue">TODAY TOTAL REVENUE</Link>
        </li>
        <li><Link onClick={logout} className="nav-link text-light" to="/register">LOGOUT</Link></li>
      
        
      </ul>:<ul className="navbar-nav ms-3 ">
        <li className="nav-item  ">
        <Link className="nav-link text-light" to="/register">REGISTER</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-light" to="/login">LOGIN</Link>
        </li>
 
      
        
      </ul>
      }

    </div>
  </div>
</nav>
    </div>
    </>
  )
}
