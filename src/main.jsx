import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";

 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { router } from './routes';

// import './styles/index.css'

// import {
//   RouterProvider
// } from "react-router-dom";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
