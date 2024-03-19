import React from 'react';
import '../../App.css';

const ProductDetails = ({ open, onClose, id, name, description, features, image1, image2, websitePrice, mobilePrice, developmentDays } ) => {

    let formattedWebsitePrice = "£" + websitePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let formattedMobilePrice = "£" + mobilePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let formattedDevelopmentDays = ""
    if (developmentDays != 0) {
      formattedDevelopmentDays = <p>Includes <strong>{developmentDays}</strong> development days for installing and configuring your system</p>
    } else {
      formattedDevelopmentDays = <p>per day</p>
    }

    if (!open) return null;
    return (
      <div onClick={onClose} className='modalOverlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          

          <div className='modalBody'>
            <p className='modalCloseBtn' onClick={onClose}>
              X
            </p>

            <div className='modalContent'>
              
              <div className = 'modalHeading'>
              <h1> <strong>{name}</strong></h1>
              </div>

              <p>Website app from {formattedWebsitePrice}</p>              
              <p>Mobile app from {formattedMobilePrice}</p>
              {formattedDevelopmentDays}
              <br></br>

              <ul>
              <h3><strong> Features</strong></h3>
              {features.map((item, i) => {
              return (
                <div key={i}><li>{item}</li></div>
                );
              })}
              </ul>

            </div>

            <div className='modalBtnContainer'>
              <button className='modalbtn1'>
                <span className='bold'>Contact us to discuss</span>
              </button>
              <button className='modalbtn2' onClick={onClose}>
                <span className='bold'>Continue browsing</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  };

export default ProductDetails;