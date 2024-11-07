import { Link } from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import BottomNav from "./Navbar/BottomNav";
import AdvertisementBar from "./Navbar/AdvertisementBar";

const Header = () => {

  return (
    <nav className="bg-white relative z-30">
      <AdvertisementBar />
      <TopNav />
      <BottomNav />
    </nav>
  );
};

export default Header;
