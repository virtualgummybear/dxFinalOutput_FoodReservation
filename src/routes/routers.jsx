import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductPage from "../pages/orders/productPage";
import ViewOrderPage from "../pages/orders/viewOrderPage";
import AddOrderPage from "../pages/orders/addOrderPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "/ViewOrderPage",
        element: <ViewOrderPage />,
      },
      {
        path: "/AddOrderPage",
        element: <AddOrderPage />,
      },
    ],
  },
]);
