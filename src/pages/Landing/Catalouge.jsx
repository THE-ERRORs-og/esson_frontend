import React from "react";
import { cloth, watch } from "../../assets/images";

const Catalouge = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between">
      {/* Passing URL correctly as a prop */}
      <Widget url={cloth} name="Clothes" />
      <Widget url={watch} name="Food " />
    </div>
  );
};

const Widget = ({ url, name }) => {
  return (
    <div
      className="h-[150px] w-auto md:w-[48%] bg-slate-300 rounded-lg bg-cover bg-center p-10 my-4"
      style={{ backgroundImage: `url(${url})` }} // Use inline style for dynamic background image
    >
      <h1 className="font-bold text-xl">{name} Collections</h1>

      <a className=" underline ">Shop {name} </a>
    </div>
  );
};

export default Catalouge;
