import React from 'react';

function Slider() {
  return (
    <>
      <div style={{ height: "65vh" }}>
        <div id="carouselExampleIndicators" className="carousel w-65 mx-5 my-1 row rounded-2" style={{ height: "65vh", objectFit: "contain" }}>
          <div className="carousel-indicators rounded-2">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner h-55 w-55 col-5 rounded-2" style={{ height: "65vh", objectFit: "contain" }}>
            <div className="carousel-item active" style={{ height: "65vh", objectFit: "contain" }}>
              <img src={process.env.PUBLIC_URL + '/5303219.jpg'} className="d-block w-100 h-100 img-fluid" alt="..." style={{ objectFit: "contain" }} />
            </div>
            <div className="carousel-item rounded-2" style={{ height: "65vh", objectFit: "contain" }}>
              <img src={process.env.PUBLIC_URL + '/27331.jpg'} className="d-block w-100 h-100 img-fluid" alt="..." style={{ objectFit: "contain" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='d-flex justify-content-center align-items-center ' style={{boxShadow:"5px 10px 18px #888888"}}>
        <button type="button" className="btn btn-light mx-2 my-2">Popular Coupons</button>
        <button type="button" className="btn btn-light mx-2 my-2">Ending Soon</button>
        <button type="button" className="btn btn-light mx-2 my-2">Latest Coupons</button>
      </div>
    </>
  );
}

export default Slider;
