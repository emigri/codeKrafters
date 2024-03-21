import React from "react";

function Wrapper(props) {
  return (

    <div>

    
      <div className="container my-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our current promotions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Select 'Our Products' from the menu to view all of our products
          </p>
      </div>
    
    <div className="wrapper container mx-auto">{props.children}</div>

    </div>

  )
}

export default Wrapper;