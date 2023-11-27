import React from 'react';

function Footer() {
  return (
    <div className='container-fluid bg-dark text-white py-5 my-4'>
      <div className='row justify-content-evenly'>
        <div className='col-md-3'>
          <img src='' alt='' />
         
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cupiditate.</p>
          <button className='btn btn-light image-fluid my-2'>  <img
        src={`${process.env.PUBLIC_URL}./appWing.png`}
        alt="..."
        style={{ width: '45px', height: '50px' }}
      /></button>
          <br />
          <button className='btn btn-light'>
          <img
        src={`${process.env.PUBLIC_URL}./play-store.png`}
        alt="..."
        style={{ width: '50px', height: '50px' }}/>

          </button>
        </div>
        <div className='col-md-2'>
          <ul >
            <h6 className='text-danger'>Company</h6>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Blogs</li>
            <li>Branding</li>
            <li>Career</li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul >
            <h6 className='text-danger'>General</h6>
            <li>Partner with us</li>
            <li>Write to us</li>
            <li>Mobile App</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul >
            <h6 className='text-danger'>Pages</h6>
            <li>Amazon</li>
            <li>Google pay offers</li>
            <li>PayPal Offers</li>
            <li>PhonePe Offers</li>
            <li>Festival Offers</li>
            <li>Banks Offers</li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul >
            <h6 className='text-danger'>More</h6>
            <li>City Offers</li>
            <li>Brand Offers</li>
            <li>Product Offers</li>
            <li>Gift Cards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
