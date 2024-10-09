import React, { useState } from "react";
import useApi from "../hooks/api";
import { Link } from "react-router-dom";
import Ratings from "../components/ratings";

export default function Search() {
  const url = `https://v2.api.noroff.dev/online-shop`;
  const { data } = useApi(url);

  const productsData = data;

  const [searchValue, setSearchValue] = useState("");

  const inputValue = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  const filteredProducts = productsData.filter((product) => {
    const productTitle = product.title.trim().toLowerCase();
    const searchValueLowerCase = searchValue.toLowerCase();

    return productTitle.includes(searchValueLowerCase) && searchValue !== "";
  });

  return (
    <div>
      <form className="mt-3">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={inputValue}
          autoFocus={false}
          className="ps-2 ms-4 h-10 rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        </form>
            {filteredProducts.length > 0 && (
          <div className="grid grid-cols-4 gap-4 pb-7 border-b-4">
            {filteredProducts.map((product) => {
              const gotDiscount = product.discountedPrice < product.price;
              return (
                <div
                  key={product.id}
                  href={`/product/${product.id}`}
                >
                  <Link to={`/product/${product.id}`}>
                   <img
                    src={product.image.url}
                    alt={product.title} className="object-cover mt-6 h-48 w-96"
                  />
                  </Link>
                  <h2 className="font-bold mt-2">{product.title}</h2>
                  <Ratings rating={product.rating} />
              {gotDiscount ? (
                <div className="mb-3">
                  <span className="text-red-700 font-bold pe-2">{product.discountedPrice} NOK</span>
                  <span className="line-through text-sm">{product.price} NOK</span>
                </div>
              ) : (
                <p className="text-red-700 font-bold mb-3">{product.discountedPrice} NOK</p>
              )}
              <Link
                to={`/product/${product.id}`}
                className="rounded-none bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View product
              </Link>
                </div>
              )
            } 
            )}
          </div>
        )}
    </div>
  );
}