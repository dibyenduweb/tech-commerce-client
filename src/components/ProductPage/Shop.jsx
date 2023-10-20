// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const Shop = () => {
//     const [products, setProducts] =useState();
//   const { brandName } = useParams();
//   console.log(brandName);

// useEffect(()=>{
//     fetch(`http://localhost:5000/products`)
//     .then(res=> res.json())
//     .then(data =>
//        console.log(data))
// },[])



  

//   return (
//     <div>
//      <h1>load data{length}</h1>

//     </div>
//   );
// };

// export default Shop;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Shop = () => {
  //const [products, setProducts] = useState([]); 
  const { brandName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product
  console.log(brandName);

  const products = useLoaderData();
  console.log(products);

//   useEffect(() => {
//     fetch(`http://localhost:5000/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  return (
    <div>
      <h1>Loaded data for {brandName}: {products.length}</h1>
      <div className='grid grid-cols-4'>
        {selectedProduct ? (
          <div>
            <button >Go back to the list</button>
            <h1>{selectedProduct.name}</h1>
            <p>Description: {selectedProduct.description}</p>
          </div>
        ) : (
          products.map(product => (
            <div key={product._id} onClick={() => (product)}>
              <img className='w-36' src={product.image} alt="" />
              <h1>{product.name}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
