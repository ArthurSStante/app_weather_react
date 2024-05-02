import React from "react";
import Headers from "../Header";
import Search from "../Search";

import video from "../../videos/1118373_4k_Weather_Think_3840x2160.mp4";

function Pagina() {
  return (
    <div className="relative h-screen">
      <Headers />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source type="video/mp4" />
      </video>
      <Search />
    </div>
  );
}
export default Pagina;
