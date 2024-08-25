import { motion } from "framer-motion";
import { Tally3 } from "lucide-react";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";

const images = [
  "images/maruti-suzuki-ertiga-magma-grey.webp",
  "images/urbania-rm-bg.png",
  "images/dezire-rm-bg.png",
  "images/blue-innova.webp",
];

function OurFleet() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl flex justify-center font-google mt-2">
        <Tally3 size={32} className="-skew-x-12 text-amber-500" />
        Our Fleet
      </h1>
      <ImagesSlider className="h-[20rem] md:h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Ride in Style: Book Your Cab Now!
          </motion.p>
          <a href="tel:6355168597">
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
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
