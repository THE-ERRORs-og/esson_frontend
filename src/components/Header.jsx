import { Link } from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import BottomNav from "./Navbar/BottomNav";

const Header = () => {

  return (
    <nav className="bg-white relative pt-4 z-30">
      <TopNav />
      <BottomNav />
    </nav>
  );
};

export default Header;
