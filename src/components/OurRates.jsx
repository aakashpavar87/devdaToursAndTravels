import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { ArrowRightLeft } from "lucide-react";

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

const projects = [
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> VADODARA
      </p>
    ),
    description:
      "A technology company that builds economic infrastructure for the internet.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-vadodara", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> SURAT
      </p>
    ),
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-surat", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> MUMBAI
      </p>
    ),
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-mumbai", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> PUNE
      </p>
    ),
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-pune", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> BHAVNAGAR
      </p>
    ),
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-bhavnagar", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> UDAIPUR
      </p>
    ),
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-udaipur", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> RAJKOT
      </p>
    ),
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-rajkot", // Lowercase conversion and kebab-case for slug
  },
  {
    title: (
      <p className="flex flex-col md:flex-row gap-3">
        AHMEDABAD <ArrowRightLeft /> JAMNAGAR
      </p>
    ),
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    sedan: 10000,
    suv: 10000,
    slug: "ahmedabad-to-jamnagar", // Lowercase conversion and kebab-case for slug
  },
];

function OurRates() {
  return (
    <div className="w-full min-h-screen mt-8">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-google ">
        Our Rates
      </h1>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default OurRates;
