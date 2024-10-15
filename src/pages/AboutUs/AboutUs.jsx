import { aboutusP1 } from "@/assets/images";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl w-[90%] md:w-3/4 lg:w-2/3 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <div className="h-[1px] w-[128px] border border-[#333] m-9"></div>
          <p className="mt-2 text-3xl leading-8  tracking-tight text-gray-900 sm:text-4xl">
            Customized Packaging Solutions and Apparel
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto italic">
            Esson Group was founded in 2024 by three friends with a shared
            vision: to provide businesses with affordable, customized packaging
            solutions that don’t break the bank.
          </p>
        </div>

        <div className="mt-10 text-justify">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Who We Are
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            Based in Fresno, CA, we specialize in creating custom food packaging
            for wholesale, ensuring that companies of all sizes can access
            high-quality, tailored options without the prohibitive costs often
            associated with larger suppliers.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            In addition to our packaging services, we also offer customized
            T-shirts, helping brands extend their identity beyond packaging.
            Whether you’re a startup or an established company, Esson Group is
            committed to offering creative, personalized solutions that meet
            your business needs.
          </p>
        </div>

        <div className="mt-10 text-justify">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            How We Work
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            At Esson Group, we believe in providing customized solutions
            tailored to each client’s unique needs. Our team works closely with
            businesses to understand their brand and deliver solutions that
            enhance their product experience. We focus on minimizing costs while
            ensuring the highest quality.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with us today for a free quote, either via email at{" "}
            <a href="mailto:Support@essongroup.com" className="text-indigo-600">
              Support@essongroup.com
            </a>{" "}
            or through our website’s easy-to-use contact form. Let’s work
            together to bring your brand to life!
          </p>
        </div>

        <hr className=" my-8" />

        <div className="flex pt-2 items-start">
          <div className=" w-3/4 pr-2">
            <img src={aboutusP1} alt="about us" className="w-full" />
          </div>
          <div className="w-1/4 pl-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0712/8273/files/New-About-Us-Image.png?1276234868116887889"
              alt="about us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
