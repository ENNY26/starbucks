import React from "react";
import heroimg from "../assets/Images/heroimg2.jpg";
import cup from "../assets/Icons/coffeecup.svg";
import iced from "../assets/Icons/iced.svg";
import latte from "../assets/Icons/latte.svg";
import details from "../assets/Icons/details.svg";
const Hero = () => {
  return (
    <div className="flex ">
      <div className="p-9 ">
        <h1 className="font-extrabold text-6xl flex items-center gap-1">
          HOW TO: STARBUCKS
          <span className="inline-block">
            <img className="w-8 h-8 inline-block" src={cup} alt="cup icon" />
          </span>
        </h1>

        <h4>
          Your ultimate guide to make the most amzing coffee with detailed
          instructions
        </h4>
        <div>
          <button className="bg-[#086942] rounded-md p-2 w-21">
            Get started{" "}
          </button>
        </div>
        <div className="m-1 grid grid-cols-2 pt-7 gap-6">
          <div className="flex items-center">
            <img
              src={latte}
              alt=""
              className="bg-gray-300 rounded-full max-w-11"
            />
            <h3>
              Over 100 recipes <br /> available
            </h3>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src={iced}
              alt=""
              className="bg-gray-300 rounded-full max-w-11"
            />
            <h3>
              several categories to <br /> choose from
            </h3>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src={cup}
              alt=""
              className="bg-gray-300 rounded-full max-w-11"
            />
            <h3>
              recipe for both cold and <br />
              hot drinks
            </h3>
          </div>
          <div className="flex items-center gap-9 ">
            <img
              src={details}
              alt=""
              className="bg-gray-300 rounded-full max-w-11"
            />
            <h3>
              detailed step by step <br />
              instruction
            </h3>
          </div>
        </div>
      </div>

      <div>
        <img
          src={heroimg}
          alt="hero image"
          className="rounded-s-full min-w-70"
        />
      </div>
    </div>
  );
};

export default Hero;
