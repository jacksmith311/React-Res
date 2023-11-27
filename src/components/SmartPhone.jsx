import React from 'react';
import './Coupon.css'
import Footer from '../layout/Footer';

function SmartPhone() {
  return (
    <>
    <div className='container my-5 mb-5' >
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8  ' style={{backgroundColor:"pink",boxShadow:"5px 10px 18px #888888",borderRadius:"25px"}}>
            <div className='row'>
          <div className='col-md-6 p-5'>
            <div className='my-1'>
              <span className='text-danger'><h1>Want to be a <br />part of our team</h1></span>
              <p>Be a part of the best site for discount <br /> coupons.</p>
             
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-end '>
            <img
              src={`${process.env.PUBLIC_URL}/SmartPhone.jpg`}
              alt="SmartPhone"
              style={{ width: "100%", height: "auto", maxHeight: '22rem', minHeight: '12rem', boxShadow: "5px 10px 18px #888888", borderRadius: "25px" }}
              className="img-fluid"
            />
          </div>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
    </div>;
    {/* it ending here  */}


     <div className='row'>
        <div className='col-2'></div>
        <div className='col-8' style={{boxShadow:'5px 10px 18px #888888'}}>
            <div className='row'>
            <div className='container col-md-6' >
             <img src={`${process.env.PUBLIC_URL}/Summer-sale.jpg`} alt='' style={{ width: "100%", height: "auto", maxHeight: '30rem', minHeight: '15rem', boxShadow: "5px 10px 18px #888888", borderRadius: "25px" }}
              className="img-fluid" />
            </div>
            <div className='col-md-6 my-2'>
                <div>
                    <h1><span className='under'>Popular</span>Categories</h1>
                </div>
                <div className='table-responsive'>
            <table  className="table table-bordered ">

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Flight</td>
      <td>Bus</td>
      <td>Enterainment</td>
      <td>Jewellery</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Medicines</td>
      <td>Hosting</td>
      <td>Flowers</td>
      <td>Beauty</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>OTT</td>
      <td >Bills</td>
      <td>Kids</td>
      <td>Travels</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Food</td>
      <td >Eyewear</td>
      <td>Lifestyle</td>
      <td>Kitchen</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Recharge</td>
      <td >Electronic</td>
      <td>Hotel</td>
      <td>Footwear</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Lab</td>
      <td >Educations</td>
      <td>Services</td>
      <td>Furniture</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Fashion</td>
      <td >Pizza</td>
      <td>Bike</td>
      <td>Novelties</td>
    </tr>
  </tbody>
</table>
            </div>
            </div>

        </div>
        <div className='col-2'></div>
     </div>
     </div>
     <Footer/>

   </>
  );
}

export default SmartPhone;
