import { motion } from "framer-motion";
import React from "react";
import SedanCarIcon from "../assets/sedan.png";
import { ImagesSlider } from "./ui/image-slider";

const images = [
  "images/maruti-suzuki-ertiga-magma-grey.webp",
  "images/urbania-rm-bg.png",
  "images/dezire-rm-bg.png",
  "images/blue-innova-removebg-preview.png",
];

function OurFleet() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl sm:text-2xl md:text-3xl flex justify-center items-center font-google mt-2">
        <img src={SedanCarIcon} className="mr-2 h-[32px] w-[32px] md:h-[45px] md:w-[45px] " alt="Car Icon For Fleet Display" />
        <h1>
        Our Fleet
        </h1>
      </div>
      <ImagesSlider className="h-[20rem] md:h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 120,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Ride in Style: Book Your Cab Now!
          </motion.p> */}
          <a href="tel:6355168597">
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-400/45 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Book Now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </a>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}

export default OurFleet;
