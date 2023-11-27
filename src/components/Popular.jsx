import React from 'react';
import './Coupon.css';
import Subscribe from './Subscribe';

function Popular() {
  return (
    <>
      <div className='row my-5'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className=' d-flex justify-content-center container-md my-2'>
            <p><h3>Popular<span className='under p-2'>Membership</span></h3></p>
          </div>
          <div className='row'>
            <div className='col-6 '>
              <img src={`${process.env.PUBLIC_URL}./traveller.jpg`} alt="..." style={{ width: "100%", height: "auto", maxHeight: '20rem',
                                minHeight: '12rem', }} className="img-fluid" />
            </div>
            <div className='col-6'>
              <img src={`${process.env.PUBLIC_URL}./sales.jpg`} alt="..." style={{ width: "100%", height: "auto", maxHeight: '20rem',
                                minHeight: '12rem', }} className="img-fluid" />
            </div>
            <br></br>
            <div className='col-6 my-2 '>
              <img src={`${process.env.PUBLIC_URL}./food-poster.jpg`} alt="..." style={{ width: "100%", height: "auto", maxHeight: '20rem',
                                minHeight: '12rem', }} className="img-fluid" />
            </div>
            <div className='col-6 my-2'>
              <img src={`${process.env.PUBLIC_URL}./5128.jpg`} alt="..." style={{ width: "100%", height: "auto", maxHeight: '20rem',
                                minHeight: '12rem', }} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className='col-2'></div>
      </div>


      <Subscribe/>
    </>
  );
}

export default Popular;
