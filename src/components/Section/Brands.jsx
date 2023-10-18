/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Brands = ({logo}) => {
    console.log(logo);

    return (
        <div>
<div className="card w-80 bg-base-100 shadow-xl image-full">
  <figure><img src={logo.image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl mx-auto font-bold text-yellow-500">{logo.name}</h2>
  </div>
</div>
        </div>
    );
};

export default Brands;