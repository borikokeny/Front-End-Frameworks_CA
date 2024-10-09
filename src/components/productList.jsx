import { Link } from "react-router-dom";
import Ratings from "../components/ratings";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => {
        const { id, title, price, discountedPrice, image, rating } = product;
        const gotDiscount = discountedPrice < price;

        return (
          <div key={id} className="bg-white shadow-md rounded-none overflow-hidden">
            <Link to={`/product/${id}`}>
              <img
                src={image.url}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-4">
              <h2 className="font-bold text-lg truncate">{title}</h2>
              <Ratings rating={rating} />
              {gotDiscount ? (
                <div className="mb-3">
                  <span className="text-red-700 font-bold">{discountedPrice} NOK</span>
                  <span className="line-through text-sm ml-2">{price} NOK</span>
                </div>
              ) : (
                <p className="text-red-700 font-bold mb-3">{discountedPrice} NOK</p>
              )}
              <Link
                to={`/product/${id}`}
                className="inline-block mt-2 w-full text-center bg-red-500 text-white py-2 rounded-none transition-colors duration-300 hover:bg-red-600"
              >
                View product
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;


