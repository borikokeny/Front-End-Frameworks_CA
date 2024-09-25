import React, { useEffect, useState, Link } from "react";

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

  return (
    <div>
        {products.map((product) => (
          <div>   
            <img src={product.image.url} className="object-cover mt-6 h-48 w-96" alt={product.title} />       
            <h2 className="font-bold">{product.title}</h2>
            {/* <p>{product.description}</p> */}
            <p>{product.price} kr</p>
            <p className="text-red-700 font-bold">{product.discountedPrice} kr</p>
            
            {/* <Link to={`/product/${product.id}`}>View Product</Link> */}
          </div>
        ))}
    </div>
  );
}

export default Shop