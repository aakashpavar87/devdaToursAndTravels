import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useMyRoute from "../store/store";
// import suvImage from "../assets/suv-removebg-preview.png";
import suvImage from "../assets/toyota-innova.png"
import sedanImage from "../assets/etios-car.png";

const plans = [
  {
    name: "SUV",
    price: "₹ 13 /km",
  },
  {
    name: "Sedan",
    price: "₹ 11 /km",
  },
];

function RouteInfo() {
  const { cabroute } = useParams();
  const {
    routeInfo: { mainRoutes },
  } = useMyRoute();
  const [foundRoute, setFoundRoute] = useState({});
  useEffect(() => {
    let foundObj = mainRoutes?.filter((route) => route.slug === cabroute)[0];
    setFoundRoute(foundObj);
    return () => {};
  }, []);

  return (
    <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 md:my-4 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col space-y-8 pb-10 pt-12 text-center md:pt-12">
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Simple, transparent pricing
        </p>
        <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
          {foundRoute.title}
        </p>
        <div className="flex flex-col gap-3 w-[80%] justify-start items-start">
          <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl font-google">
            Other Routes
          </h3>
          <div className="flex flex-wrap justify-start md:flex-wrap mt-2 gap-2 text-gray-700 text-sm md:text-lg">
            {foundRoute?.subRoutes?.map((route) => {
              const placeName = route.toLowerCase().replace(" ", "-");
              return (
                <Link to={`/sub/ahmedabad-to-${placeName}`}>
                  <h3 className="text-xl md:text-2xl font-google font-semibold">
                    {route},{" "}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 w-full space-y-4 md:mt-12">
        <div className="grid space-y-8 lg:grid-cols-3 lg:space-x-8 lg:space-y-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className=" rounded-2xl border border-gray-200 bg-white shadow"
            >
              <div className="flex justify-center items-center">
                <div className="flex w-1/2 flex-col justify-start space-y-4 px-4 pt-5">
                  <p className="text-4xl font-bold leading-10">{plan.name}</p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                      ₹{" "}
                      {plan.name === "SUV" ? foundRoute.suv : foundRoute.sedan}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Billed Manually.
                    </p>
                  </div>
                </div>
                <div className="relative h-36 w-1/2 flex-shrink-0">
                  <img
                    className={`relative w-full mr-3`}
                    src={
                      plan.name === "SUV"
                       ? suvImage
                       : sedanImage
                    }
                    alt="car image"
                  />
                </div>
                {/* <img src="images/sedan-show.png" alt="sedan image" srcset="" /> */}
              </div>
              <div className="flex w-full my-6 flex-col px-8 pb-8">
                <a href="tel:6355168597">
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Contact Us
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RouteInfo;
