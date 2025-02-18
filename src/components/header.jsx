import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useCart } from "./cart/context/CartContext";

export default function Header() {
  const { cartQuantity } = useCart();
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center p-4 flex-wrap md:flex-nowrap">
        <div className="flex-shrink-0">
          <Link to="/" className="hover:text-gray-200">
            <img src={Logo} className="h-12 md:h-16" alt="Logo" />
          </Link>
        </div>
        <nav className="flex-1 flex justify-center lg:me-3 md:me-3 md:justify-end space-x-4 md:space-x-24">
          <Link
            to="/shop"
            className="text-xl font-semibold hover:text-gray-200"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-xl font-semibold hover:text-gray-200"
          >
            Contact
          </Link>
          <Link to="/checkout" className="relative text-2xl">
            <RiShoppingBasket2Line />
            {cartQuantity > 0 && (
              <span className="absolute text-sm bottom-3 -right-2 px-2 rounded-full bg-red-600 text-white">
                {cartQuantity}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
