import React from "react";
import useApi from "../hooks/api";
import Search from "../components/search";
import ProductList from "../components/productList";

function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const { data } = useApi(url);
  const products = data;

  return (
    <div>
      <Search />
      <ProductList products={products} />
    </div>
  );
}

export default Home;