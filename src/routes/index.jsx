import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../components/cart/context/CartContext";
import { MainLayout } from "../layouts/index";
import { Home, Shop, Contact, Product, Checkout, CheckoutSuccess } from '../pages/index';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;





// import { createBrowserRouter } from "react-router-dom";
// import { MainLayout } from "../layouts/index";


// import { Home, Shop, Contact, Product, Checkout, CheckoutSuccess } from '../pages/index';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "shop",
//         element: <Shop />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "product/:productId",
//         element: <Product />
//       },
//       {
//         path: "checkout",
//         element: <Checkout />
//       },
//       {
//         path: "checkoutSuccess",
//         element: <CheckoutSuccess />
//       }
//     ]
//   },
//   {
    
//   }
// ]);

// export {
//   router
// }