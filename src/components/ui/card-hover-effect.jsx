import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 py-3 md:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item.slug}
          key={item.slug}
          className="relative group/card  block p-2  md:h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <img
              src={"/images/group-car.png"}
              alt="car image"
              className="h-[130px] md:h-[35%]"
            />
            <div className="grid grid-cols-2 justify-center text-gray-200 text-sm md:text-lg">
              <h3>Sedan</h3>
              <h3>₹ {item.sedan}</h3>
              {/* <h3>₹ {item.sedan}</h3> */}
              <h3>SUV</h3>
              <h3>₹ {item.suv}</h3>
              {/* <h3>₹ {item.suv}</h3> */}
            </div>
            {/* <div className="flex flex-col mt-2 gap-2 text-gray-200 text-sm md:text-lg">
              <h3>*Toll Tax and State tax Extra </h3>
              <h3>*Parking Extra, if applicable </h3>
            </div> */}
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[95%] md:h-full md:w-full p-4 overflow-hidden bg-yellow-600/85 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-1 md:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide -mt-1 md:mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
