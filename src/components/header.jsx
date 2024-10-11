import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useCart } from "./cart/context/CartContext";

export default function Header() {
  const { cartQuantity } = useCart();
  return (
    <header className="shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 flex-wrap">
        <div className="w-1/3 md:w-auto text-lg font-bold">
          <Link to="/" className="hover:text-gray-200">
            <img src={Logo} className="w-full md:w-1/3" alt="Logo" />
          </Link>
        </div>
        <nav className="w-full md:w-auto flex justify-center space-x-4 md:space-x-24 mt-4 md:mt-0">
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
        </nav>
        <div className="w-full md:w-auto flex justify-end mt-4 md:mt-0">
          <Link to="/checkout" className="relative text-3xl">
            <RiShoppingBasket2Line />
            {cartQuantity > 0 && (
              <span className="absolute text-sm bottom-3 -right-2 px-2 rounded-full bg-red-600 text-white">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
