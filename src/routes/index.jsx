import { createBrowserRouter } from "react-router-dom";
import {MainLayout} from "../layouts/index";


import { Home, Shop, Contact, Product, Checkout, CheckoutSuccess } from '../pages/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "checkoutSuccess",
        element: <CheckoutSuccess />
      }
    ]
  },
  {
    
  }
]);

export {
  router
}