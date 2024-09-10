import { Mail, MapPinned, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WebsiteLogo from "../utils/Logo";
import TopBarWidget from "../utils/TopBarWidget";
function TopBar() {
  const topBarItems = [
    {
      logo: <Phone />,
      heading: "Call Us Now",
      main: "6355-168-597",
    },
    {
      logo: <Mail />,
      heading: "Email Now",
      main: "jaydevada201184@gmail.com",
    },
    {
      logo: <MapPinned />,
      heading: "C-113, Bijal Business Centre,",
      main: "Opp. Shyam Icon, Nr. Aslali Circle, Aslali, Ahmedabad - 382427",
    },
  ];
  return (
    <div className="w-screen bg-gray-900 px-8 md:px-32 h-auto md:h-36 flex flex-col md:flex-row justify-center items-center">
      <div className="h-[92%] flex flex-col md:flex-row justify-between container">
        <span>
          <Link to="/">
            <WebsiteLogo className="h-full w-24" />
          </Link>
        </span>
        <div className="flex flex-col md:flex-row mb-4 justify-start items-start md:justify-center md:items-center md:gap-12">
          {topBarItems.map((item, index) => (
            <TopBarWidget
              key={index}
              icon={item.logo}
              heading={item.heading}
              mainText={item.main}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
