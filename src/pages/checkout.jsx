import React from "react";
import { useCart } from "../components/cart/context/CartContext";
import { IoTrashBinOutline } from "react-icons/io5";
import { TiMinus, TiPlus } from "react-icons/ti";

const Checkout = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  // const itemsInCart = cartItems.length

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-row mt-3 w-64 pb-3 border-b-2">
              <div className="basis-1/3">
              <img src={item.image.url} alt={item.title} className="object-cover mt-6 size-24"/>
              </div>
              <div className="basis-2/3 ms-4 mt-6">
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
          <div className="flex flex-row mt-3 w-64">
            <div className="basis-1/3"></div>
          <h3 className="basis-2/3 ms-4  font-bold">Total: {calculateTotal()} NOK</h3>
          </div>
        </div>
        
      )}
    </div>
  );
};


export default Checkout;