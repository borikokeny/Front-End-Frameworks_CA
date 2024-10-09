import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useCart } from "./cart/context/CartContext";


export default function Header() {
  const {cartQuantity} = useCart();
  return (
    <header className="shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-lg font-bold">
      <Link to="/" className="hover:text-gray-200"><img src={Logo} className="w-1/3"/></Link>
      </div>
      <nav className="space-x-24 -me-24">
        <Link to="/shop" className="text-xl font-semibold hover:text-gray-200">Shop</Link>
        <Link to="/contact" className="text-xl font-semibold hover:text-gray-200">Contact</Link>
      </nav>
      <div className="px-8 pt-7 -ms-64">
          <Link to="/checkout" className="text-3xl me-12 relative"><RiShoppingBasket2Line />
             {cartQuantity > 0 && <p className="absolute text-xl bottom-12 w-7 left-7 ms-1 px-2 rounded-full bg-red-600 text-white">{cartQuantity}</p>}
       </Link>
      </div>
    </div>
  </header>
  )
}
