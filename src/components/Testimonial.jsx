import { PhoneCall, Quote } from "lucide-react";
// import testimonialLogo from "../assets/testimonial-image.png";
import testimonialLogo from "../assets/road-trip.png";

function Testimonial() {
  return (
    <div className="container mx-auto w-screen px-4 md:px-32 mt-5 flex flex-col md:flex-row justify-center items-center font-google p-5">
      {/* Image Div */}
      <div className="md:w-2/3 w-full flex flex-col items-start gap-3 px-4">
        <h3 className="text-lg text-amber-500 font-aakash">
          About Our Company
        </h3>
        <h2 className="text-2xl md:text-3xl font-google">
          Feel the difference and relaxation with Us
        </h2>
        <div className="text-sm md:text-lg relative w-full md:w-4/5">
          <Quote size={12} />
          At <span className="text-gray-500">DevdaToursTravels</span>, we're
          passionate about making your life easier. That's why we've built a
          reliable and efficient cab booking platform. We're constantly striving
          to improve, ensuring your journey is always smooth and stress-free.
          <Quote
            size={12}
            className="absolute right-6 md:right-40 top-[138px] md:top-[148px]"
          />
          <div>
            <span className="text-gray-500">- Jay Devda</span>, CEO of{" "}
            <span className="text-gray-500">DevdaToursTravels</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-4 md:mt-0">
          <img
            src={"images/jay-img.jpeg"}
            alt="Customer Image"
            className="rounded-full h-[90px] w-[90px]"
          />
          <div className="flex flex-col gap-3 items-start justify-start">
            <h3 className="text-lg font-google">Founder - CEO</h3>
            <p className="text-xl font-aakash text-gray-500">Jay Devda</p>
          </div>
          <a href="tel:6355168597">
            <div className="flex flex-col gap-3 items-start justify-start">
              <PhoneCall />
              <p className="text-xl font-aakash text-amber-500">6355-168-597</p>
            </div>
          </a>
        </div>
      </div>
      <div className="md:w-2/3 w-full md:h-[500px] mb-4 md:mb-0 p-4 bg-gray-900 mt-2 rounded-lg">
        <h3 className="text-xl text-gray-500 font-google">
          More than <span className="text-gray-200"> 10+ </span> years of Experience.
        </h3>
        <img
          src={testimonialLogo}
          alt="testimonial logo"
          className="w-full h-auto md:h-full"
        />
      </div>
    </div>

    // <div className="container mx-32 mt-5 flex flex-col md:flex-row justify-center items-center font-google p-5">
    //   <div className="md:w-1/3 w-full mb-4 md:mb-0">
    //     <img
    //       src={testimonialLogo}
    //       alt="testimonial logo"
    //       className="w-full h-auto"
    //     />
    //   </div>
    //   <div className="md:w-2/3 w-full flex flex-col items-start gap-3 px-4">
    //     <h3 className="text-sm text-amber-500 font-aakash">
    //       About Our Company
    //     </h3>
    //     <h2 className="text-3xl font-google">
    //       Feel the difference and relaxation with Us
    //     </h2>
    //     <p className="text-lg w-full md:w-4/5">
    //       "At <span className="text-gray-500">DevdaToursTravels</span>, we're
    //       passionate about making your life easier. That's why we've built a
    //       reliable and efficient cab booking platform. I'm incredibly proud of
    //       the team's dedication to innovation, and the positive impact it has on
    //       our customers. We're constantly striving to improve, ensuring your
    //       journey is always smooth and stress-free." -{" "}
    //       <span className="text-gray-500">Jay Devda</span>, CEO of{" "}
    //       <span className="text-gray-500">DevdaToursTravels</span>
    //     </p>
    //     <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
    //       <img
    //         src={
    //           "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
    //         }
    //         alt="Customer Image"
    //         className="rounded-full h-[90px] w-[90px]"
    //       />
    //       <div className="flex flex-col gap-3 items-start justify-start">
    //         <h3 className="text-lg font-google">Founder - CEO</h3>
    //         <p className="text-xl font-aakash text-gray-500">Jay Devda</p>
    //       </div>
    //       <div className="flex flex-col gap-3 items-start justify-start">
    //         <PhoneCall />
    //         <p className="text-xl font-aakash text-amber-500">6351-771-513</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Testimonial;
