/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   getFirestore,
//   increment,
//   setDoc,
// } from 'firebase/firestore';
// import db from '../../constants/Firebase';

const ContactComponent = () => {
  const [otherItemType, setOtherItemType] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    city: "",
    state: "",
    itemType: "",
    message: "",
    email: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    phone: "",
    itemType: "",
    email: "",
    message: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const phoneNumber = value.replace(/\D/g, '');
      if (phoneNumber.length > 10) {
        return;
      }
      setFormData((prevData) => ({ ...prevData, [name]: phoneNumber }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const sendDataToAPI = async (formData) => {
    const server_url = import.meta.env.VITE_SERVER_URL;
    try {
      const response = await fetch(
        server_url + "/esson_mail/send-contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        return true;
      } else {
        console.log("Failed to send contact form data.");
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoading === false) {
      let hasErrors = false;
      const newErrors = {};

      // Validation for required fields
      if (formData.firstName.trim() === '') {
        newErrors.firstName = 'This field is required';
        hasErrors = true;
      }
      if (formData.phone.trim() === '') {
        newErrors.phone = 'This field is required';
        hasErrors = true;
      } else if (formData.phone.trim().length !== 10) {
        newErrors.phone = 'Phone number must be 10 digits long';
        hasErrors = true;
      }
      if (hasErrors) {
        setErrors(newErrors);
        setIsLoading(false);
        return;
      }

      try {
       

        // Prepare data to be added to the SupportQueries collection
        const data = {
          name: formData.firstName.trim(),
          phoneNumber: formData.phone,
          city: formData.city,
          state: formData.state,
          query: formData.message,
          itemType:
            formData.itemType === "others" ? otherItemType : formData.itemType,
          email: formData.email,
          category:
            formData.category === "others" ? otherCategory : formData.category,
          date: Date.now(),
        };

       
        // Send data to the external API
        var resp= await sendDataToAPI(data);
        
        if(!resp){
          return;
        }
        // Reset form data and errors
        setFormData({
          firstName: "",
          phone: "",
          city: "",
          state: "",
          itemType: "",
          email: "",
          message: "",
          category: "",
        });

        setErrors({
          firstName: "",
          phone: "",
          itemType: "",
          email: "",
          message: "",
          category: "",
        });

        // Show success message
        Swal.fire({
          title: 'Thanks for sharing your details!',
          html: "<div id='custom-text'>Our team member will reach out to you soon.</div>",
          icon: 'success',
          customClass: {
            title: 'your-custom-title-class',
            popup: 'your-custom-popup-class',
            htmlContainer: 'your-custom-html-container-class',
            confirmButton: 'your-custom-confirm-button-class',
          },
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error adding document: ', error);
      }
    }
  };

return (
  <div className="flex justify-center items-center bg-gradient-to-b from-[#F0F3FF] to-[#F0F3FF80] bg-no-repeat bg-center bg-cover relative overflow-hidden w-full">
    <div className="w-[80%] pb-4 md:pb-24 flex flex-col md:flex-row text-center md:text-start">
      <div className="md:w-1/2 mt-24">
        <p className="text-3xl font-semibold">Contact Our Team</p>
        <p className="text-2xl font-normal mt-2 mb-4">
          Looking for support or counselling? Fill out your details for
          personalized support!
        </p>
        <div className="space-y-4 hidden md:block">
          <div className="flex items-center gap-4 text-lg">
            <FaPhoneVolume className="text-[#f14d43] text-3xl" />
            <a href="tel:+15598359854" className="text-dark hover:underline">
              (559) 835-9854
            </a>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <MdEmail className="text-[#f14d43] text-3xl" />
            <a href="mailto:support@.com" className="text-dark hover:underline">
              support@essongroup.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <IoLogoWhatsapp className="text-green-600 text-3xl" />
            <a
              href="https://wa.me/15598359854"
              className="text-dark hover:underline"
            >
              (559) 835-9854
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-20 bg-white shadow-lg rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              className={`w-full border rounded-md p-3 ${
                errors.firstName ? "border-red-500" : ""
              }`}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Full Name *"
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm">{errors.firstName}</div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                className={`w-full border rounded-md p-3 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
              />
              {errors.phone && (
                <div className="text-red-500 text-sm">{errors.phone}</div>
              )}
            </div>
            <div className="w-full">
              <input
                className="w-full border rounded-md p-3"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                className="w-full border rounded-md p-3"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full border rounded-md p-3"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
            </div>
          </div>

          <div>
            <p className="font-medium">
              What type of items are you looking for?
            </p>
            <select
              className={`w-full border rounded-md p-3 ${
                errors.itemType ? "border-red-500" : ""
              }`}
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
            >
              <option value="">Select Item Type</option>
              <option value="Food">Food</option>
              <option value="Clothes">Clothes</option>
              <option value="both">Both</option>
              <option value="others">Others</option>
            </select>
            {errors.itemType && (
              <div className="text-red-500 text-sm">{errors.itemType}</div>
            )}
            {formData.itemType === "others" && (
              <div className="mt-2">
                <input
                  className="w-full border rounded-md p-3"
                  type="text"
                  name="otherItemType"
                  value={otherItemType}
                  onChange={(e) => setOtherItemType(e.target.value)}
                  placeholder="Please specify the type of items"
                />
              </div>
            )}
          </div>

          <div>
            <p className="font-medium">Which category are you shopping in?</p>
            <select
              className={`w-full border rounded-md p-3 ${
                errors.category ? "border-red-500" : ""
              }`}
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Fruits & Vegetables">Fruits & Vegetables</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Women's Clothing">Women's Clothing</option>
              <option value="others">Others</option>
            </select>
            {errors.category && (
              <div className="text-red-500 text-sm">{errors.category}</div>
            )}
            {formData.category === "others" && (
              <div className="mt-2">
                <input
                  className="w-full border rounded-md p-3"
                  type="text"
                  name="otherCategory"
                  value={otherCategory}
                  onChange={(e) => setOtherCategory(e.target.value)}
                  placeholder="Please specify the category"
                />
              </div>
            )}
          </div>

          <div>
            <p className="font-medium">Leave any doubts in the message</p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write here..."
              className={`w-full border rounded-md p-3 ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <div className="text-red-500 text-sm">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#f14d43] text-white py-3 rounded-md font-medium hover:bg-[#fa8c3c] ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            Submit
          </button>

          <div className="text-sm text-gray-600 mt-4">
            <span>*</span>: indicates field is mandatory to be filled
          </div>
        </form>
      </div>

      <div className="space-y-4 md:hidden mt-8">
        <p className="contact-details-section-h2">
          You can also contact us at:
        </p>
        <div className="flex items-center gap-4 text-lg">
          <FaPhoneVolume className="text-[#f14d43] text-3xl" />
          <a href="tel:+91880000000" className="text-dark hover:underline">
            +91 880000000
          </a>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <MdEmail className="text-[#f14d43] text-3xl" />
          <a href="mailto:support@.com" className="text-dark hover:underline">
            support@essongroup.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <IoLogoWhatsapp className="text-green-600 text-3xl" />
          <a
            href="https://wa.link/xa00yu"
            className="text-dark hover:underline"
          >
            +91 7410000000
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

export default ContactComponent;

