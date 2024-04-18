import React from "react";
import Search from "../Search";
function Header() {
  return (
    <div>
      {/* <div className="logo"></div> */}
      <div className="bg-gray-200 flex items-center justify-center">
        <div className="">Buscar Cidade</div>
        <Search />
      </div>
    </div>
  );
}

export default Header;
