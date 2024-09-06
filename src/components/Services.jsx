import { Tally3 } from "lucide-react";
import React from "react";
import { ServiceCard } from "../utils/ServiceCard";
import { BackgroundBeams } from "./ui/background-beams";

function Services() {
  const cardItems = [
    {
      title: "Cab Booking",
      image: "images/card-images/cab-booking.jpg",
      content:
        "Book a cab effortlessly with our reliable service, ensuring comfort, safety, and punctuality for all your travel needs.",
    },
    {
      title: "Order Taxi",
      image: "images/card-images/order-taxi.jpg",
      content:
        "Order your taxi with ease, offering timely pickups, professional drivers, and a smooth, hassle-free ride experience.",
    },
    {
      title: "About Us",
      image: "images/card-images/about-us.jpg",
      content:
        "Experience reliable and affordable cab services with us, ensuring safe and comfortable travel for all your transportation needs.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-col min-h-[100vh]  bg-neutral-950 relative justify-center items-center font-google p-5 gap-3 antialiased">
      <span className="flex z-10 text-xl md:text-3xl text-white">
        <Tally3 size={32} className="-skew-x-12 text-amber-500" />
        What We Offer
      </span>
      <h3 className="text-xl z-10 md:text-3xl text-gray-300 font-google">
        Start Your Journey with DevdaTours
      </h3>
      {/* <p className="z-10 text-sm w-full md:w-[40%] text-center text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        autem perspiciatis, maiores ipsum nam, saepe nostrum facere placeat
        accusantium error tempora aut ducimus voluptas
      </p> */}
      <div className="z-10 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 px-6">
        {cardItems.map((item, index) => (
          <ServiceCard key={index} title={item.title} content={item.content} image={item.image} />
        ))}
      </div>
      <BackgroundBeams />
    </div>
    // <div className="mt-5 flex flex-col md:flex-col min-h-[100vh] justify-center items-center font-google p-5 gap-3 h-[40rem] w-full rounded-md bg-neutral-950 relative antialiased">
    //   <span className="flex text-xl md:text-3xl text-white">
    //     <Tally3 size={32} className="-skew-x-12 text-amber-500" />
    //     What We Offer
    //   </span>
    //   <h3 className="text-xl md:text-3xl text-gray-300 font-google">
    //     Start Your Journey with DevdaTours
    //   </h3>
    //   <p className="text-sm w-full md:w-[40%] text-center text-gray-200">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
    //     autem perspiciatis, maiores ipsum nam, saepe nostrum facere placeat
    //     accusantium error tempora aut ducimus voluptas
    //   </p>
    //   <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 px-6">
    //     {cardItems.map((item, index) => (
    //       <ServiceCard key={index} title={item.title} content={item.content} />
    //     ))}
    //   </div>
    //   <BackgroundBeams />
    // </div>
  );
}

export default Services;
