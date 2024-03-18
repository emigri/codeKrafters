import React from 'react';


const ProductDetails = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='modalOverlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          
          <div className='modalRight'>
            <p className='modalCloseBtn' onClick={onClose}>
              X
            </p>
            <div className='content'>
              <p>Do you want a</p>
              <h1>$20 CREDIT</h1>
              <p>for your first tade?</p>
            </div>
            <div className='btnContainer'>
              <button className='btnPrimary'>
                <span className='bold'>YES</span>, I love NFT's
              </button>
              <button className='btnOutline'>
                <span className='bold'>NO</span>, thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductDetails;