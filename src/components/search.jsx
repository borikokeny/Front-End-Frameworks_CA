import React, { useState } from "react";

const Search = ({onSearch}) => {
  const [searchProduct, setSearchProduct] = useState("");

  const handleChange = (e) => {
    onSearch(e.target.value) ;
    setSearchProduct(e.target.value);

    // const filteredProducts = products.filter((product) => 
    //   product.title.toLowerCase().includes(setSearch.toLowerCase())
    // );

    // setFilteredProduct(filteredProducts);
    
  }

  return (
    <section>
      <form>
        <input type="search" value={searchProduct} onChange={handleChange} placeholder="Search for Product" className="ps-2 block w-400 mt-5 rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </form>
    </section>
  );
}

export default Search;