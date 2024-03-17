import React from "react";
import '../../App.css';


 function Introduction(props) {

        return (
            <div className="introduction">

        <ul>
          <li>
            {props.our_services}
          </li>
          <li>
            {props.our_model}
          </li>
          <li>
            {props.our_prices}
          </li>
        </ul>

            </div>
        );
    }

export default Introduction;