import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/index.css";
import { MainLayout } from "../layouts/index";
import {
  Home,
  Shop,
  Contact,
  Product,
  Checkout,
  CheckoutSuccess,
} from "../pages/index";
import { CartProvider } from "../components/cart/context/CartContext";

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