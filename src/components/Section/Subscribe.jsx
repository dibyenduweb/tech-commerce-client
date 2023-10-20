/* eslint-disable no-unused-vars */
import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <h2 className='bg-blue-300 w-auto my-6 p-2 m-auto rounded-lg  text-4xl font-bold text-center'>Join our newsletter and get
<span className='text-red-500'> $20</span> discount for your first order</h2>
<div className='mx-96'>
<input type="text" placeholder="Enter your email" className="input input-bordered input-secondary w-full max-w-xs" />
<button className='btn btn-neutral m-2'>subscribe</button>
</div>
        </div>
    );
};

export default Subscribe;