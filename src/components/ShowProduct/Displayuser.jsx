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
            <div className='grid grid-cols-4 gap-6 px-24'>
                {
                    updatedProduct.map(view => <div key={view._id}>
                        <div className='w-96'>
                        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-56' src={view.image} alt="Shoes" /></figure>
  <div className="card-body te">
    <h2 className="card-title">{view.name}</h2>
    <h3>Brand: {view.brand}</h3>
    {/* <h3>Type: {view.type}</h3> */}
    <p>Price: {view.price}</p>
    {/* <p>{view.shortDescription}</p> */}
    <p>Rating: {view.rating}</p>
    <div className="flex gap-2 justify">
        <button className="btn-sm btn-secondary">Details</button>
    </div>
  </div>
</div>

 </div>
                        <button type='submit' className='btn btn-neutral' onClick={() => handleDelete(view._id)}>Delte</button>
                        <Link to={`/products/${view._id}`}>
                        <button type='submit' className='btn btn-accent'>Update</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Displayuser;