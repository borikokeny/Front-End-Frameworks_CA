import { Link } from "react-router-dom";
import Ratings from "../components/ratings";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => {
        const { id, title, price, discountedPrice, image, rating } = product;
        const gotDiscount = discountedPrice < price;

        return (
          <div key={id}>
            <Link to={`/product/${id}`}>
              <img src={image.url} alt={title} className="object-cover mt-6 h-48 w-96" />
            </Link>
            <h2 className="font-bold mt-2">{title}</h2>
            <Ratings rating={rating} />
            {gotDiscount ? (
              <div className="mb-3">
                <span className="text-red-700 font-bold pe-2">{discountedPrice} NOK</span>
                <span className="line-through text-sm">{price} NOK</span>
              </div>
            ) : (
              <p className="text-red-700 font-bold mb-3">{discountedPrice} NOK</p>
            )}
            <Link
              to={`/product/${id}`}
              className="rounded-none bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View product
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

