
import {logo} from "../assets/images"
const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-start px-8 py-12 bg-gray-50">
    {/* Contact Section */}
    <div className="flex flex-col mb-8 w-full sm:w-auto">
      <img src={logo} alt="Logo" className="mb-4 w-24" />
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <p className="text-sm">
        <strong>Address:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae dolor ullam accusantium!
      </p>
      <p className="text-sm">
        <strong>Phone:</strong> (+91)-999999999 / (+91)-999999999
      </p>
      <p className="text-sm">
        <strong>Time:</strong> 10:00-18:00, Mon - Fri
      </p>
    </div>

    {/* About Section */}
    <div className="flex flex-col mb-8 w-full sm:w-auto">
      <h4 className="text-lg font-semibold mb-4">About</h4>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        About Us
      </a>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Delivery Information
      </a>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Privacy & Policy
      </a>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Terms and Conditions
      </a>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Connect With Us
      </a>

      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-2">
          <i className="fab fa-facebook-f text-blue-700 cursor-pointer hover:text-red-700"></i>
          <i className="fab fa-instagram text-pink-500 cursor-pointer hover:text-red-700"></i>
        </div>
      </div>
    </div>

    {/* My Account Section */}
    <div className="flex flex-col mb-8 w-full sm:w-auto">
      <h4 className="text-lg font-semibold mb-4">My Account</h4>
      {/* <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Sign In
      </a> */}
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        View Cart
      </a>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Track My Order
      </a>
      <a href="#" className="text-sm text-gray-700 hover:text-red-700 mb-2">
        Help
      </a>
    </div>

    {/* Payment Section */}
    {/* <div className="flex flex-col items-start mb-8 w-full sm:w-auto">
      <p className="text-sm font-semibold">Secured Payment</p>
      <img src="/images/pay/pay.png" alt="Payment Methods" className="mt-4 w-32" />
    </div> */}

    {/* Copyright Section */}
    <div className="w-full text-center mt-8">
      <p className="text-sm text-gray-500">&copy; 2024, Esson - Group</p>
    </div>
  </footer>
  );
};
export default Footer;

