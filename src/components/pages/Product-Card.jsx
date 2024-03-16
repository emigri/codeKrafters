import React from "react";
import '../../App.css';


function ProductCard(props) {
  return (
    <div className="card productCard">
      <div className="img-container">
        <img alt={props.name} src={props.image1} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Product:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default ProductCard;