import React, { useEffect, useState } from 'react'
import'./Coupon.css'
import Category from './Category';

function PagesTwo() {
    const cardData = [
        { id: 1, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 2, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 3, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 4, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 5, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 6, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 7, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
        { id: 8, imageSrc: process.env.PUBLIC_URL +'./amazon-png-logo-vector-6701.png', title: 'Amazon ',discribation:'Flat 30% off' },
         ];
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const cardsPerPage = 4;
  
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  
    const handlePageChange = (newPage) => {
      setLoading(true);
      setCurrentPage(newPage);
    };
  
    useEffect(() => {
      
      const fetchData = async () => {
    
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
              <div className="card text-center " style={{ width: '16rem' }}>
              
                <img src={card.imageSrc} className="card-img-top" alt="..." />
                <h5 className="card-title">{card.title}</h5>
                <div className="card-body">
                  <p className="card-text text-success">{card.discribation}</p>
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
    
      </div>
      <div className='col-2'></div>
    </div>
    {/* its ending here  */}
  
        {/* {coupon} */}
        <Category/>

        
</>
  )
}

export default PagesTwo