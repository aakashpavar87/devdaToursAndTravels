import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMyRoute from "../store/store";
import { Check } from "lucide-react";

const plans = [
  {
    name: "SUV",
    price: "₹ 13 /km",
    car: "images/suv-removebg-preview.png",
  },
  {
    name: "Sedan",
    price: "₹ 11 /km",
    car: "images/red-sedan.webp",
  },
];

function RouteInfo() {
  const { cabroute } = useParams();
  const { routeInfo } = useMyRoute();
  const [foundRoute, setFoundRoute] = useState({});
  useEffect(() => {
    let foundObj = routeInfo?.filter((route) => route.slug === cabroute)[0];
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
                    ₹ {plan.name === "SUV" ? foundRoute.suv : foundRoute.sedan}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Billed annually.
                    </p>
                  </div>
                </div>
                <div className="relative h-36 w-1/2 flex-shrink-0">
                  <img
                    className={`relative h-36 w-full mr-3`}
                    src={plan.car}
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
