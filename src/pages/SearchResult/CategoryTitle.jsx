import React from "react";

const CategoryTitle = ({ title }) => (
  <div className="flex items-center justify-between px-[1.8125rem]  rounded-xl bg-[#5d7391]">
    <div className="text-white font-semibold md:text-4xl text-2x leading-[normal] pb-2 pt-4">
      {title}
    </div>
    <svg
      width={36}
      height={37}
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 9.5C10.5 11.1569 9.15685 12.5 7.5 12.5C5.84315 12.5 4.5 11.1569 4.5 9.5C4.5 7.84315 5.84315 6.5 7.5 6.5C9.15685 6.5 10.5 7.84315 10.5 9.5Z"
        fill="black"
        fillOpacity="0.15"
      />
      <path
        d="M21 27.5C21 29.1569 19.6569 30.5 18 30.5C16.3431 30.5 15 29.1569 15 27.5C15 25.8431 16.3431 24.5 18 24.5C19.6569 24.5 21 25.8431 21 27.5Z"
        fill="black"
        fillOpacity="0.15"
      />
      <path
        d="M28.5 21.5C30.1569 21.5 31.5 20.1569 31.5 18.5C31.5 16.8431 30.1569 15.5 28.5 15.5C26.8431 15.5 25.5 16.8431 25.5 18.5C25.5 20.1569 26.8431 21.5 28.5 21.5Z"
        fill="black"
        fillOpacity="0.15"
      />
      <path
        d="M28.5 6.5V15.5M28.5 15.5C26.8431 15.5 25.5 16.8431 25.5 18.5C25.5 20.1569 26.8431 21.5 28.5 21.5M28.5 15.5C30.1569 15.5 31.5 16.8431 31.5 18.5C31.5 20.1569 30.1569 21.5 28.5 21.5M28.5 21.5V30.5M18 6.5V24.5M18 24.5C16.3431 24.5 15 25.8431 15 27.5C15 29.1569 16.3431 30.5 18 30.5C19.6569 30.5 21 29.1569 21 27.5C21 25.8431 19.6569 24.5 18 24.5ZM7.5 12.5V30.5M7.5 12.5C9.15685 12.5 10.5 11.1569 10.5 9.5C10.5 7.84315 9.15685 6.5 7.5 6.5C5.84315 6.5 4.5 7.84315 4.5 9.5C4.5 11.1569 5.84315 12.5 7.5 12.5Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default CategoryTitle;
