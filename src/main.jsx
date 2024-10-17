import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import ContactComponent from "./pages/ContactUs/Contact";
import Food from "./pages/Food/Food";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProductPage from "./pages/ProductPage/ProductPage";
import SearchResults from "./pages/SearchResult.jsx/SearchResult";

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
        path: "product-page/:productId",
        element: <ProductPage />,
      },
      {
        path: "/product",
        element: <SearchResults/>,
      },
      {
        path: "/search",
        element: <SearchResults/>,
      },
      {
        path: "/tempprod",
        element: <Food/>,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
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

