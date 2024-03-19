import React from 'react';

const ProductDetails = ({ open, onClose, id, name, description, features, image1, image2, websitePrice, mobilePrice, developmentDays } ) => {

    if (!open) return null;
    return (
      <div onClick={onClose} className='modalOverlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <img src={image1} alt='/' />

          <div className='modalBody'>
            <p className='modalCloseBtn' onClick={onClose}>
              X
            </p>

            <div className='modalContent'>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>{features}</p>

              <p>{websitePrice}</p>              
              <p>{mobilePrice}</p>
              <p>{developmentDays}</p>
            </div>

            <div className='modalBtnContainer'>
              <button className='modalbtn1'>
                <span className='bold'>Add to Basket</span>
              </button>
              <button className='modalbtn2' onClick={onClose}>
                <span className='bold'>Close</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  };

export default ProductDetails;