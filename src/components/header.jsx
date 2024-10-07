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
      <nav className="space-x-4">
        <Link to="/shop" className="hover:text-gray-200">Shop</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </nav>
      <div>
          <Link to="/checkout" className="text-2xl me-11"><RiShoppingBasket2Line />
             {cartQuantity > 0 && <p>{cartQuantity}</p>}
       </Link>
      </div>
    </div>
  </header>
  )
}
