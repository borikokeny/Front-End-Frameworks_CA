import React, { useEffect, useState, Link } from "react";
import Ratings from "../components/ratings";
import Search from "../components/search";


const url = "https://v2.api.noroff.dev/online-shop";

function Shop() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getData() {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json.data);
      }
      getData();
    }, []);
  const productList = products.map((product) => {
    const { id, title, description, price, discountedPrice, image, rating } = product;
    const gotDiscount = discountedPrice < price;
 
    return (
      <div className="">
        <img src={image.url} className="object-cover mt-6 h-48 w-96" alt={title} />       
        <h2 className="font-bold mt-2">{title}</h2>
        <Ratings rating={rating} />
        {gotDiscount ? (<div className="mb-3">
          <span className="text-red-700 font-bold pe-2">{discountedPrice} kr</span>
          <span className="line-through text-sm">{price} kr</span>
        </div>
         ) : (
          <p className="text-red-700 font-bold mb-3">{discountedPrice} kr</p>
         )}
        <button type="button" className="rounded-none bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">View product</button>
      </div>
    )
  });
  return (
    <div>
    <Search />
    <section className="grid grid-cols-4 gap-4">{productList}</section>
    </div>
  )
}

export default Shop
// function Shop() { 

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(url);
//       const json = await response.json();
//       setProducts(json.data);
//     }
//     getData();
//   }, []);

//   return (
//     <div>
//         {products.map((product) => (
//           <div>   
//             <img src={product.image.url} className="object-cover mt-6 h-48 w-96" alt={product.title} />       
//             <h2 className="font-bold">{product.title}</h2>
//             {/* <p>{product.description}</p> */}
//             <p>{product.price} kr</p>
//             <p className="text-red-700 font-bold">{product.discountedPrice} kr</p>
            
//             {/* <Link to={`/product/${product.id}`}>View Product</Link> */}
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Shop