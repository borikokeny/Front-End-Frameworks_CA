import { createBrowserRouter } from "react-router-dom";
import {MainLayout} from "../layouts/index";


import { Home, Contact } from '../pages/index';

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
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

export {
  router
}