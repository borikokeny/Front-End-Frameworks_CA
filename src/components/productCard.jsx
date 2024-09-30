import React from "react";
import Ratings from "../components/ratings";
import Reviews from "./reviews";

const ProductCard = ({ product }) => {
  const { title, description, price, discountedPrice, image, rating, tags, reviews, id } = product;
  const gotDiscount = discountedPrice < price;

  return (
    <div>
      <img src={image.url} alt={title} className="object-cover mt-6 h-48 w-96" />
      <h2 className="font-bold mt-2">{title}</h2>
      <p>{description}</p>
      <Ratings rating={rating} />
        {gotDiscount ? (<div className="mb-3">
          <span className="text-red-700 font-bold pe-2">{discountedPrice} kr</span>
          <span className="line-through text-sm">{price} kr</span>
        </div>
         ) : (
          <p className="text-red-700 font-bold mb-3">{discountedPrice} kr</p>
         )}
                       <div>
                  Sale: {parseInt(((price - discountedPrice) * 100) / price)}%
                </div>
              
        <Reviews key={reviews} reviews={reviews} />
      
          
          {product.tags.map((tag, index) => (
            <span key={index} className="pe-2">
              {tag}
            </span>
          ))}
       
      
      {/* Display discounted price if available, otherwise display regular price */}
      {/* {discountedPrice && discountedPrice < price ? (
        <DiscountedPrice>Discounted Price: ${discountedPrice}</DiscountedPrice>
      ) : (
        <Price>Price: ${price}</Price>
      )}
      
      {/* Display rating if available */}
      {/* {rating && <Rating>Rating: {rating}/5</Rating>} */}
      
      {/* Display tags */}
      {/* {tags && tags.length > 0 && (
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      )} */}
      
      {/* Display reviews count */}
      {/* {reviews && reviews.length > 0 && (
        <Reviews>{reviews.length} Reviews</Reviews>
      )} */} 
    </div>
  );
};

export default ProductCard;