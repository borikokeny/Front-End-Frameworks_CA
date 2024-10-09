import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/cart/context/CartContext";
import { IoTrashBinOutline } from "react-icons/io5";
import { TiMinus, TiPlus } from "react-icons/ti";

const Checkout = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="grid w-96 place-items-center border drop-shadow-md mt-6">
      <h1 className="text-2xl mt-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="mb-6">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-3 mt-3 w-64 pb-3 border-b-2">
              <div className="">
              <img src={item.image.url} alt={item.title} className="object-cover mt-6 size-24"/>
              </div>
              <div className="col-span-2 ms-4 mt-6">
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-red-600 font-medium mt-1">{item.price} NOK</p>
              <div className="grid grid-cols-4 gap-1 w-36 mt-1">
              <button onClick={() => decreaseQuantity(item.id)} className="text-lg"><TiMinus /></button>
              <p className="font-medium ps-1">{item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)} className=""><TiPlus /></button>
              <button onClick={() => removeFromCart(item.id)}><IoTrashBinOutline /></button>
              </div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 mt-3 w-64">
            <div className=""></div>
          <h3 className="col-span-2 ms-4  font-bold">Total: {calculateTotal()} NOK</h3>
          <div className=""></div>
          <Link to="/checkoutSuccess" onClick={() => clearCart()} className="col-span-2 mt-8 mb-8 w-full rounded-none text-center bg-red-600 text-white px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset hover:bg-red-500">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};


export default Checkout;