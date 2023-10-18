/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Displayuser = () => {
    const productView = useLoaderData();
    console.log(productView);
    const [updatedProduct, setUpdateProduct] =useState(productView);

    const handleDelete =(_id)=>{
        console.log(_id);
        const URL = `http://localhost:5000/products/${_id}`;
        fetch(URL,{
            method:"DELETE",
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);

            if(data.deletedCount>0){
                //alert('Data deleted succsessfuly');
            }
                const filtereData = updatedProduct.filter((item) => item._id !==_id)
            setUpdateProduct(filtereData);
        })

    }
    
    return (
        <div>
            <h1>Total data: {updatedProduct.length}</h1>
            <div>
                {
                    updatedProduct.map(view => <div key={view._id}>
                        <div>
                        <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src={view.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{view.name}</h2>
    <h3>{view.brand}</h3>
    <h3>{view.type}</h3>
    <p>{view.price}</p>
    <p>{view.shortDescription}</p>
    <p>{view.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

 </div>
                        <button type='submit' className='btn' onClick={() => handleDelete(view._id)}>Delte</button>
                        <Link to={`/products/${view._id}`}>
                        <button type='submit' className='btn'>Update</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Displayuser;