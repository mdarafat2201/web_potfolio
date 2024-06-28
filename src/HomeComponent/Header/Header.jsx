import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center bg-main_font_color justify-between py-5 fixed top-0 left-0 z-10 w-full px-[8%] ">
          <div className="slistextLeft">
            <span className="text-2xl text-main_bg_color font-bold relative ">ARAFAT</span>
          </div>
          <div>
            <ul className="flex items-center gap-x-5  ">
              <li className="slistextbottom text-main_bg_color text-2xl  font-normal ml-8 transition-all inline-block hover:text-[#0ef]">
                <a href="#">Home</a>
              </li>
              <li className="slistextbottom text-main_bg_color text-2xl font-normal ml-8 transition-all inline-block hover:text-[#0ef]">
                <a href="#">About</a>
              </li>
              <li className="slistextbottom text-main_bg_color text-2xl font-normal ml-8 transition-all inline-block hover:text-[#0ef]">
                <a href="#">Skill</a>
              </li>
              <li className="slistextbottom text-main_bg_color text-2xl font-normal ml-8 transition-all inline-block hover:text-[#0ef]">
                <a href="#">Potfolio</a>
              </li>
              <li className="slistextbottom text-main_bg_color text-2xl font-normal ml-8 transition-all inline-block hover:text-[#0ef]">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
