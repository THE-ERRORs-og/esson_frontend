import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import ContactComponent from "./pages/ContactUs/Contact";
import Food from "./pages/Food/Food";
import ProductPage from "./pages/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "contact",
        element: <ContactComponent />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "product-page",
        element: <ProductPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

