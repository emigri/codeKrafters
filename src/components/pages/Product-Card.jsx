import React from "react";


function ProductCard(props) {
  return (
    <div className="card productCard">
      <div className="img-container">
        <img alt={props.name} src={props.image1} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          <li>
            {props.description}
          </li>
        </ul>
      </div>
      <span onClick={() => props.viewSelectedProduct(props.id)} className="viewSelectedProduct">
        <button className="button">View Details</button>   
      </span>
    </div>
  );
}

export default ProductCard;