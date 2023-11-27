import React from 'react';
import PagesTwo from './PagesTwo';
// import Page from './Page';

function Category() {
  const cardData = [
    { id: 1, imageSrc: process.env.PUBLIC_URL + './fashion.jpg', title: 'Fashion' },
    { id: 2, imageSrc: process.env.PUBLIC_URL + './food.jpg', title: 'Food' },
    { id: 3, imageSrc: process.env.PUBLIC_URL + './cloud.jpg', title: 'Cloud' },
    { id: 4, imageSrc: process.env.PUBLIC_URL + './teddy.jpg', title: 'Toys' },
    { id: 5, imageSrc: process.env.PUBLIC_URL + './gaming.jpg', title: 'Gaming' },
    { id: 6, imageSrc: process.env.PUBLIC_URL + './phone.jpg', title: 'Phones' },
    { id: 7, imageSrc: process.env.PUBLIC_URL + './travel.jpg', title: 'Travel' },
    { id: 8, imageSrc: process.env.PUBLIC_URL + './movie.jpg', title: 'Movies' },
  ];

  return (
    <>
    <div className='row'>
      <div className='col-2'></div>
      <div className='col-8' >
      <div className=' deals d-flex justify-content-evenly container-md'>
        <p><h3>Coupons <span className='under p-2'>By Cat</span>egories</h3></p>
        </div>
    <div className="row my-1 container-md ">
      {cardData.map((card) => (
        <div className="col my-2" key={card.id}>
          <div className="card" style={{ width: '6rem', height: '6rem' }}>
            <img src={card.imageSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              {/* <p className="card-text">{card.title}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
    
      </div>
      <div className='col-2'></div>
   </div>
   <div><PagesTwo/></div>
    </>
    
  );
}

export default Category;
