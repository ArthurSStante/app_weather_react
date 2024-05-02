import React from "react";
import video from ""

const videoBackground = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="1118373_4k_Weather_Think_3840x2160.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};

export default videoBackground;
