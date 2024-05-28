import logo from "../assets/devdalogo.png";

const Logo = ({ ...props }) => (
  <img src={logo} alt="logo image of website" {...props} />
);
export default Logo;
