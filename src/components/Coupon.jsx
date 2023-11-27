import React from 'react'
// public\amazon logo.jpg
// public\amazon-png-logo-vector-6701.png
import { useState,useEffect } from 'react';
import './Coupon.css';
import Page from './Page';
function Coupon() {
    const cardData = [
        { id: 1, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 2, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 3, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 4, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 5, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 6, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 7, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 8, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 9, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 10, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 11, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 12, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 13, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 14, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 15, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
        { id: 16, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'upto 60% off on appliances ',discribation:'upto 60% off on summer Appliances' },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const cardsPerPage = 8;
  
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  
    const handlePageChange = (newPage) => {
      setLoading(true);
      setCurrentPage(newPage);
    };
  
    useEffect(() => {
      // Simulating an asynchronous operation, replace with your actual data fetching logic
      const fetchData = async () => {
        // Simulating a delay, replace with actual fetching logic
        await new Promise(resolve => setTimeout(resolve, 250));
  
        setLoading(false);
      };
  
      fetchData();
    }, [currentPage]);
  
    return (
      <>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
          <div className="container mt-5 m-2">
          <div className="row row-cols-1 row-cols-md-4 g-4 AllCard">
            {loading ? (
             <div class="d-flex justify-content-center">
             <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
           </div>
            ) : (
              cardData.slice(indexOfFirstCard, indexOfLastCard).map((card) => (
                <div className="col" key={card.id}>
                  <div className="card text-center text-success" style={{ width: '16rem' }}>
                    <h3 className="card-title">{card.title}</h3>
                    <img src={card.imageSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{card.discribation}</p>
                      <a href="/" className="btn btn-danger">
                        GRAB NOW
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
  
          <div className="pagination d-flex justify-content-center mt-3">
            <button
              className={`btn btn-primary mx-2 ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
           
            </button>
            <button
              className={`btn btn-warning  ${currentPage === 2 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
            
            </button>
          </div>
        </div>;  
        {/* above pagination is ending here */}
        
       


  
          </div>
          <div className='col-2'></div>
        </div>
        <div className=' deals d-flex justify-content-center container-md'>
        <p><h3>Deals <span className='under p-2'>of the</span>  Day</h3></p>
        </div>
        <Page/>
            </>

    );
  }
  
  export default Coupon;
  