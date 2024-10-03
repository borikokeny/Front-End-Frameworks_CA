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
        {filteredProducts.length > 0 && (
          <div>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                href={`/product/${product.id}`}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}