import React from "react";
import Ratings from "../components/ratings";
import Reviews from "./reviews";

const ProductCard = ({ product }) => {
  const { title, description, price, discountedPrice, image, rating, tags, reviews, id } = product;
  const gotDiscount = discountedPrice < price;

  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="">
        <img src={image.url} alt={title} className="object-cover mt-6 w-96 h-60" />
      </div>
      <div className="">
        {gotDiscount ? (
          <div className="mb-3">
          <span className="text-red-700 font-bold pe-2">{discountedPrice} kr</span>
          <span className="line-through text-sm">{price} kr</span>
          </div>
         ) : (
          <p className="text-red-700 font-bold mb-3">{discountedPrice} kr</p>
         )}
      <div>
       - {parseInt(((price - discountedPrice) * 100) / price)}%
      </div>
      <h2 className="font-bold mt-2">{title}</h2>
      <p>{description}</p>
      <Ratings rating={rating} />
        <Reviews key={reviews} reviews={reviews} />
          {product.tags.map((tag, index) => (
            <span key={index} className="pe-2">
              {tag}
            </span>
          ))}
       <button className="rounded-none bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Add to cart</button></div>
    </div>
  );
};

export default ProductCard;