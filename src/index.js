import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Training from "./Pages/Training";
import Staffing from "./Pages/Staffing";
import Solution from "./Pages/Solution";
import Team from "./Pages/Team";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ProductServices from "./Pages/ProductServices";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/training", element: <Training /> },
  { path: "/staffing", element: <Staffing /> },
  { path: "/solutions", element: <Solution /> },
  { path: "/team", element: <Team /> },
  { path: "/login", element: <Login /> },
  { path: "/registeration", element: <Registration /> },
  { path: "/productservices", element: <ProductServices /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
