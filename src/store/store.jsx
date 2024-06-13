import { ArrowRightLeft } from "lucide-react";
import { createContext, useContext, useState } from "react";

export const routeContext = createContext([]);

const useMyRoute = () => {
  return useContext(routeContext);
};

export const RouteProvider = ({ children }) => {
  const [routeInfo, setRouteInfo] = useState([
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> VADODARA
        </p>
      ),
      description:
        "A technology company that builds economic infrastructure for the internet.",
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
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
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-jamnagar", // Lowercase conversion and kebab-case for slug
    },
  ]);
  return (
    <routeContext.Provider value={{ routeInfo, setRouteInfo }}>
      {children}
    </routeContext.Provider>
  );
};

export default useMyRoute;
