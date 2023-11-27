import React from 'react'

function Navbar() {
  
  return (
   <>
   <div className='container-md text-center '>
    <div className='row'>
    <div className='.container-md col-2 '></div>
    <div className='.container-md col-8 ' ><div><nav>
    <div className=" .container-md d-flex justify-content-evenly ">
        <div className='.container-md d-flex justify-content-start text-align-center '> 
        <img className='image' src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" srcset="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button></div>
     
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <form className=" .container d-flex justify-content-center align-items-center "  role="search">
          <input className="form-control " style={{width:'25%'}} type="search" placeholder="Search for brand,category,coupon" aria-label="Search"/>
         <button className="btn btn-danger " type="submit" style={{width:'60%',height:"2rem",marginLeft:'5rem'}} >Login / SIGN UP</button>
        </form>
      {/* </div> */}
    </div>
  </nav></div></div>
    <div className='.container-md col-2'></div></div>


   </div>
   
   
   </>
  )
}

export default Navbar