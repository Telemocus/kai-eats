import React from "react";

export const Hero = () => {
  return (
    <div  className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative ">
        {/* OVERLAY */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" >
            THE <span className="text-blue-500">BEST</span>
          </h1>
          <h1  className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            FOODS <span className=" text-blue-500 ">DELIVERED</span>
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Alcohol" 
        />
      </div>
    </div>
  );
};

export default Hero;
