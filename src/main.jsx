import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import OurFleet from "./components/OurFleet.jsx";
import OurRates from "./components/OurRates.jsx";
import RouteInfo from "./components/RouteInfo.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import "./index.css";
import { RouteProvider } from "./store/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteProvider>
        <App />
      </RouteProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <OurFleet />
            <OurRates />
            <Testimonial />
            <Services />
          </>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/:cabroute",
        element: <RouteInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
