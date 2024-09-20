import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";
import Cart from "../images/Cart.jpg";

export default function Header() {
  return (
    <header className="shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-lg font-bold">
      <Link to="/" className="hover:text-gray-200"><img src={Logo} className="w-20"/></Link>
      </div>
      <nav className="space-x-4">
        <Link to="/shop" className="hover:text-gray-200">Shop</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </nav>
      <div>
        <Link to="/checkout" className=""><img src={Cart} className="w-5"/></Link>
      </div>
    </div>
  </header>
  )
}
