import Newsletter from "@/pages/Landing/Newsletter";
import { logo } from "../assets/images";
const Footer = () => {
  return (
    <footer className="  bg-[#f5f5f5] p-8">
      <div className=" flex justify-center space-x-24">
        <div className="flex flex-col justify-center p-8">
          <img src={logo} alt="Logo" className="mb-4 w-48" />
          <div className="flex flex-col w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              <strong>Email:</strong> Support@esson.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> (+91)-999999999 / (+91)-999999999
            </p>
            <p className="text-sm">
              <strong>Time:</strong> 10:00-18:00, Mon - Fri
            </p>
          </div>
        </div>

        {/* newsletter */}
        <div className="flex flex-col items-start space-y-8">
          <Newsletter />
          <div className="flex justify-between space-x-32 items-start">
            <div className="flex flex-col ">
              {/* <h4 className="text-lg font-semibold mb-4">About</h4> */}
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                Delivery Information
              </a>
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                Privacy & Policy
              </a>
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                Connect With Us
              </a>
            </div>

            <div className="flex flex-col ">
              {/* <h4 className="text-lg font-semibold mb-4">My Account</h4> */}

              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                View Cart
              </a>
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                Track My Order
              </a>
              <a
                href="#"
                className="text-base underline text-black hover:text-red-700 mb-2"
              >
                Help
              </a>
            </div>

            <div className="">
              <h4 className="text-lg font-semibold mb-4">Follow Us :</h4>
              <div className="flex space-x-2">
                <i className="fab fa-facebook-f text-blue-700 cursor-pointer hover:text-red-700"></i>
                <i className="fab fa-instagram text-pink-500 cursor-pointer hover:text-red-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full text-center mt-8">
          <p className="text-sm text-gray-500">&copy; 2024, Esson - Group</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
