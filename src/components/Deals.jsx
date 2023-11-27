// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import Link from '@mui/material/Link';
import './Deals.css';
function Deals() {
    // const [Color,setColor] = useState(false)

       
  
  
   
  return (
    <>
    <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid d-flex ">
    <div className='d-flex justify-content-start'><Link className="navbar-brand ">Navbar</Link></div>
    
   
     <div className=' d-flex justify-content-center col-8'><input className="form-control me-10" type="search" placeholder="Search For Brand,caterory,coupon" aria-label="Search" style={{boxShadow:"5px 10px 18px #888888"}}/></div> 
     <div className='d-flex justify-content-end my-1'> <button className="btn btn-danger text-white" type="submit" style={{boxShadow:"5px 10px 18px #888888"}}>LOGIN/SIGN UP</button></div>
  
  </div>
</nav>
        </div>
        <div className='col-2'></div>
      
      </div>;

      <div className='container-fluid bg-black' style={{ height: '4rem' }}>
      <ul className='nav d-flex justify-content-center align-items-center h-100'>
        <li className='nav-item'>
          <Link to="/" className='nav-link text-light px-3'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/deals" className='nav-link text-light px-3'>Deals</Link>
        </li>
        <li className='nav-item'>
          <Link to="/coupon" className='nav-link text-light px-3'>Coupon</Link>
        </li>
        <li className='nav-item'>
          <Link to="/stores" className='nav-link text-light px-3'>Stores</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" className='nav-link text-light px-3'>Contact us</Link>
        </li>
      </ul>
    </div>
         
    </>
  );
}

export default Deals;
