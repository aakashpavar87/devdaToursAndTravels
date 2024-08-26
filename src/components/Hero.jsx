import { CarFront } from "lucide-react";
import HeroCard from "../utils/HeroCard";
import Logo from "../utils/Logo";

export default function Hero() {
  return (
    <div className="relative isolate z-0 bg-gray-900 px-6 pt-14 lg:px-8 ">
      <div className="relative mx-auto max-w-2xl md:py-24">
        <div className="text-center w-auto md:w-full">
          <h1 className="hidden text-4xl md:flex items-center font-bold font-google mb-8 tracking-tight text-gray-100 sm:text-6xl">
            Experience Our Services <CarFront size={70} />
          </h1>
          <h1 className="md:hidden text-xl flex items-center justify-center font-bold font-google mb-8 tracking-tight text-gray-100 sm:text-3xl gap-5">
            Experience Our Services <CarFront size={16} />
          </h1>
          <div className="flex w-full flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col w-full">
              <Logo
                className="h-[210px] md:h-[280px] md:w-full"
                alt="webiste logo"
              />
              <div className="w-full h-16 flex items-center justify-center gap-8">
                <a className="h-full w-12" href="https://www.facebook.com/devdatourstravels">
                  <img
                    src="/images/icons-social/facebook.svg"
                    alt="Facebook Icon Of Devda Tours And Travels"
                  />
                  <span className="text-sm font-google text-gray-200">Connect Now</span>
                </a>
                <a className="h-full w-12" href="https://www.instagram.com/devdatourstravels">
                  <img
                    src="/images/icons-social/instagram.svg"
                    alt="Instagram Icon Of Devda Tours And Travels"
                  />
                  <span className="text-sm font-google text-gray-200">Book Now</span>
                </a>
                <a className="h-full w-12" href="https://wa.me/6355168597">
                  <img
                    src="/images/icons-social/whatsapp-business.svg"
                    alt="Whatsapp Business Icon Of Devda Tours And Travels"
                  />
                  <span className="text-sm leading-tight font-google text-gray-200">Chat Now</span>
                </a>
              </div>
            </div>
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Lorem ipsum dolor sit amet consectetur dicta.
          </h1> */
}
{
  /* <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p> */
}

// <div className="relative w-full bg-white mt-2">
//   <div className="mx-auto w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
//     <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
//       <CarFront />
//       <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
//         <div className="rounded-full bg-white p-1 px-2">
//           <p className="text-sm font-medium">We&apos;re Guiding</p>
//         </div>
//         <p className="text-sm font-medium">Order Taxi Now &rarr;</p>
//       </div>
//       <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
//         Explore the world with confidence, knowing we'll get you there
//         safely.
//       </h1>
//       <p className="mt-8 text-lg text-gray-700">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
//         modi blanditiis dolores quasi eaque explicabo!
//       </p>
//       <form action="" className="mt-8 flex items-start space-x-2">
//         <div>
//           <button
//             type="button"
//             className="rounded-md bg-black px-8 py-2.5 text-sm font-semibold font-aakash text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//           >
//             Book Your Order
//           </button>
//         </div>
//       </form>
//     </div>
//     <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
//       <img
//         className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
//         // src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
//         src="https://images.unsplash.com/photo-1630717285906-29364ffacea0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//     </div>
//   </div>
// </div>
