import React from "react";
import Ratings from "../components/ratings";
import Reviews from "./reviews";
import { useCart } from "./cart/context/CartContext";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    discountedPrice,
    image,
    rating,
    tags,
    reviews,
    id,
  } = product;

  const { addToCart } = useCart();
  const gotDiscount = discountedPrice < price;

  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="">
        <img
          src={image.url}
          alt={title}
          className="object-cover mt-6 w-full h-96"
        />
      </div>
      <div className="mt-7 ms-6">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-red-600 text-white font-medium p-1 pb-2 px-2 me-2"
          >
            {tag}
          </span>
        ))}
        {gotDiscount ? (
          <div className="mb-3 mt-2">
            <span className="text-3xl font-bold pe-2">
              {discountedPrice} NOK
            </span>
            <span className="text-gray-600 line-through text-2xl ms-1">
              {price} NOK
            </span>
            <span className="text-red-600 font-medium text-xl ms-2">
              {parseInt(((price - discountedPrice) * 100) / price)}% off
            </span>
          </div>
        ) : (
          <p className="text-red-700 text-3xl font-bold mt-4 mb-3">
            {discountedPrice} NOK
          </p>
        )}

        <h2 className="font-bold text-2xl mt-2">{title}</h2>
        <p className="mt-3">{description}</p>
        <div className="mt-3 text-2xl">
          <Ratings rating={rating} />
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-11 mb-30 rounded-none bg-red-600 text-white w-1/4 px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset hover:bg-red-600"
        >
          Add to cart
        </button>

        <div className="mt-11 border-t-2">
          <h2 className="font-semibold">Buyers reviews:</h2>
          {reviews.length === 0 ? (
            <p>There was no review given</p>
          ) : (
            <Reviews key={reviews} reviews={reviews} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
