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
    <ProductList products={products}/>
    </div>
  )
}

export default Home





// import React from "react";

// function Home() {
//   return (
//     <div id="main-container" className="container mx-auto">
//       <main className="text-center"> 
//         <h1>
//           Hi
//         </h1>
//       </main>
//     </div>
//   )
// }

// export default Home
