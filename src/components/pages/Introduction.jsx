import React from "react";


 function Introduction(props) {

        return (
            <div className="container mx-auto px-4 introduction">

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