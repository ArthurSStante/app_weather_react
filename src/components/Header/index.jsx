import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center bg-[black] bg-opacity-45 relative z-10">
      <div className="flex items-center ">
        <img className="ml-4 mt-2 mb-2 max-w-24" src={logo} alt="logo" />
        <h1 className="ml-3 text-2xl text-[white]">App Weather Timer</h1>
      </div>
      <div className="mr-4 text-[1.2rem] text-[white] rounded-full bg-darkBlue hover:bg-hoverDarkBlue transition-all duration-700 ">
        <a className="px-5 py-13" href="/">
          Início
        </a>
      </div>
    </div>
  );
}

export default Header;
