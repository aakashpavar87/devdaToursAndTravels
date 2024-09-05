import React from "react";
import RouteIcon from "../assets/travel-luggage.png";
import useMyRoute from "../store/store";
import { HoverEffect } from "./ui/card-hover-effect";

function OurRoutes() {
  const { routeInfo: {mainRoutes} } = useMyRoute();

  return (
    <div className="w-full min-h-screen mt-8">
      <div className="text-xl sm:text-2xl md:text-3xl flex justify-center items-center font-google mt-2">
        <img src={RouteIcon} className="mr-2 h-[32px] w-[32px] md:h-[45px] md:w-[45px] " alt="Car Icon For Fleet Display" />
        <h1>
        Our Rates
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={mainRoutes} />
      </div>
    </div>
  );
}

export default OurRoutes;

// export const projects = [
//   {
//     title: (
//       <p className="flex flex-col md:flex-row gap-3">
//         AHMEDABAD <ArrowRightLeft /> VADODARA
//       </p>
//     ),
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex flex-col md:flex-row gap-3">
//         AHMEDABAD <ArrowRightLeft /> SURAT
//       </p>
//     ),
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex flex-col md:flex-row gap-3">
//         AHMEDABAD <ArrowRightLeft /> MUMBAI
//       </p>
//     ),
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex flex-col md:flex-row gap-3">
//         AHMEDABAD <ArrowRightLeft /> PUNE
//       </p>
//     ),
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex flex-col md:flex-row gap-3">
//         AHMEDABAD <ArrowRightLeft /> BHAVNAGAR
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex flex-col md:flex-row gap-3">
//         AHMEDABAD <ArrowRightLeft /> UDAIPUR
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> RAJKOT
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> JAMNAGAR
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> BHUJ
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> MORBI
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> GANDHIDHAM
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> DWARKA
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> STATUE OF UNITY
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
//   {
//     title: (
//       <p className="flex gap-3">
//         AHMEDABAD <ArrowRightLeft /> MOUNT ABU
//       </p>
//     ),
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     sedan: 10000,
//     suv: 10000,
//   },
// ];
