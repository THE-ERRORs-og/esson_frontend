import React from "react";

const Catalouge = () => {
  return (
    <div className="flex md:flex-row flex-col">
      {/* Passing URL correctly as a prop */}
      <Widget url="/src/assets/cloth.jpg" name="Clothes"/>
      <Widget url="/src/assets/watch.jpg" name="Food "/>
    </div>
  );
};

const Widget = ({ url , name}) => {
  return (
    <div
      className="h-[150px] w-auto md:w-[55%] bg-slate-300 m-5 rounded-lg bg-cover bg-center p-10 "
      style={{ backgroundImage: `url(${url})` }} // Use inline style for dynamic background image
    >
        
        <h1 className="font-bold text-xl">{name} Collections</h1>

        <a className=" underline ">Shop {name} </a>
    </div>
  );
};

export default Catalouge;
