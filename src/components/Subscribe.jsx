import React from 'react';
import SmartPhone from './SmartPhone';

function Subscribe() {
  return (
    <>
    <div className='row' style={{backgroundColor:"#eae0e0"}}>
      <div className='col-2'></div>
      <div className='col-8 row' style={{backgroundColor:"whitesmoke"}}>
        <div className='col-md-6'style={{boxShadow:"5px 10px 18px #888888",borderRadius:"25px"}}>
          <img
            src={`${process.env.PUBLIC_URL}./Mail-sent.jpg`}
            alt="..."
            style={{ width: "100%", height: "auto", maxHeight: '20rem', minHeight: '12rem',boxShadow:" box-shadow: 5px 10px 18px #888888;",borderRadius:"25px" }}
            className="img-fluid"
          />
        </div>
        <div className='col-md-6'>
          <div className='my-1'>
            <h1>Subscribe to our <br /> Newsletter!</h1>
            <p>Be the first to get exclusive offers <br /> and the latest news</p><br />
          </div>
          <div className="container-fluid">
    <form  role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{boxShadow:"5px 10px 18px #888888"}}/> <br />
      <button className="btn btn-danger mx-2" type="submit" style={{boxShadow:"5px 10px 18px #888888"}} >Subcribe</button>
    </form>
  </div>
        </div>
      </div>
      <div className='col-2'></div>
    </div>;
    {/* its end here  */}
    <div className='container my-5'>
      <div className='text-center'>
        <h3>How <span className='under p-2'>It Works?</span></h3>
      </div>
      <div className='row justify-content-evenly'>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <img src={`${process.env.PUBLIC_URL}/signup.jpg`} className="card-img-top img-fluid" alt="Signup" />
          <div className="card-body">
            <h5 className="card-title">Signup</h5>
            <p className="card-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
          </div>
        </div>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <img src={`${process.env.PUBLIC_URL}/Grab-Coupon.jpg`} className="card-img-top img-fluid" alt="Choose Coupon" />
          <div className="card-body">
            <h5 className="card-title">Choose Coupon</h5>
            <p className="card-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
          </div>
        </div>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <img src={`${process.env.PUBLIC_URL}/Grab-Coupon.jpg`} className="card-img-top img-fluid" alt="Grab Coupon" />
          <div className="card-body">
            <h5 className="card-title">Grab Coupon</h5>
            <p className="card-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
          </div>
        </div>
      </div>
    </div>

         <SmartPhone/>

    </>

  );
}

export default Subscribe;
