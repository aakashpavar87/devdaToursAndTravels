import { Tally3 } from "lucide-react";
import React from "react";
import { ServiceCard } from "../utils/ServiceCard";

function Services() {
  const cardItems = [
    {
      title: "About Us",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maxime voluptatibus obcaecati?",
    },
    {
      title: "Order Taxi",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maxime voluptatibus obcaecati?",
    },
    {
      title: "Cab Booking",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maxime voluptatibus obcaecati?",
    },
  ];
  return (
    <div className="mt-5 flex flex-col md:flex-col min-h-[100vh] bg-service bg-cover bg-center bg-no-repeat justify-center items-center font-google p-5 gap-3">
      <span className="flex text-xl md:text-3xl text-white">
        <Tally3 size={32} className="-skew-x-12 text-amber-500" />
        What We Offer
      </span>
      <h3 className="text-xl md:text-3xl text-gray-300 font-google">
        Start Your Journey with DevdaTours
      </h3>
      <p className="text-sm w-full md:w-[40%] text-center text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        autem perspiciatis, maiores ipsum nam, saepe nostrum facere placeat
        accusantium error tempora aut ducimus voluptas
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 px-6">
        {cardItems.map((item, index) => (
          <ServiceCard key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Services;
