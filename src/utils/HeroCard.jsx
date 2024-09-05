import { ArrowUpRight, Badge, Car } from "lucide-react";
import React from "react";

const servicesData = [
  "Airport Pickup & Drop For Kuwait and Ahmedabad Also.",
  "Ahmedabad Sight-Seeing",
  "All Gujarat Tourist Packages Available",
  "Specialization in Corporate Booking",
  "Top Condition cars Available for travelling",
  "All India Cab service available"
];

function HeroCard({ classes }) {
  return (
    <div
      className={`flex max-w-3xl mb-5 flex-col items-center rounded-md border border-white md:flex-row ${classes}`}
    >
      <div className="w-full">
        <div className="p-4">
          <h1 className="inline-flex items-center text-2xl text-yellow-200 font-semibold">
            About Our Services <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          {servicesData.map((item, idx) => (
            <div
              className="md:flex md:justify-start md:items-start md:gap-4"
              key={idx}
            >
              <Badge
                className={`text-white -mb-5 mr-1 md:mt-4 ${
                  idx === 0 ? "mt-3" : ""
                }`}
                size={24}
              />{" "}
              <p className={`ml-6 md:mt-3 mb-2 ${idx === 0 ? "-mt-2" : ""}`}>
                <span className="text-wrap md:text-nowrap  text-left font-aakash text-sm md:text-xl text-amber-100 hover:text-amber-800">
                  {item}
                </span>
              </p>
            </div>
          ))}
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 md:px-3 px-1 md:py-1 text-xs md:text-[15px] font-semibold text-gray-900">
              #Car
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 md:px-3 px-1 md:py-1 text-xs md:text-[15px] font-semibold text-gray-900">
              #Cab Booking
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 md:px-3 px-1 md:py-1 text-xs md:text-[15px] font-semibold text-gray-900">
              #Traveling
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <Car className="text-white" size={32} />
            <span className="flex flex-col">
              <span className="text-[15px] font-medium text-gray-100">
                Jay Devda
              </span>
              <span className="text-[12px] font-medium text-gray-500">
                @jay_devda
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
