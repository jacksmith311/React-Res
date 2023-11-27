import React from 'react';
import Popular from './Popular';
// import './Glasses.css';

function Glasses() {
    const ImageSrc = `${process.env.PUBLIC_URL}/shopping.jpg`;

    return (
        <>
        <div className="container">
            <div className='row my-5'>
                <div className='col-2'></div>
                <div className="col-8">
                    <div className="Girl roundeds position-relative" style={{ height: '15rem' }}>
                        <img
                            src={ImageSrc}
                            alt=""
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '15rem',
                                minHeight: '12rem',
                                borderRadius: '20px'
                            }}
                            className="img-fluid rounded"
                        />
                        <div className="position-absolute top-50 start-0 translate-middle-y text-white">
                            <div className='container-md pt-5'> 
                                <h1 className='display-4'>AMAZING SUNGLASSES</h1>
                                <h5 className='lead'>Get 40% off on selected items</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
        <Popular/>
        </>
    );
}

export default Glasses;
