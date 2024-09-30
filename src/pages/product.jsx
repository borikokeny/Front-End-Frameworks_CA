import React, {useState, useEffect} from "react";
import useApi from "../hooks/api";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";
import Ratings from "../components/ratings";


function Product() {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);

  console.log(productId);

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
        const jsonData = await response.json(); 
        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`); 
        }
        setProduct(jsonData.data); 
    } catch (error) {
        console.error("Failed to fetch product:", error);
    }
    };
    fetchProduct();
    }, [productId]);
  



  // let {id} = useParams();
  // const url = `https://v2.api.noroff.dev/online-shop/${id}`;
  // const {data} = useApi(url);

  // const products = data;
  // const {id: productId, title, description, price, discountedPrice, image, rating} = products;

  // const [productDetail, setProductDetail] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setProductDetail(json.data);
  //   }
  //   getData();
  // }, []);

  // const { id: productId, title, description, price, discountedPrice, image, rating } = productDetail;  
  // const gotDiscount = discountedPrice < price;

  

  return (
    <div>

{product ? ( // Conditionally render the product details if the product is available
                <ProductCard product={product} />
            ) : (
                <p>Loading product details...</p> // Render a loading message if product data is not yet available
            )}


      {/* {product ? (<div>
        <h2 product={product}>{product.title}</h2>
        <img src={product.image.url} className="object-cover mt-6 h-48 w-96" alt={product.title} />
        <button>Add to cart</button> 
        </div> 
    ) : (<p>load</p>)} */}
   

    {/* <img src={image.url} className="object-cover mt-6 h-48 w-96" alt={title} />       
    <h2 className="font-bold mt-2">{title}</h2>
    <Ratings rating={rating} />
    {gotDiscount ? (<div className="mb-3">
      <span className="text-red-700 font-bold pe-2">{discountedPrice} kr</span>
      <span className="line-through text-sm">{price} kr</span>
    </div>
     ) : (
      <p className="text-red-700 font-bold mb-3">{discountedPrice} kr</p>
     )} */}
    {/* <Link href={`/product/${id}`} className="rounded-none bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">View product</Link> */}
  </div>
  );
}

export default Product