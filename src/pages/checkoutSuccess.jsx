import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div id="main-container" className="container mx-auto">
      <main className="text-center"> 
        <h1>
          Thank you for your purchase!
        </h1>
        <Link to="/shop" className="mt-11 rounded-none bg-red-600 text-white w-1/4 px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset hover:bg-red-500">Continue Shopping</Link>
      </main>
    </div>
  )
}

export default CheckoutSuccess