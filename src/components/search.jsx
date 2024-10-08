import React, { useState } from "react";
import useApi from "../hooks/api";

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
      <form>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={inputValue}
          autoFocus={false}
        />
        </form>
        {/* {filteredProducts.length > 0 && (
          <div>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                href={`/product/${product.id}`}
              >
                <img
                  src={product.image.url}
                  alt={product.title} className="object-cover mt-6 h-48 w-96"
                />
                <p>{product.title}</p>
              </div>
            ))}
          </div>
        )} */}
            {filteredProducts.length > 0 && (
          <div className="grid grid-cols-4 gap-4 border-b-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                href={`/product/${product.id}`}
              >
                <img
                  src={product.image.url}
                  alt={product.title} className="object-cover mt-6 h-48 w-96"
                />
                <p>{product.title}</p>
              </div>
            ) )}
          </div>
        )}
    </div>
  );
}