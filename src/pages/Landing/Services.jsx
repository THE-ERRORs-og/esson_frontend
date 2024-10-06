import React from "react";
import { f1, f2, f3, f4 } from "../../assets/images";
const Services = () => {
  return (
    <div>
       <h1 className='md:flex hidden justify-center text-4xl font-bold py-8'>Features</h1>
      <section
        id="feature"
        className="md:flex flex-col hidden sm:flex-row flex-wrap justify-evenly items-center p-5"
      >
        <ServiceCard imageUrl={f1} service="Online Orders" bgColor="#A8D1D1" />
        <ServiceCard imageUrl={f2} service="Quick Delivery" bgColor="#EEEEEE" />
        <ServiceCard imageUrl={f3} service="Super Deals" bgColor="#FFFFD0" />
        <ServiceCard imageUrl={f4} service="24x7 Support" bgColor="#F8F988" />
      </section>
    </div>
  );
};

export default Services;

const ServiceCard = ({ imageUrl, service, bgColor }) => {
  return (
    <div className="fe-box w-[180px] text-center p-6 border border-[#3A4F7A] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] rounded-2xl my-4 hover:shadow-[10px_10px_54px_rgba(0,0,0,0.2)]">
      <img src={imageUrl} alt="Super Deals" className="mb-3 w-full" />
      <h6
        className={`inline-block py-2 px-3 bg-[${bgColor}] rounded-md text-[#3A4F7A] leading-none`}
      >
        {service}
      </h6>
    </div>
  );
};
