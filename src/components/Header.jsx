import { Link } from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import BottomNav from "./Navbar/BottomNav";

const Header = () => {

  return (
    <nav className="bg-white shadow-md py-4">
      <TopNav />
      {/* <BottomNav /> */}
    </nav>
  );
};

export default Header;
