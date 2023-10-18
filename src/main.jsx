import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import AddProduct from "./Menus/AddProduct";
import Brands from "./components/Section/Brands";
import Displayuser from "./components/Displayuser/Displayuser";
import Update from "./components/Update/Update";
// import Product from "./components/Home/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Logodata.json')
        
      },
      {
        path:"/",
        element:<Brands/>,
      },
       
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/displayproduct",
        element:<Displayuser></Displayuser>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path:"/products/:id",
        element:<Update/>,
        loader:({params}) =>{
          console.log(params)
          return fetch(`http://localhost:5000/products/${params.id}`)

        }
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
